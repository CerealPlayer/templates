import { signInResponse } from "../types/api";

export default async function signIn(value: any) {
  const body = JSON.stringify(value);
  const response = await fetch("/api/attempt-signin", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body,
  });
  let error = null;
  let message = null;
  let success = null;
  if (!response.ok) {
    error = "Some error ocurred on our end, try again in a few minutes";
  } else {
    const data: signInResponse = await response.json();
    if (data.success) {
      success = true;
      message = data.message;
    } else {
      error = data.message;
    }
  }

  return { error, message, success };
}
