"use client";

// import { signOut } from "next-auth/react";
// import { useSession } from "next-auth/react";
 import React from 'react'

const UserInfo = () => {
  //  const { data: session } = useSession();
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
        <div>
          Name: <span className="font-bold">John</span>
        </div>
        <div>
          Email: <span className="font-bold">jhon@email</span>
        </div>
        <button
         // onClick={() => signOut()}
          className="btn btn-accent"
        >
          Log Out
        </button>
      </div>
    </div>
  )
}

export default UserInfo