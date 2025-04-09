"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./configs/firebaseconfig";
import { AuthContext } from "./_context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Provider({ children }) {
  const [user, setUser] = useState();
  const CreateNewUser = useMutation(api.users.CreateNewUser);
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.log("User is not logged in");
      }
      console.log(user);
      const result = await CreateNewUser({
        name: user.displayName,
        email: user.email,
        pictureURL: user.photoURL,
      });
      console.log(result);
      setUser(result);
    });
    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ user }}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </NextThemesProvider>
      </AuthContext.Provider>
    </>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};
