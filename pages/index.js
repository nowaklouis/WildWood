import Head from "next/head";
import { Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import Product from "../components/Product";
import Panier from "../components/Panier";

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
        <Product />
        <Panier />
      </Stack>
    </>
  );
}
