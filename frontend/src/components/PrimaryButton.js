import { Button } from "@mui/material";

export default function PrimaryButton(props) {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{ borderRadius: 3 }}
      {...props}
    />
  );
}
