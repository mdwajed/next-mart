"use client";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    const result = await res.json();
    if (result.status === true) {
      console.log("Response data:", result.data);
      if (typeof window !== "undefined") {
        localStorage.setItem("token", result.data.accessToken);
      }
    }

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const LoginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();

    if (result.status && result.data?.accessToken) {
      if (typeof window !== "undefined") {
        localStorage.setItem("token", result.data.accessToken);
      }
    }
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getCurrentUser = async () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        return jwtDecode(token);
      } catch (error) {
        console.error("Invalid Token:", error);
      }
    }
  }
  return null;
};

// Logout User (Clear Token)
export const logoutUser = async () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};
