import {Auth} from 'firebase-admin/auth';

/**
 * Verify token
 * @returns decoded id token if valid, undefined otherwise
 */
export async function getFirebaseAuthUser(firebaseAuth: Auth, token?: string) {
  if (!token) return false;
  try {
    return await firebaseAuth.verifyIdToken(token);
  } catch (error) {
    return undefined;
  }
}
