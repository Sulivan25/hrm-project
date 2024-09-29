// pages/auth/signup.js
"use client";
import React, { useState } from "react";
import InputGroup from "../FormElements/InputGroup";

export default function SignupWithPassword() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 

    if (password !== repassword) {
      setErrorMessage("Passwords do not match."); 
      return;
    }

    const formData = {
      fullName,
      email,
      password,
    };

    console.log(formData); 
    setErrorMessage(''); 

  };

  return (
    <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
      <form onSubmit={handleSubmit}>
        <div className="p-6.5">
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>} 

          <InputGroup
            label="Name"
            type="text"
            placeholder="Enter full name"
            customClasses="mb-4.5"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} 
          />

          <InputGroup
            label="Email"
            type="text"
            placeholder="Enter email address"
            customClasses="mb-4.5"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />

          <InputGroup
            label="Password"
            type="password"
            placeholder="Enter password"
            customClasses="mb-4.5"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />

          <InputGroup
            label="Re-type Password"
            type="password"
            placeholder="Re-enter"
            customClasses="mb-5.5"
            value={repassword}
            onChange={(e) => setRepassword(e.target.value)} 
          />

          <button 
            type="submit" 
            className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}