"use client";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter

export default function SigninWithPassword() {
  const [data, setData] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [error, setError] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); 
  
    try {
      const loginResponse = await axios.post('http://localhost:8080/api/v1/Auth/login', {
        email: data.email,
        password: data.password,
      });
      console.log('Đăng nhập thành công:', loginResponse.data);
  
      const userId = loginResponse.data.id; 
      localStorage.setItem('userId', userId); 
      console.log(userId);
  
      const userResponse = await axios.get(`http://localhost:8080/api/v1/Employee/email/${data.email}`);
      const user = userResponse.data;

      if (user.isAdmin) {
        router.push(`/tables`); 
      } else {
        router.push(`/user/userprofile/${userId}`); 
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Có lỗi xảy ra');
      } else {
        setError('Có lỗi xảy ra');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="text-red-500">{error}</div>}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 py-2">
        <label
          htmlFor="remember"
          className="flex cursor-pointer select-none items-center font-satoshi text-base font-medium text-dark dark:text-white"
        >
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={data.remember}
            onChange={() => setData({ ...data, remember: !data.remember })}
            className="peer sr-only"
          />
          <span className={`mr-2.5 inline-flex h-5.5 w-5.5 items-center justify-center rounded-md border border-stroke bg-white text-white text-opacity-0 peer-checked:border-primary peer-checked:bg-primary peer-checked:text-opacity-100 dark:border-stroke-dark dark:bg-white/5 ${data.remember ? "bg-primary" : ""}`}>
          </span>
          Remember me
        </label>

        <Link
          href="/auth/forgot-password"
          className="select-none font-satoshi text-base font-medium text-dark underline duration-300 hover:text-primary dark:text-white dark:hover:text-primary"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="mb-4.5">
        <button
          type="submit"
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}