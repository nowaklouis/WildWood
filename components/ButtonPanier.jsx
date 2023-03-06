import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonPanier() {
  const save = () => {
    window.localStorage.setItem(plante);
  };

  return (
    <div>
      <Button sx={{ boxShadow: "0px 2px 5px black" }} onClick={save}>
        Ajouter au Panier
      </Button>
    </div>
  );
}
