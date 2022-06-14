import { initializeApp } from "firebase/app";
import {
  getFirestore,
  query,
  getDocsFromServer,
  addDoc,
  collection,
  QuerySnapshot
} from "firebase/firestore";
import { QuestionWithAnswers, Answer } from "../types";

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
  // try {
  const querySnapshot = await query(collection(db, "questions"));

  const questionsFromDB = getDocsFromServer(querySnapshot);

  // const data = {};

  console.log(querySnapshot.firestore.toJSON());
  console.log(questionsFromDB);

  // querySnapshot.forEach(
  //   (documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot) => {
  //     const id = documentSnapshot.id;
  //     data[id] = documentSnapshot.data() as INote | IQuestion;
  //     data[id].key = id;
  //   }
  //   );
  //   return data;
  // } catch (e) {
  //   return Promise.reject(e);
  // }
};

// export async function getCollection(
//   collection: TCollectionTypes
// ): Promise<StringMap> {
//   try {
//     const querySnapshot: FirebaseFirestoreTypes.QuerySnapshot =
//       await FIRESTORE().collection(collection).get();
//     const data: StringMap = {};
//     querySnapshot.forEach(
//       (documentSnapshot: FirebaseFirestoreTypes.DocumentSnapshot) => {
//         const id = documentSnapshot.id;
//         data[id] = documentSnapshot.data() as INote | IQuestion;
//         data[id].key = id;
//       }
//     );
//     return data;
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }

// export const getDocument = async (
//   collection: TCollectionTypes,
//   document: string
// ): Promise<FirebaseFirestoreTypes.DocumentData> => {
//   try {
//     const documentSnapshot = await FIRESTORE()
//       .collection(collection)
//       .doc(document)
//       .get();
//     const data = documentSnapshot.data() || {};
//     data.key = documentSnapshot && documentSnapshot.id;
//     return data;
//   } catch (e) {
//     return Promise.reject(e);
//   }
// };

export const saveDocument = async (data: Answer): Promise<void> => {
  try {
    await addDoc(collection(db, "answers"), data);
  } catch (e) {
    return Promise.reject(e);
  }
};
