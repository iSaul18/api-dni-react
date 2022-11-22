import { PurchaseStep } from "./components/PurchaseStep";
import { Container, Typography, Box } from "@mui/material";
import { PurchaseForm } from "./components/PurchaseForm";

const App = () => {
  return (
    <>
      <Box sx={{ paddingTop: "66px", backgroundColor: "#5B99BF1A" }}>
        <Container maxWidth="sm" sx={{ fontFamily: "'Montserrat', sans-serif" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "700",
              color: "#404040",
              marginBottom: "34px",
            }}
          >
            Ahora, cuéntanos un poco de ti
          </Typography>
          <PurchaseStep />
        </Container>
      </Box>
      <PurchaseForm />
    </>
  );
};

export default App;
