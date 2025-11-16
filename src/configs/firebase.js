// Dummy Firebase replacement used in local dev so nothing talks to real backend.
export const firebaseApp = null;

export const auth = {
  currentUser: null,
  // Fake async methods that do nothing but keep promise signatures.
  signInWithPopup: async () => null,
  signOut: async () => null,
  onAuthStateChanged: (callback, onError) => {
    // Firebase immediately invokes the callback (sync/async) with the
    // most recent auth state and returns an unsubscribe handler.
    if (typeof callback !== 'function') {
      if (typeof onError === 'function') onError(new Error('No callback'));
      return () => null;
    }

    const timeoutId = setTimeout(() => {
      callback(auth.currentUser);
    }, 0);

    return () => clearTimeout(timeoutId);
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
