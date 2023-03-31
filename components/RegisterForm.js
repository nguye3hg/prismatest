import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../lib/auth";
import {
  Box,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Link from "next/link";
import { lightBlue } from "@mui/material/colors";

const colorBlue = lightBlue[50];
function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [userName, onUserNameChange] = useState("");

  let handleChange = (event) => {
    if (event.target.name === "password") {
      onPasswordChange(event.target.value);
    } else if (event.target.name === "email") {
      onEmailChange(event.target.value);
    } else {
      onUserNameChange(event.target.value);
    }
  };
  let onFormSubmit = (event) => {
    registerUser(email, userName, password);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          backgroundImage: `url("https://picsum.photos/1500")`,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "73vh",
            width: "auto",
            padding: "50px",
            bgcolor: `${colorBlue}`,

            fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
            fontWeight: "500",
            borderRadius: "3%",
            boxShadow: "5px 10px",
            margin: "10px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "500px",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "normal",
                height: "500px",
                width: "500px",
              }}
            >
              <img
                style={{
                  transform: "scale(0.8)",
                }}
                alt="hi"
                src="/img/home.png"
              ></img>
              <h5>
                <Link href="/login">Log to an existing account?</Link>
              </h5>
            </div>
          </div>
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div>
              <h1>Register</h1>
            </div>
            <div
              style={{
                height: "63px",
                display: "flex",
                borderBottom: "2px solid black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  heigth: "50px",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  alt="hi"
                  style={{ transform: "scale(0.06)" }}
                  className="Username"
                  src="/img/User.png"
                ></img>
              </div>
              <TextField
                variant="standard"
                label="Username"
                margin="normal"
                type="Username"
                name="Username"
                placeholder="Username"
                onChange={handleChange}
                {...register("Username", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <h2 style={{ display: "flex", alignItems: "flex-end" }}>x</h2>
            </div>

            <div
              style={{
                height: "63px",
                display: "flex",
                borderBottom: "2px solid black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  heigth: "50px",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  alt="hi"
                  style={{ transform: "scale(0.06)" }}
                  className="UserName"
                  src="/img/User.png"
                ></img>
              </div>
              <TextField
                variant="standard"
                label="email"
                margin="normal"
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChange}
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
              <h2 style={{ display: "flex", alignItems: "flex-end" }}>x</h2>
            </div>

            <div
              style={{
                height: "63px",
                display: "flex",
                borderBottom: "2px solid black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50px",
                  heigth: "50px",
                  borderRadius: "100%",
                  overflow: "hidden",
                  alignItems: "center",
                }}
              >
                <img
                  alt="hi"
                  style={{ transform: "scale(0.8)" }}
                  className="lock"
                  src="/img/lock.png"
                ></img>
              </div>

              <TextField
                variant="standard"
                label="password"
                margin="normal"
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                {...register("email", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
              <h2 style={{ display: "flex", alignItems: "flex-end" }}>x</h2>
            </div>
            <div>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />
            </div>
            <Button variant="contained" type="submit">
              Register
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
export default RegisterForm;
