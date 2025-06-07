"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configs/firebaseconfig";
import { AuthContext } from "./_context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Provider({ children }) {
  const [user, setUser] = useState(null); // start with null for clarity
  const createNewUser = useMutation(api.users.CreateNewUser); // use camelCase

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        console.log("User logged in:", firebaseUser);

        try {
          const result = await createNewUser({
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            pictureURL: firebaseUser.photoURL,
          });

          console.log("User added or fetched:", result);
          setUser(result);
        } catch (error) {
          console.error("Error creating new user:", error);
          // Optionally, still set Firebase user as fallback
          setUser({
            name: firebaseUser.displayName,
            email: firebaseUser.email,
            pictureURL: firebaseUser.photoURL,
          });
        }
      } else {
        console.log("User is not logged in");
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [createNewUser]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={true}
        disableTransitionOnChange={false}
      >
        {children}
      </NextThemesProvider>
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContext.Provider");
  }
  return context;
};
