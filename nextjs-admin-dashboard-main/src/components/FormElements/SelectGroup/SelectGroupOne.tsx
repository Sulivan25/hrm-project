"use client";
import React, { useState } from "react";

const SelectGroupOne: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  return (
    <div className="mb-4.5">
      <label className="mb-3 block text-body-sm text-dark dark:text-white">
        Position
      </label>

      <div className="relative z-20 bg-transparent dark:bg-dark-2">
        <select
          value={selectedOption}
          onChange={(e) => {
            setSelectedOption(e.target.value);
            changeTextColor();
          }}
          className={`relative z-20 w-full appearance-none rounded-[7px] border border-stroke bg-transparent px-5.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary ${
            isOptionSelected ? "text-dark dark:text-white" : ""
          }`}
        >
          <option value="" disabled className="text-dark-6" style={{ color: 'black' }}>
            Select employee Position
          </option>
          <option value="IT Director" className="text-dark-6" style={{ color: 'black' }}>
            IT Director
          </option>
          <option value="Software Developer" className="text-dark-6" style={{ color: 'black' }}>
            Software Developer
          </option>
          <option value="Helpdesk Technician" className="text-dark-6" style={{ color: 'black' }}>
            Helpdesk Technician
          </option>
          <option value="System Administrator" className="text-dark-6" style={{ color: 'black' }}>
            System Administrator
          </option>
          <option value="Database Administration" className="text-dark-6" style={{ color: 'black' }}>
            Database Administration
          </option>
          <option value="Designer" className="text-dark-6" style={{ color: 'black' }}>
            Designer 
          </option>
          <option value="Technical Support" className="text-dark-6" style={{ color: 'black' }}>
            Technical Support
          </option>
          <option value="Research Scientist" className="text-dark-6" style={{ color: 'black' }}>
            Research Scientist
          </option>
          <option value="Product Manager" className="text-dark-6" style={{ color: 'black' }}>
            Product Manager
          </option>
          <option value="IT Consultant" className="text-dark-6" style={{ color: 'black' }}>
            IT Consultant
          </option>
        </select>

        <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99922 12.8249C8.83047 12.8249 8.68984 12.7687 8.54922 12.6562L2.08047 6.2999C1.82734 6.04678 1.82734 5.65303 2.08047 5.3999C2.33359 5.14678 2.72734 5.14678 2.98047 5.3999L8.99922 11.278L15.018 5.34365C15.2711 5.09053 15.6648 5.09053 15.918 5.34365C16.1711 5.59678 16.1711 5.99053 15.918 6.24365L9.44922 12.5999C9.30859 12.7405 9.16797 12.8249 8.99922 12.8249Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectGroupOne;
