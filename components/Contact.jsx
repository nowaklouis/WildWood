import { useState, useEffect } from "react";
import * as React from "react";
import { Box, CardContent, Grid, TextField } from "@mui/material/";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Contact() {
  const [send, setSend] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const SendMessage = async (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(send),
      });

      const result = await response.json();

      setIsLoading(false);

      if (!response.ok) {
        console.log("error");
      } else {
        console.log("GREAT");
      }

      console.log(send);
    }

    setOpen(true);
  };

  const totalMessage = (e) => {
    setSend({ ...send, [e.target.name]: e.target.value });
  };

  //   const slideBottom = (elem, delay, duration) => {
  //     gsap.fromTo(
  //       elem,
  //       {
  //         opacity: 0,
  //         y: -200,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: elem,
  //           start: "top center",
  //           end: "bottom center",
  //         },
  //       }
  //     );
  //   };
  //   useEffect(() => {
  //     slideBottom(".sect4");
  //   }, []);

  return (
    <Box
      className="sect4"
      id="Contact"
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5rem",
        zIndex: "10",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: "secondary.main",
          width: { xs: "95%", md: "60%" },
        }}
      >
        <CardContent>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Prénom"
                  name="firstname"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Nom"
                  name="lastname"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="E-mail"
                  name="email"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={5}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={totalMessage}
                />
              </Grid>
              {!isLoading && (
                <Button
                  type="submit"
                  variant="Contained"
                  fullWidth
                  sx={{ backgroundColor: "secondary.dark", marginTop: "1rem" }}
                  onClick={SendMessage}
                >
                  Envoyer
                </Button>
              )}
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Vôtre message m'a bien été envoyé !
                </Alert>
              </Snackbar>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
