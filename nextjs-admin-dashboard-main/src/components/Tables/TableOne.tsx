"use client";

import { useRouter } from 'next/navigation'; // Sử dụng useRouter từ next/navigation
import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa'; // Đảm bảo đã cài đặt react-icons

// Định nghĩa kiểu cho Employee
interface Employee {
  _id: string;
  full_name: string;
  address: string;
  email: string;
  salary: number;
  employment_status: string; // Trạng thái việc làm
  isAdmin: boolean;
  created_at: string;
  __v: number;
  imageUrl: string; // Thêm trường cho URL hình ảnh
}

// Định nghĩa kiểu cho props
interface TableOneProps {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>; // Thêm props để cập nhật danh sách
}

const TableOne: React.FC<TableOneProps> = ({ employees, setEmployees }) => {
  const router = useRouter(); // Khởi tạo router

  const handleDelete = async (id: string) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa nhân viên này?")) {
      await fetch(` http://localhost:8080/api/v1/Employee/${id}`, {
        method: "DELETE",
      });
      // Cập nhật lại danh sách nhân viên
      setEmployees((prev) => prev.filter(employee => employee._id !== id));
    }
  };

  const handleEdit = (id: string) => {
    router.push(`forms/update-employee?id=${id}`); // Chuyển hướng đến trang update-employee với ID
    console.log(`Sửa nhân viên với ID: ${id}`);
  };

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white">
        Danh Sách Nhân Viên
      </h4>

      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình Ảnh</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Địa Chỉ</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lương</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng Thái</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành Động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img 
                  src={employee.imageUrl} 
                  alt={employee.full_name} 
                  className="w-10 h-10 rounded-full object-cover" 
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.full_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.salary.toLocaleString()} VND</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p
                  className={`inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium ${
                    employee.employment_status === "Đang làm"
                      ? "bg-[#219653]/[0.08] text-[#219653]"
                      : employee.employment_status === "Đang nghỉ"
                        ? "bg-[#FFA70B]/[0.08] text-[#FFA70B]"
                        : employee.employment_status === "Nghỉ việc"
                          ? "bg-[#D34053]/[0.08] text-[#D34053]"
                          : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {employee.employment_status}
                </p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3">
                <button onClick={() => handleEdit(employee._id)} className="text-blue-500 hover:text-blue-700">
                  <FaEdit size={20} />
                </button>
                <button onClick={() => handleDelete(employee._id)} className="text-red-500 hover:text-red-700">
                  <FaTrash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOne;