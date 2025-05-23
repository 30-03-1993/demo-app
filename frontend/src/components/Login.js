import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "operadora") {
      onLogin();
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <Grid
      container
      sx={{ minHeight: "100vh" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={11} sm={8} md={4} lg={3}>
        <Paper
          elevation={4}
          sx={{ p: 4, display: "flex", flexDirection: "column", gap: 2 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Box textAlign="center">
            <Avatar sx={{ m: "0 auto", bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ mt: 1 }}>
              Entrar
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" fullWidth variant="contained" size="large">
            Acceder
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;
