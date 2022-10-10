import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { signInWithGooglePopup } from "../../utils/firabase.utils";
import { setCurrentUser } from "../../store/user/user.action";
import { onAuthStateChangedListener, createUserDocumentFromAuth, signOutUser } from "../../utils/firabase.utils";
import signinava from "../../assets/svg/signinava.svg";
export default function Signin() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     } else {
  //       console.log("sign out", user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   });
  // }, []);
  return (
    <div className=" my-10  px-9 w-screen bg-white flex flex-row">
      <Image src={signinava} width={300} height={280}></Image>
      <button buttonType="google-sign-in" type="button" onClick={signInWithGooglePopup}>
        Sign In With Google
      </button>
      <button onClick={signOutUser}>sign out</button>
    </div>
  );
}
