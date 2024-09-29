// components/InputGroup.js
import React from 'react';

interface InputGroupProps {
  label: string;
  type: string;
  placeholder: string;
  customClasses?: string;
  value: string; // Thêm prop value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Thêm prop onChange
}

const InputGroup: React.FC<InputGroupProps> = ({ label, type, placeholder, customClasses, value, onChange }) => {
  return (
    <div className={customClasses}>
      <label className="block mb-2 text-sm font-semibold">{label}</label> {/* Thay đổi font-medium thành font-semibold */}
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
export default InputGroup;