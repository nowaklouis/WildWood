import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function InfoCard1() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "5rem" }}>
      <Card
        sx={{
          width: { md: "80%", xs: "95%" },
          backgroundColor: "secondary.main",
        }}
      >
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like. This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like. This impressive
            paella is a perfect party dish and a fun meal to cook together with
            your guests. Add 1 cup of frozen peas along with the mussels, if you
            like. This impressive paella is a perfect party dish and a fun meal
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
