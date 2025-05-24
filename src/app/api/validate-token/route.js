import { COGNITO } from "../../../env.js";
import { CognitoJwtVerifier } from "aws-jwt-verify";

// Validar que las variables de entorno están definidas
if (!COGNITO?.USER_POOL_ID || !COGNITO?.CLIENT_ID) {
  throw new Error("Cognito USER_POOL_ID or CLIENT_ID is missing or undefined.");
}

const idVerifier = CognitoJwtVerifier.create({
  userPoolId: COGNITO.USER_POOL_ID,
  clientId: COGNITO.CLIENT_ID,
  tokenUse: "id",
});

const accessVerifier = CognitoJwtVerifier.create({
  userPoolId: COGNITO.USER_POOL_ID,
  clientId: COGNITO.CLIENT_ID,
  tokenUse: "access",
});

export async function POST(request) {
  try {
    const baseKey = `CognitoIdentityServiceProvider.${COGNITO.CLIENT_ID}`;
    const username = request.cookies.get(`${baseKey}.LastAuthUser`)?.value;

    if (!username) {
      return new Response("Missing username cookie", { status: 400 });
    }

    const idToken = request.cookies.get(`${baseKey}.${username}.idToken`)?.value;
    const accessToken = request.cookies.get(`${baseKey}.${username}.accessToken`)?.value;

    if (!idToken || !accessToken) {
      return new Response("Missing token(s)", { status: 400 });
    }

    await idVerifier.verify(idToken);
    await accessVerifier.verify(accessToken);

    return new Response("Ok", { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return new Response("Invalid Token", { status: 401 });
  }
}
