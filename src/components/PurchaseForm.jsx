import { useEffect, useState } from "react";
import { Typography, Box, TextField, Grid, Select, MenuItem, InputLabel, Button } from "@mui/material";
import { getDataDNI } from "../api/fetchAxios";

export const PurchaseForm = () => {
  const [select, setSelect] = useState("DNI");
  const [dates, setDates] = useState({
    dni: "",
    nombres: "",
    apellidos: "",
    error: false,
  });

  const onChangeSelect = (e) => {
    setSelect(e.target.value);
  };

  const onChangeInputDni = ({ target }) => {
    const dni = target.value;

    if (!/[a-z]/gi.test(dni) && dni.length <= 8) {
      setDates({ ...dates, dni });
    }
  };

  const getData = async () => {
    const newData = await getDataDNI(dates.dni);
    const { apellido_paterno, apellido_materno, nombres, error = false } = newData;
    setDates({
      ...dates,
      nombres,
      apellidos: apellido_paterno + " " + apellido_materno,
      error,
    });
  };

  useEffect(() => {
    setDates({ ...dates, error: false });

    if (dates.dni.length === 8) {
      getData();
    }
  }, [dates.dni]);

  return (
    <Box
      maxWidth="md"
      sx={{ marginTop: "32px", marginLeft: "auto", marginRight: "auto", fontFamily: "'Montserrat', sans-serif" }}
    >
      <Typography
        sx={{ color: "#070707", fontSize: "18px", fontWeight: "800", marginTop: "30px", marginBottom: "20px" }}
      >
        Así garantizamos que puedas recibir tus entregas
      </Typography>
      <Box component={"form"}>
        <Grid container spacing={"30px"}>
          <Grid item xs={6}>
            <InputLabel id="select-document">Documento de identidad</InputLabel>
            <Select
              fullWidth
              variant="standard"
              labelId="select-document"
              value={select}
              sx={{ height: "42px" }}
              onChange={onChangeSelect}
            >
              <MenuItem value={"DNI"}>DNI</MenuItem>
              <MenuItem value={"CARNET"}>CARNET. EXTRANJERIA</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={6}>
            {dates.error ? (
              <TextField
                onChange={onChangeInputDni}
                label="EL N° DE DNI NO PUDO SER ENCONTRADO"
                variant="standard"
                error
                margin="normal"
                value={dates.dni}
                fullWidth
              />
            ) : (
              <TextField
                onChange={onChangeInputDni}
                label="DNI"
                variant="standard"
                margin="normal"
                value={dates.dni}
                fullWidth
              />
            )}
          </Grid>

          <Grid item xs={6}>
            <TextField label="Nombres" variant="standard" margin="normal" value={dates.nombres} fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Apellidos" variant="standard" margin="normal" value={dates.apellidos} fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Fecha de Nacimiento" variant="standard" margin="normal" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Número de celular" variant="standard" margin="normal" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <TextField label="Correo Electronico" variant="standard" margin="normal" fullWidth />
          </Grid>
        </Grid>
        {/* Buttons*/}
        <Grid container justifyContent="center" columnGap="50px" marginTop="80px">
          <Button
            variant="text"
            sx={{
              color: "#282828",
              padding: "5px 50px",
              borderRadius: "50px",
            }}
          >
            Atrás
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#fff",
              width: "170px",
              height: "56px",
              borderRadius: "50px",
              backgroundColor: "#282828",
              "&:hover": {
                backgroundColor: "#101010",
              },
            }}
          >
            Continuar
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};
