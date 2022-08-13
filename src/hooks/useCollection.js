import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { firestore } from "../firebase/config";


export const useCollection = (collectionName) => {

  const collectionRef = collection(firestore, collectionName);

  const addDocument = async (newDocument) => {
    try {
      const addedDoc = await addDoc(collectionRef, {
        ...newDocument,
        createdAt: serverTimestamp(),
      });
      dispatch({
        type: "ADDED_DOCUMENT",
        payload: addedDoc,
      });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  const updateDocument = async (docId, newData) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const updatedDoc = await setDoc(
        doc(firestore, "projects", docId),
        newData,
        { merge: true }
      );
      dispatch({ type: "UPDATED_DOCUMENT", payload: updatedDoc });
      return updateDoc;
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
      return null;
    }
  };

  const deleteDocument = async (docId) => {
    dispatch({ type: "IS_PENDING" });
    try {
      await deleteDoc(doc(firestore, collectionName, docId));
      dispatch({ type: "DELETED_DOCUMENT" });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, isCancelled, response, updateDocument, deleteDocument };
};

export const useGetCollection = (collectionName, options) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = query(collection(firestore, collectionName));

    const unsubscribe = onSnapshot(collectionRef, (snap) => {
      let results = [];

      snap.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });

      setDocuments(results);
      setError(null);
    });

    return () => {
      unsubscribe();
    };
  }, [collectionName, options]);

  return { documents, error };
};
