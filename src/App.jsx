import AppRouter from './routes'
import { doc, getDoc } from "firebase/firestore";
import { db } from './database/firebaseconfig'
import { useEffect } from "react";

function App() {

   const docRef = doc(db, "users", "WqCgt6cdnqFqcNuE0vgh");

    const getData = async () => {
      const docSnap = await getDoc(docRef);

    console.log(docSnap.data());
    }

    useEffect(() => {
      getData()
    }, [])


  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
