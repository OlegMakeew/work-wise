import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth, storage, firestore } from "../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const signup = async ({ email, password, username, file }) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // const uploadPath = `avatars/${response.user.uid}/${file.name}`;
      // const imgRef = ref(storage, uploadPath);
      // const uploadedImg = await uploadBytesResumable(imgRef, file);
      // const imgUrl = await getDownloadURL(uploadedImg.ref);

      const usersRef = doc(firestore, "users", response.user.uid);

      await setDoc(usersRef, {
        isOnline: true,
        displayName: username,
        photoURL:
          "https://www.misemacau.org/wp-content/uploads/2015/11/avatar-placeholder-01-300x250.png",
        email: email,
      });

      await updateProfile(response.user, {
        displayName: username,
        photoURL:
          "https://cs6.pikabu.ru/images/big_size_comm/2017-07_6/150107074618005869.jpg",
      });

      setIsPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};
