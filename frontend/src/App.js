import React, { useState } from "react";
import Login from "./components/Login";
import ServiceForm from "./components/ServiceForm";
import CustomerInfo from "./components/CustomerInfo";
import CompanyList from "./components/CompanyList";

import {
  Container,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
} from "@mui/material";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData]       = useState(null); // { customer, towCompanies, taxiCompanies }
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  /* ----------- llamada al backend cuando pulsan “Enviar” ----------- */
  const handleCreateService = async (form) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/service-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `Error ${res.status}`);
      }

      const result = await res.json(); // { customer, towCompanies, taxiCompanies }
      setData(result);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ----------------------------- RENDER ---------------------------- */
  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  if (!data) {
    return (
      <>
        <ServiceForm onSubmit={handleCreateService} />
        {loading && <p style={{ textAlign: "center" }}>Enviando…</p>}
        {error && (
          <p style={{ textAlign: "center", color: "red" }}>{error}</p>
        )}
      </>
    );
  }

  return (
    <Container sx={{ my: 6 }}>
      {/* centramos todo y hacemos las dos columnas */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Columna izquierda: ficha del cliente */}
        <Grid item xs={12} md={4}>
          <CustomerInfo customer={data.customer} />
        </Grid>

        {/* Columna derecha: grúas + taxis dentro de la misma tarjeta */}
        <Grid item xs={12} md={6}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <CardHeader title="Servicios disponibles" />
            <Divider />
            <CardContent>
              <Stack spacing={3}>
                <CompanyList
                  title="Grúas disponibles"
                  companies={data.towCompanies}
                />
                <CompanyList
                  title="Taxis disponibles"
                  companies={data.taxiCompanies}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
