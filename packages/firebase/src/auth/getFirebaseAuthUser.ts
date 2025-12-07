import {Auth, DecodedIdToken} from 'firebase-admin/auth';

/**
 * Verify token
 * @returns decoded id token if valid, undefined otherwise
 */
export async function getFirebaseAuthUser<R extends DecodedIdToken = DecodedIdToken>(
  firebaseAuth: Auth,
  token?: string,
): Promise<R | undefined> {
  if (!token) return undefined;
  try {
    return (await firebaseAuth.verifyIdToken(token)) as R;
  } catch {
    return undefined;
  }
}
