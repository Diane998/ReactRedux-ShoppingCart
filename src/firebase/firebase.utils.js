import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA5l_YneaS2iFB6ZHOXI5LhEV_PevqAxgk',
  authDomain: 'watch-store-db.firebaseapp.com',
  projectId: 'watch-store-db',
  storageBucket: 'watch-store-db.appspot.com',
  messagingSenderId: '31460598395',
  appId: '1:31460598395:web:a4f29a07a6fc0a402cb8de',
  measurementId: 'G-Y9SS8JR0EB'
};

firebase.initializeApp(firebaseConfig);

// Take user auth object from auth libray and store that object in the database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

// export const addCollectionAndDocuments = async (collectionKey, objsToAdd) => {
//   const collectionRef = firestore.collection(collectionKey);

//   const batch = firestore.batch();
//   objsToAdd.forEach(obj => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });

//   return await batch.commit();
// };

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {
      collectionID,
      collectionPage,
      description,
      imageUrl,
      items,
      routeName,
      title
    } = doc.data();

    return {
      collectionID,
      collectionPage,
      description,
      imageUrl,
      items,
      routeName,
      title
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.routeName] = collection;
    return acc;
  }, {});
};

// google sign-in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
