import { authApiResponse } from "../types/api";

async function handleAuthResponse(url: string, value: any) {
  const body = JSON.stringify(value);
  const response = await fetch(url, {
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
    const data: authApiResponse = await response.json();
    if (data.success) {
      success = true;
      message = data.message;
      auth(data);
    } else {
      error = data.message;
    }
  }
  return { error, message, success };
}

function auth(data: authApiResponse) {
  const authObj = { user: data.user, sessionId: data.sessionId };
  const cookified = JSON.stringify(authObj);
  const cookieMain = `fes-auth=${cookified}`;
  const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7;
  const maxAge = `;max-age=${SECONDS_IN_A_WEEK}`;
  const additionalAttrs = ";SameSite=Strict";
  const cookie = cookieMain + maxAge + additionalAttrs;
  document.cookie = cookie;
}

export async function logIn(value: any) {
  return await handleAuthResponse("/api/attempt-login", value);
}

export async function signIn(value: any) {
  return await handleAuthResponse("/api/attempt-signin", value);
}

export function getAuthCookie() {
  const cookies = document.cookie;
  const cookieArray = cookies.split(";").map((cookie) => cookie.trim());
  const cookieObjs = cookieArray.map((cookie) => ({
    key: cookie.split("=")[0],
    value: cookie.split("=")[1],
  }));
  const authCookie = cookieObjs.filter(
    (cookie) => cookie.key === "fes-auth"
  )[0];
  const parsedCookie = JSON.parse(authCookie.value);
  return parsedCookie;
}
