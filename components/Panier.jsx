import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Panier() {
  const test = {
    price: "55.25",
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: "90%",
        right: "10%",
      }}
    >
      <Button
        size="large"
        color="secondary"
        variant="contained"
        sx={{ background: "secondary.dark" }}
      >
        Panier {test.price}
      </Button>
    </Box>
  );
}
