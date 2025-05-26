import { NextResponse } from "next/server";
import { COGNITO } from "./env.js";

async function fetchNewTokens(refresh_token) {
  const tokenEndpoint = `https://${COGNITO.DOMAIN}.auth.${COGNITO.REGION}.amazoncognito.com/oauth2/token`;

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: COGNITO.CLIENT_ID,
    refresh_token,
  });

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch tokens: ${response.status} ${errorText}`);
  }

  return await response.json();
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Rutas públicas que no necesitan autenticación
  const publicPaths = [
    "/",
    "/en/auth/login",
    "/en/auth/register",
    "/favicon.ico",
    "/api/validate-token",
  ];

  if (publicPaths.some((path) => pathname.startsWith(path))) {
    // Si la ruta es pública, dejamos pasar sin validación
    return NextResponse.next();
  }

  // Intentamos obtener usuario y tokens
  const username = request.cookies.get(`CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}.LastAuthUser`)?.value;

  if (!username) {
    // No hay usuario, redirigimos a login
    return NextResponse.redirect(new URL("/en/auth/login", request.url));
  }

  const cookieKeys = {
    id: `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}.${username}.idToken`,
    access: `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}.${username}.accessToken`,
    refresh: `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}.${username}.refreshToken`,
  };

  const refreshToken = request.cookies.get(cookieKeys.refresh)?.value;
  if (!refreshToken) {
    return NextResponse.redirect(new URL("/en/auth/login", request.url));
  }

  let idToken = request.cookies.get(cookieKeys.id)?.value;
  let accessToken = request.cookies.get(cookieKeys.access)?.value;

  const { origin } = new URL(request.url);
  const apiUrl = `${origin}/api/validate-token`;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Cookie: request.headers.get("cookie") || "",
    },
  });

  if (!res.ok) {
    try {
      const data = await fetchNewTokens(refreshToken);
      idToken = data.id_token;
      accessToken = data.accessToken;

      const response = NextResponse.next();
      response.cookies.set({
        name: cookieKeys.access,
        value: accessToken,
        secure: true,
        maxAge: data.expires_in,
      });

      response.cookies.set({
        name: cookieKeys.id,
        value: idToken,
        secure: true,
        maxAge: data.expires_in,
      });

      return response;
    } catch (e) {
      console.log("Error: ", e)
      return NextResponse.redirect(new URL("/en/auth/login", request.url));
    }
  }

  // Si el usuario está validado y está en ruta pública, podrías redirigir al dashboard:
  if (pathname === "/en/auth/login" || pathname === "/en/auth/register") {
    return NextResponse.redirect(new URL("/logged/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|api).*)"],
};
