import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TuneIcon from "@mui/icons-material/Tune";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { CardMedia, Typography, Card, CardContent } from "@mui/material";
import ButtonPanier from "./ButtonPanier";

export default function FilterBar() {
  const [tailleMin, setTailleMin] = useState("");
  const [tailleMax, setTailleMax] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [plantes, setPlantes] = useState();
  const [searchf, setSearchf] = useState(false);
  const [resultnb, setResultnb] = useState();

  const handleChange1 = (event) => {
    setTailleMin(event.target.value);
    console.log(event.target.value);
  };

  const handleChange2 = (event) => {
    setTailleMax(event.target.value);
    console.log(event.target.value);
  };

  const handleChange3 = (event) => {
    setPriceMax(event.target.value);
    console.log(event.target.value);
  };

  const search = () => {
    if (tailleMin !== null && tailleMax !== null && priceMax !== null) {
      return setSearchf(true);
    }
  };

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
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AppBar
          position="static"
          sx={{
            width: { md: "60%", sm: "40%", xs: "80%" },
            m: "2rem",
            backgroundColor: "secondary.dark",
            minWidth: { md: "650px", sm: "none", xs: "none" },
          }}
        >
          <Toolbar sx={{ display: "flex" }}>
            <TuneIcon sx={{ display: { xs: "none", md: "block" } }} />
            <Stack direction={{ xs: "column", md: "row" }} spacing={0.5}>
              <Box sx={{ minWidth: 120, p: "1rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Taille Min(m)
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tailleMin}
                    label="Age"
                    onChange={handleChange1}
                  >
                    <MenuItem value={"0"}>0</MenuItem>
                    <MenuItem value={"5"}>5</MenuItem>
                    <MenuItem value={"10"}>10</MenuItem>
                    <MenuItem value={"20"}>20</MenuItem>
                    <MenuItem value={"30"}>30</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120, p: "1rem" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Taille Max(m)
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tailleMax}
                    label="Age"
                    onChange={handleChange2}
                  >
                    <MenuItem value={"5"}>5</MenuItem>
                    <MenuItem value={"10"}>10</MenuItem>
                    <MenuItem value={"20"}>20</MenuItem>
                    <MenuItem value={"30"}>30</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 120, p: "1rem" }}>
                <TextField
                  id="priceMax"
                  label="Prix Max (€)"
                  variant="outlined"
                  onChange={handleChange3}
                />
              </Box>

              <Button onClick={search}>Lancer une Recherche</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      {searchf ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          {plantes
            ?.filter(
              (result) =>
                result.height >= tailleMin &&
                result.height <= tailleMax &&
                result.price <= priceMax
            )
            ?.map((plante, id) => (
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
                  <Typography variant="h6">
                    {plante?.scientific_name}
                  </Typography>
                  <Typography>Famille des : {plante?.family}</Typography>
                  <Typography>Taille adlute : {plante?.height} m</Typography>

                  <Typography variant="h5">{plante?.price}€</Typography>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <ButtonPanier />
                  </Box>
                </CardContent>
              </Card>
            ))}
        </Box>
      ) : null}
    </>
  );
}
