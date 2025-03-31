import {
  Container,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Form from "./components/Form";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

const App = () => {
  const darkTheme = useMediaQuery("(prefers-color-scheme: dark)");
  const year = new Date().getFullYear();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <header className="h-[15vh] flex justify-center items-center mt-2">
          <Typography
            sx={
              darkTheme
                ? {
                    letterSpacing: "1px",
                    textShadow: "1px 2px 4px rgb(255 255 255 / 19%)",
                  }
                : {
                    letterSpacing: "1px",
                    textShadow: "1px 2px 4px rgb(0 0 0 / 50%);",
                  }
            }
            variant="h4"
            component="h1"
          >
            Questionnaire du Site
          </Typography>
        </header>
        <main className="min-h-[80vh]">
          <Form />
        </main>
        <footer className="h-[5vh] flex justify-center items-center gap-[5px] mb-3">
          <Typography variant="body1">Créé par Régis Lessard</Typography>
          <Typography variant="body1">
            Tout droit réservé &copy; {year}
          </Typography>
        </footer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
