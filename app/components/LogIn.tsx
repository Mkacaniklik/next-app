"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import {signIn} from "next-auth/react"

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [error, setError] = useState("");

    const  handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email, password, redirect: false,
            })
        
        } catch (error) {
            
        }
    }
  return (
    <div className='flex justify-center'>
        <div  className='shadow-lg p-5 rounded-lb border-t-4 border-green-400'>
            <h1>Enter details</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input onChange={e => setEmail(e.target.value)} 
                type="text" placeholder='email' />
                <input onChange={e => setPassword(e.target.value)}
                 type="password" placeholder='password' />
                <button className='btn btn-accent btn-outline'>LOGIN</button>
               {error &&( 
               
               <div className='bg-red-500 text-white w-fit 
                text-sm py-1 px3 rounded-md mt-2' >
                    {error}
                </div>
               )}
                <Link href={'/register'} className='underline text-sm mt-3 text-right'>Don't have an account?</Link>
            </form>

        </div>
    </div>
  )
}

export default LogIn