import Head from "next/head";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import NavBar from "../components/NavBar";
import InfoCard1 from "../components/InfoCard1";
import InfoCard2 from "../components/InfoCard2";
import InfoCard3 from "../components/InfoCard3";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wild Wood</title>
        <link rel="icon" href="/Wildicon.png" />
      </Head>
      <Stack
        sx={{
          minHeight: "100vh",
          minWidth: "100vw",
          padding: "1rem",
          backgroundImage:
            "linear-gradient(to top, #edf1d6, #cddab6, #abc498, #87ae7d, #609966)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <NavBar />
        <Typography variant="h2" sx={{ p: "2rem" }}>
          Qui sommes nous ?
        </Typography>
        <InfoCard1 />
        <InfoCard2 />
        <InfoCard3 />
      </Stack>
    </>
  );
}
