"use client"; // Đánh dấu là Client Component

import { useEffect, useState } from 'react';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableTwo from "@/components/Tables/TableTwo";
import TableThree from "@/components/Tables/TableThree";
import DefaultLayout from '@/components/Layouts/DefaultLaout';
import axios from "axios";

// Định nghĩa kiểu cho Employee
interface Employee {
  _id: string;
  full_name: string;
  address: string;
  email: string;
  salary: number;
  employment_status: string;
  isAdmin: boolean;
  created_at: string;
  __v: number;
  imageUrl: string; // Thêm trường cho URL hình ảnh
}

const TablesPage = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const { data } = await axios.get('http://localhost:8080/api/v1/Employee');
        setEmployees(data);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <TableOne employees={employees} setEmployees={setEmployees} /> {/* Truyền employees và setEmployees vào TableOne */}
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;