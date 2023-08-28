import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { auth, firestore, storage } from "../firebase/config";

export const useStorage = () => {
  const user = auth.currentUser;

  const updateProfileImage = async (file) => {
    try {
      const filePath = `users/${user.uid}/images/${file.name}`;
      const fileRef = await uploadBytesResumable(ref(storage, filePath), file);
      const fileUrl = await getDownloadURL(fileRef.ref);

      await updateProfile(user, {
        photoURL: fileUrl,
      });

      const docRef = doc(firestore, "users", user.uid);

      await setDoc(
        docRef,
        {
          photoURL: fileUrl,
        },
        {
          merge: true,
        }
      );

      return fileUrl;
    } catch (err) {
      console.log(err);
      console.log(err.code);
      throw new Error(err.message);
    }
  };

  const updateCoverImage = async (file) => {
    try {
      const filePath = `users/${user.uid}/coverImages/${file.name}`;
      const fileRef = await uploadBytesResumable(ref(storage, filePath), file);
      const fileUrl = await getDownloadURL(fileRef.ref);

      const docRef = doc(firestore, "users", user.uid);

      await setDoc(
        docRef,
        {
          coverImage: fileUrl,
        },
        {
          merge: true,
        }
      );

      return fileUrl;
    } catch (err) {
      console.log(err);
      console.log(err.code);
      throw new Error(err.message);
    }
  };

  return { updateProfileImage, updateCoverImage };
};
