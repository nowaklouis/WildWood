import Head from 'next/head'
import { Stack } from '@mui/material';
import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wild Wood</title>
        <link rel="icon" href="/favico.png" />
      </Head>
      <Stack
        sx={{
          minHeight: '100vh',
          minWidth: '100vw',
          padding: '1rem',
          backgroundImage: 'url("./boardwood.jpg")',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <Navbar />
      </Stack>
    </>
  )
}
