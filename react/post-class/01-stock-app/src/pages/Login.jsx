import React from "react";
import Container from "@mui/material/Container";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import image from "../assets/result.svg";
import LockIcon from "@mui/icons-material/Lock";
import { Formik, form } from "formik";
import { object, string } from "yup";
import useAuthRequest from "../services/useAuthRequest";

const Login = () => {
  const loginSchema = object({
    email: string()
      .email("Geçerli bir email giriniz")
      .required("Email zorunludur"),
    password: string()
      .required("Şifre zorunludur")
      .min(8, "Şifre en az 8 karakter olmalıdır")
      .max(16, "Şifre en fazla 16 karakter olmalıdır")
      .matches(/\d+/, "Şifre en az bir rakam içermelidir.")
      .matches(/[a-z]+/, "Şifre en az bir küçük harf içermelidir.")
      .matches(/[A-Z]+/, "Şifre en az bir büyük harf içermelidir.")
      .matches(
        /[@$!%*?&]+/,
        "Şifre en az bir özel karakter(@$!%*?&) içermelidir."
      ),
  });

  const {login} = useAuthRequest()
  return (
    <div>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          sx={{
            height: "100vh",
            p: 2,
          }}
        >
          <Grid item xs={12} mb={3}>
            <Typography variant="h3" color="secondary.light" align="center">
              STOCK APP
            </Typography>
          </Grid>

          <Grid item xs={12} sm={10} md={6}>
            <Avatar
              sx={{
                backgroundColor: "secondary.light",
                m: "auto",
                width: 40,
                height: 40,
              }}
            >
              <LockIcon size="30" />
            </Avatar>
            <Typography
              variant="h4"
              align="center"
              mb={4}
              color="secondary.light"
            >
              Login
            </Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={(values, actions) => {
                //TODO
                //? post (login)
                //? Toastify
                //? Global State Ubduting
                //? form reset
                //? navigate
                //? isSubmitting
                login(values)
                actions.resetForm()
                actions.setSubmitting(false)
              }}
            >
              <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  label="password"
                  name="password"
                  id="password"
                  type="password"
                  variant="outlined"
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </Formik>

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Link to="/register">Do you have not an account?</Link>
            </Box>
          </Grid>

          <Grid item xs={10} sm={7} md={6}>
            <Container>
              <img src={image} alt="img" />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
