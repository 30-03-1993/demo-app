import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import BuildIcon from "@mui/icons-material/Build";

export default function CompanyList({ title, companies }) {
  if (!companies?.length) return null;

  const isTow = title.toLowerCase().includes("grúa");
  const Icon   = isTow ? BuildIcon : LocalTaxiIcon;

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <List dense>
        {companies.map((c) => (
          <ListItem key={c.id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.light" }}>
                <Icon fontSize="small" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={c.name}
              secondary={c.phone}
              primaryTypographyProps={{ fontWeight: 500 }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
