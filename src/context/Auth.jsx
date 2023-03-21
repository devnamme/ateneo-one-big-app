import React, { useEffect, useState } from 'react'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

export const FirebaseApp = initializeApp({
  apiKey: "AIzaSyA8XOChNgIE8D8yIAQBJjaC_qUsh8G2RMw",
  authDomain: "ateneo-one-big-app.firebaseapp.com",
  projectId: "ateneo-one-big-app",
  storageBucket: "ateneo-one-big-app.appspot.com",
  messagingSenderId: "120861306302",
  appId: "1:120861306302:web:b239d0ad352d38596e1def"  
})

const auth = getAuth(FirebaseApp)

export const db = getFirestore(FirebaseApp)
export const Context = React.createContext()
export const Provider = ({ children }) => {
  const [user, setUser] = useState(auth)

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    if (user && user.uid) {
    }
  }, [user])

  return (
    <Context.Provider value={user} >
      { children }
    </Context.Provider>
  )
}