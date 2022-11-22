import { useState } from "react";
import { Typography, Button, StepLabel, Step, Stepper, Box } from "@mui/material";
import { fontWeight } from "@mui/system";

const steps = ["Productos", "Sobre ti", "Sobre la entrega", "Pago"];

export const PurchaseStep = () => {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <Box sx={{ width: "100%", paddingBottom: "56px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                sx={{ flexWrap: "wrap", justifyContent: "space-around", marginBottom: "20px" }}
                {...labelProps}
              ></StepLabel>
              <Typography
                sx={
                  index <= activeStep
                    ? { color: "#282828", fontWeight: "600" }
                    : { color: "#444444", fontWeight: "500" }
                }
              >
                {label}
              </Typography>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};
