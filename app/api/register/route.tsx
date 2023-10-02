import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import { NextResponse } from 'next/server';
import React from 'react';
import bcrypt from "bcryptjs";


export async function POST(req: { json: () => PromiseLike<{ name: any; email: any; password: any; }> | { name: any; email: any; password: any; }; }) {
    try{
        const{name, email, password} = await req.json();
       
        const hashedPasssword = await bcrypt.hash(password,10)
        await connectMongoDB();
        await User.create({name,email,password:hashedPasssword});

        return NextResponse.json({message: "User Registered."},{status:201});
    }catch(error){
        return NextResponse.json(
            {message:"An error ocured while registering the user."},{status:500});
        }
    
}