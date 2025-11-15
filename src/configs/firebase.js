// Dummy Firebase replacement used in local dev so nothing talks to real backend.
export const firebaseApp = null;

export const auth = {
  currentUser: null,
  // Fake async methods that do nothing but keep promise signatures.
  signInWithPopup: async () => null,
  signOut: async () => null,
  onAuthStateChanged: (_, onError) => {
    if (typeof onError === 'function') onError(null);
    return () => {};
  },
};

export const db = {
  collection: () => ({
    get: async () => ({ docs: [] }),
  }),
};

export const storage = {
  ref: () => ({
    put: async () => null,
    getDownloadURL: async () => null,
  }),
};

export default firebaseApp;
