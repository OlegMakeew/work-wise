import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { auth, firestore } from "../firebase/config";

const SET_USER = "SET_USER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password); // Юзер проходим авторизацию

      const usersRef = doc(firestore, "users", user.uid);

      await setDoc(usersRef, { isOnline: true }, { merge: true });

      setIsPending(false);
      setError(null);
      return user;
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { login, isPending, error };
};
