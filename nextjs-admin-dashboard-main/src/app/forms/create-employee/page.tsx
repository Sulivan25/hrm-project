"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import axios from "axios";
import { useState } from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SelectGroupOne from "@/components/FormElements/SelectGroup/SelectGroupOne";


interface InputGroupProps {
  label: string;
  type: string;
  placeholder: string;
  customClasses?: string;
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
}

const InputGroup: React.FC<InputGroupProps> = ({ label, type, placeholder, customClasses, value, onChange }) => {
  return (
    <div className={customClasses}>
      <label className="block mb-2 text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border rounded p-2"
      />
    </div>
  );
};

const FormLayout = () => {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showWarningAlert, setShowWarningAlert] = useState(false);  
  const [full_name, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [salary, setSalary] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      full_name,
      email,
      password,
      address,
      phoneNumber,
      salary,
      image,
      message,
    };
    
    try {
      const response = await axios.post('http://localhost:8080/api/v1/Auth/register', formData);
      console.log(response.data);
      setShowSuccessAlert(true); 
    } catch (error) {
      console.error(error);
      setShowWarningAlert(true);
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Employee Page" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-semibold text-dark dark:text-white">
                Create Employee
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <InputGroup
                  label="Full name"
                  type="text"
                  placeholder="Enter employee full name"
                  customClasses="mb-4.5"
                  value={full_name}
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
                  type="password"
                  placeholder="Enter employee password"
                  customClasses="mb-4.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="mb-4.5">
                  <SelectGroupOne />
                </div>

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

                <InputGroup
                  label="Salary"
                  type="number"
                  placeholder="Enter employee salary"
                  customClasses="mb-4.5"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />

                <div className="mb-4.5">
                  <label htmlFor="imageUpload">Upload Image:</label>
                  <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {image && (
                    <div className="mt-2">
                      <img src={image} alt="Uploaded Image" width={150} height={100} />
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your notes"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full justify-center rounded-[7px] bg-primary p-[13px] font-medium text-white hover:bg-opacity-90"
                >
                  Create Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;