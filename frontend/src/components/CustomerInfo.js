import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Stack,
  Divider,
} from "@mui/material";

function InfoRow({ label, value }) {
  return (
    <Stack direction="row" spacing={1}>
      <Typography variant="subtitle2" width={110} color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body2" sx={{ wordBreak: "break-all" }}>
        {value ?? "—"}
      </Typography>
    </Stack>
  );
}

export default function CustomerInfo({ customer }) {
  if (!customer) return null;

  const initials = customer.name
    ? customer.name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "👤";

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "primary.main" }}>{initials}</Avatar>}
        title={customer.name ?? "Cliente"}
        subheader={`ID #${customer.id}`}
      />
      <Divider />
      <CardContent>
        <Stack spacing={1.5}>
          <InfoRow label="DNI"       value={customer.dni} />
          <InfoRow label="Teléfono"  value={customer.phone} />
          <InfoRow label="Dirección" value={customer.address} />
        </Stack>
      </CardContent>
    </Card>
  );
}
