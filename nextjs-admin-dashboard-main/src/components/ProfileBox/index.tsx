"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import { useEffect, useState } from 'react';
import InputGroup from "@/components/FormElements/InputGroup";
import { CameraIcon } from '@heroicons/react/24/solid';

const UserProfile = () => {
  const userId = params.id;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [salary, setSalary] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/Employee/${userId}`);
        const employee = response.data;

        setFullName(employee.full_name);
        setEmail(employee.email);
        setAddress(employee.address);
        setPhoneNumber(employee.phoneNumber);
        setSalary(employee.salary);
        setImage(employee.imageUrl);
        setMessage(employee.message);
      } catch (error) {
        console.error("Failed to fetch employee data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchEmployeeData();
    }
  }, [userId]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      full_name: fullName,
      email,
      password,
      address,
      phoneNumber,
      message,
      image,
    };

    try {
      const response = await axios.put(`http://localhost:8080/api/v1/Employee/${userId}`, formData);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to update employee data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 mt-15">
      <div className="flex flex-col gap-9">
        <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
                <div className="relative drop-shadow-2">
                  <img
                    src={image || '/images/user/user-03.png'}
                    alt="Profile"
                    className="overflow-hidden rounded-full h-40 w-40 object-cover"
                  />
                  <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 cursor-pointer">
                    <CameraIcon className="h-6 w-6 text-gray-500" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <InputGroup
                label="Full name"
                type="text"
                placeholder="Enter employee full name"
                customClasses="mb-4.5"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <InputGroup
                label="Email"
                type="email"
                placeholder="Enter employee email address"
                customClasses="mb-4.5"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputGroup
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter employee password"
                customClasses="mb-4.5"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-sm text-blue-500"
              >
                {showPassword ? "Hide Password" : "Show Password"}
              </button>
              <InputGroup
                label="Address"
                type="text"
                placeholder="Enter employee address"
                customClasses="mb-4.5"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <InputGroup
                label="Phone number"
                type="text"
                placeholder="Enter employee phone number"
                customClasses="mb-4.5"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              
              <div className="mb-4.5">
                <label className="block">Salary:</label>
                <span className="font-medium text-dark dark:text-white">{salary}</span>
              </div>

              <div className="mb-6">
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Type your notes"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
              >
                Update Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;