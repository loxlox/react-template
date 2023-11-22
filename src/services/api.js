/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import config from "../config";

export default async function fetchApi(
  url,
  method,
  customOptions = {},
  customHeaders = { "Content-Type": "application/json" }
) {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(url, {
      ...customOptions,
      method: method,
      headers: {
        ...customHeaders,
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
