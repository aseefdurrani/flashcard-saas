import { SignIn } from "@clerk/nextjs";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <Container maxWidth="100vh">
      <AppBar position="static" sx={{ background: "#3f51b5" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Flashcard SaaS
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#e9edc9",
              marginRight: 1,
              "&:hover": {
                background: "#b0c4b1",
              },
            }}
          >
            <Link href="/sign-in" passHref>
              Login
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#e9edc9",
              marginLeft: 1,
              "&:hover": {
                background: "#b0c4b1",
              },
            }}
          >
            <Link href="/sign-up" passHref>
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h4" gutterBottom mt={2}>
          Sign In
        </Typography>
        <SignIn />
      </Box>
    </Container>
  );
}
