"use client";

import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
import { POST } from '../api/register/route';
import { useRouter } from 'next/navigation';

const Register = () => {
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: React.ChangeEvent<any>) =>{
        e.preventDefault();

        if (!name || !email || !password){
            setError("All fields are necessary!");
            return;
        }
        try { 
            const resUserExists = await fetch('api/userExists',{
                method: "POST",
                headers: { "Content-Type":"application/json",},
                body: JSON.stringify({email}),
            });

            const {user} = await resUserExists.json();

            if(user){
                setError("Usera already exists!");
                return;
            }

            const res = await fetch('api/register',{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                    name, email, password
                }),
            });
            if(res.ok){
                const form = e.target;
                form.reset();
                router.push("/");
            }else{
                console.log("User registration failed.");
            }
        } catch (error) {
            console.log("Error doring registration:", error);
        }
    }

  return (
    <div className='flex justify-center'>
    <div  className='shadow-lg p-5 rounded-lb border-t-4 border-green-400'>
        <h1>Enter details</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input 
            onChange={(e)=>setName(e.target.value)}
            type="text" placeholder='name' /> 
            <input
            onChange={(e)=>setEmail(e.target.value)}
            type="text" placeholder='email' />
            <input 
            onChange={(e)=>setPassword(e.target.value)}
            type="password" placeholder='password' />
            <button className='btn btn-accent btn-outline'>REGISTER</button>
        { error && ( 
          <div className='bg-red-500 text-white w-fit 
            text-sm py-1 px3 rounded-md mt-2' >
                {error}
            </div>
        )}
            <Link href={'/'} className='underline text-sm mt-3 text-right'>Have an account?</Link>
        </form>
    </div>
</div>
  )
}

export default Register