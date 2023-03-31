import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../lib/auth";
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
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [email, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");
  let handleChange = (event) => {
    if (event.target.name === "password") {
      onPasswordChange(event.target.value);
      console.log(password);
    } else {
      onEmailChange(event.target.value);
      console.log(email);
    }
  };
  const onSubmit = (data) => console.log(data);
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
                <Link href="/register">Create an account?</Link>
              </h5>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <h1>Log In</h1>
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
                  className="User"
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
                autoComplete={false}
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
                autoComplete={false}
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
              Log In
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
export default LoginForm;
