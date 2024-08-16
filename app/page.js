import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <Container maxWidth="100vw">
      <Head>
        <title>Flashcard SaaS</title>
        <mta name="description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard Saas
          </Typography>
          <SignedOut>
            <Button color="inherit"> Login </Button>
            <Button color="inherit"> Sign Up </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography variant="h2">Welcome to Flashcard Saas</Typography>
        <Typography variant="h5">
          The easiest way to make flashcards from your text
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>
      <Box sx={{ my: 6, textAlign: "center" }}>
        <Typography variant="h4" components="h2">
          Features
        </Typography>
        <Grid contained spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h3">
              Easy to Use
            </Typography>
            <Typography>
              Just paste your text and we'll do the rest. Creating flahcards has
              never been easier
            </Typography>
            <Typography variant="h6" component="h3">
              Easy to Use
            </Typography>
            <Typography>
              Just paste your text and we'll do the rest. Creating flahcards has
              never been easier
            </Typography>
            <Typography variant="h6" component="h3">
              Easy to Use
            </Typography>
            <Typography>
              Just paste your text and we'll do the rest. Creating flahcards has
              never been easier
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
