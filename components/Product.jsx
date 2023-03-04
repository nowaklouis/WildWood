import { useState, useEffect } from "react";
import axios from "axios";
import {
  CardMedia,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";

export default function Product() {
  const [plantes, setPlantes] = useState();

  useEffect(() => {
    axios
      .get(`/dataTrefle.json`, {})
      .then((response) => {
        console.log(response.data.data);
        setPlantes(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingTop: "2rem",
      }}
    >
      {plantes?.map((plante, id) => (
        <Card
          key={id}
          sx={{
            width: 275,
            backgroundColor: "secondary.main",
            margin: "1rem",
          }}
        >
          <CardContent>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {plante?.common_name}
            </Typography>
            <CardMedia
              component="img"
              height="194"
              sx={{ width: "100%", borderRadius: "5px" }}
              image={plante?.image_url}
              alt="Plantes"
            />
            <Typography variant="h6">{plante?.scientific_name}</Typography>
            <Typography>Famille des : {plante?.family}</Typography>
            <Typography>Taille adlute : {plante?.height}</Typography>

            <Typography variant="h5">{plante?.price}€</Typography>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button sx={{ boxShadow: "0px 2px 5px black" }}>
                Ajouter au panier
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
