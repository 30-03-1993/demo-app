// src/components/ServiceForm.js
import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import PrimaryButton from "./PrimaryButton"; // si prefieres tu botón reutilizable

export default function ServiceForm({ onSubmit }) {
  const [form, setForm] = useState({
    dni: "",
    phone: "",
    address: "",
  });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form); // lanza la lógica que ya tenías
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper
        elevation={4}
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: 4 }}
      >
        <Stack spacing={3}>
          {/* Cabecera */}
          <Stack direction="row" spacing={1} alignItems="center">
            <RoomServiceIcon color="primary" />
            <Typography variant="h5" component="h1">
              Solicitud de Servicio
            </Typography>
          </Stack>

          {/* Campos */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="DNI"
                value={form.dni}
                onChange={handleChange("dni")}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Teléfono"
                value={form.phone}
                onChange={handleChange("phone")}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Dirección"
                value={form.address}
                onChange={handleChange("address")}
                fullWidth
                required
              />
            </Grid>
          </Grid>

          {/* Botón */}
          <PrimaryButton type="submit" fullWidth>
            Enviar
          </PrimaryButton>
          {/* Si no usas PrimaryButton, comenta la línea anterior y descomenta esta:
          <Button variant="contained" size="large" fullWidth type="submit">
            Enviar
          </Button> */}
        </Stack>
      </Paper>
    </Container>
  );
}