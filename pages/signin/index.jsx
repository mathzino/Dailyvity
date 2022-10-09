import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signInWithGooglePopup } from "../../utils/firabase.utils";
import { setCurrentUser } from "../../store/user/user.action";
import { onAuthStateChangedListener, createUserDocumentFromAuth, signOutUser } from "../../utils/firabase.utils";
export default function Signin() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      } else {
        console.log("sign out", user);
      }
      dispatch(setCurrentUser(user));
    });
  }, []);
  return (
    <div>
      <button buttonType="google-sign-in" type="button" onClick={signInWithGooglePopup}>
        Sign In With Google
      </button>
      <button onClick={signOutUser}>sign out</button>
    </div>
  );
}
