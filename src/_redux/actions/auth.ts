import axios from "axios";

export async function signIn(data: { email: string; password: string }) {
  const { email, password } = data;
  try {
    const response = await axios.post(`${baseURL}/v1/user/loginUser`, {
      email,
      password,
    });

    return response.data;
  } catch (error: any) {
    console.error("Error logging in user:", error);

    if (error.response && error.response.data) {
      throw new Error(error.response.data.error || "Login failed");
    } else {
      throw new Error("Login failed");
    }
  }
}