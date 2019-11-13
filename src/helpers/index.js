import * as encoding from "text-encoding";
import crypto from "crypto";

import {
  OAUTH_ENDPOINT,
  OAUTH_CLIENT_ID,
  OAUTH_REDIRECT_URL
} from "../constants";

export function generateRandomString() {
  const array = new Uint32Array(28);
  return Buffer.from(
    crypto.randomFillSync(array).buffer,
    array.byteOffset,
    array.byteLength
  ).toString("hex");
}

export function pkceChallengeFromVerifier(verifier) {
  const encoder = new encoding.TextEncoder();
  const data = encoder.encode(verifier);
  const digest = crypto
    .createHash("sha256")
    .update(data)
    .digest("base64");

  return digest
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export function buildOAuthFlowURL() {
  const oAuthStateID = generateRandomString();
  const codeVerifier = generateRandomString();
  const codeChallenge = pkceChallengeFromVerifier(codeVerifier);

  return (
    `${OAUTH_ENDPOINT}?response_type=code` +
    `&client_id=${encodeURIComponent(OAUTH_CLIENT_ID)}` +
    `&state=${encodeURIComponent(oAuthStateID)}` +
    `&scope=offline` +
    `&audience=investment_entity+users+esign_svc` +
    `&redirect_uri=${encodeURIComponent(OAUTH_REDIRECT_URL)}` +
    `&code_challenge=${encodeURIComponent(codeChallenge)}` +
    `&code_challenge_method=S256`
  );
}
