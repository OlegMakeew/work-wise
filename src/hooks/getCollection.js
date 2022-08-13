import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

export const getCollection = (collectionName) => {
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState(null);

  const collectionRef = query(collection(firestore, collectionName));

  const getDocuments = async () => {
    try {
      const response = await getDocs(collectionRef);
      setDocuments(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  return { documents, error };
};
