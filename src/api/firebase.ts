import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import { IAnswer } from "../types";

const firebaseConfig = {
  apiKey: "AIzaSyDnv9FQeEewC_ybt_9_ILRfw024keJr1C0",
  authDomain: "personality-test-app-3752f.firebaseapp.com",
  projectId: "personality-test-app-3752f",
  storageBucket: "personality-test-app-3752f.appspot.com",
  messagingSenderId: "275864369614",
  appId: "1:275864369614:web:7fb45a2a3d498a566ad39f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getQuestions = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "questions"));
    const data: any = {};

    querySnapshot.forEach((doc) => {
      const id: string = doc.id;
      data[id] = doc.data();
      data[id].key = id;
    });
    return Promise.resolve(data);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const saveAnswers = async (data: IAnswer): Promise<void> => {
  try {
    await addDoc(collection(db, "answers"), data);
  } catch (e) {
    return Promise.reject(e);
  }
};
