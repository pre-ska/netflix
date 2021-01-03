import { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  // dohvatim sve filmove ili serije (target)
  // mapiram taj array dokumenata i vratim natrag
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then(snapshot => {
        const allContent = snapshot.docs.map(doc => ({
          ...doc.data(),
          docId: doc.id
        }));

        setContent(allContent);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return { [target]: content };
}
