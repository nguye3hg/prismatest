import axios from "axios";
const loginUser = async (email, password) => {
  const { data } = await axios.post("/api/login", {
    email,
    password,
  });
  console.log(data);
};
const registerUser = async (email, username, password) => {
  const { data } = await axios.post("/api/register", {
    email,
    username,
    password,
  });
  console.log(data);
};
export { loginUser, registerUser };
