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
      collectionPage,
      description,
      imageUrl,
      items,
      routeName,
      title
    } = doc.data();

    return {
      routeName,
      title,
      description,
      collectionPage,
      imageUrl,
      items
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.routeName] = collection;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;