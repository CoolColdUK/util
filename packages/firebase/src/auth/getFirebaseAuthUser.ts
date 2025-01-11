import {Auth} from 'firebase-admin/auth';

/**
 * Verify token
 * @returns decoded id token if valid, undefined otherwise
 */
export async function getFirebaseAuthUser(firestoreAuth: Auth, token?: string) {
  if (!token) return false;
  try {
    return await firestoreAuth.verifyIdToken(token);
  } catch (error) {
    return undefined;
  }
}
