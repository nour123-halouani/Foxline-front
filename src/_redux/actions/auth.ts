import { routes } from "@/config/routes";
import axios from "axios";
import { useRouter } from "next/navigation";

const baseURL = process.env.NEXT_PUBLIC_BACK_URL;

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

// Register API
export async function signUp(data: any) {
  const fullName = `${data?.firstName} ${data?.lastName}`;
  try {
    const response = await axios.post(`${baseURL}/v1/user/registerUser`, {
      name: fullName,
      email: data?.email,
      password: data?.password,
      role: "user",
    });

    return response.data;
  } catch (error: any) {
    console.log("error", error);
    if (error.response && error.response.data) {
      throw new Error(error.response.data);
    } else {
      throw new Error("Registration failed");
    }
  }
}

export const checkAccessToken = async (): Promise<any> => {
  const accessToken = localStorage.getItem("accessToken") || "";

  if (!accessToken) {
    throw new Error("Access Token is not defined in localstorage");
  }

  try {
    const response = await axios.get(`${baseURL}/v1/user/verify-token`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      return accessToken;
    }
    return await refreshAccessToken();
  } catch (error: any) {
    console.error("Error checking access token:", error.response?.data);
    return await refreshAccessToken();
  }
};

export const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("Refresh Token envoyé:", refreshToken);

  if (!refreshToken) {
    throw new Error("Refresh Token is not defined in localstorage");
  }

  try {
    const response = await axios.post(`${baseURL}/v1/user/refresh-token`, {
      refreshToken,
    });

    const newAccessToken = response.data.accessToken;

    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    return newAccessToken;
  } catch (error: any) {
    console.error("Error refreshing access token:", error.response?.data);
    throw new Error("Failed to refresh access token");
  }
};

export async function getUserDetails(userId: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACK_URL}/v1/user/details`,
      { userId }
    );

    return response.data;
  } catch (error: any) {
    console.error("Error fetching shop details:", error);
    throw (
      error.response?.data?.error || new Error("Failed to fetch shop details.")
    );
  }
}

export async function getNoVerifiedUser(userId: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACK_URL}/v1/user/get-noverified-user`,
      { userId }
    );

    if (response.status === 200) {
      return response.data;
    } else if (response.status === 404) {
      throw new Error("User not found");
    } else if (response.status === 400) {
      throw new Error(
        response.data.message || "User is verified with conditions"
      );
    } else {
      throw new Error(response.data.error || "Unexpected error occurred");
    }
  } catch (error: any) {
    console.error("Error fetching user verification status:", error);
    throw error.response?.data || error;
  }
}

export async function ConnectStore({ data, userId }: any) {
  try {
    const response = await axios.put(`${baseURL}/v1/user/connect`, {
      userId,
      apiKey: data.apiKey,
      shopDomain: data.shopDomain,
    });

    return {
      ok: response.status === 200,
      message: response.data.message,
      data: response.data,
    };
  } catch (error: any) {
    const backendMessage = error.response?.data?.error;
    throw new Error(backendMessage);
  }
}

export async function SendVerifyMail({ email }: { email: string }) {
  try {
    const response = await axios.post(`${baseURL}/v1/user/send-verify-mail`, {
      email: email,
    });

    return response.data;
  } catch (error: any) {
    console.error("Error sending verification email:", error);

    if (error.response && error.response.data) {
      throw new Error(
        error.response.data.error || "Failed to send verification email"
      );
    } else {
      throw new Error("Failed to send verification email");
    }
  }
}


export async function logout(): Promise<boolean> {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    console.warn("No access token found in localStorage.");
    return false;
  }

  try {
    await axios.post(`${baseURL}/v1/user/logout`, {}, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });

    return true;
  } catch (error: any) {
    console.error("Error logging out:", error.response?.data || error.message);
    return false;
  }
}
