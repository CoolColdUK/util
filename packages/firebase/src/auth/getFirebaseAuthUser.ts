import {Auth, DecodedIdToken} from 'firebase-admin/auth';

/**
 * Verify token
 * @returns decoded id token if valid, undefined otherwise
 */
export async function getFirebaseAuthUser(firebaseAuth: Auth, token?: string): Promise<DecodedIdToken | undefined> {
  if (!token) return undefined;
  try {
    return await firebaseAuth.verifyIdToken(token);
  } catch (error) {
    return undefined;
  }
}
