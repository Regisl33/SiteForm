import { Container, Typography } from "@mui/material";
import Form from "./components/Form";

const App = () => {
  const year = new Date().getFullYear();
  return (
    <Container>
      <header className="h-[15vh] flex justify-center items-center">
        <Typography variant="h3" component="h1">
          Questionnaire du Site
        </Typography>
      </header>
      <main className="min-h-[80vh]">
        <Form />
      </main>
      <footer className="h-[5vh] flex justify-center items-center gap-[5px]">
        <Typography variant="body1">Créé par Régis Lessard</Typography>
        <Typography variant="body1">
          Tout droit réservé &copy; {year}
        </Typography>
      </footer>
    </Container>
  );
};

export default App;
