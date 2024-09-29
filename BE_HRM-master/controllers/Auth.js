import Employee from '../models/Employee.js';
import Counter from '../models/Counter.js'; // Import mô hình Counter
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";

// Hàm để lấy ID tiếp theo
const getNextIdNumber = async () => {
  const counter = await Counter.findOneAndUpdate(
    { name: 'employeeId' },
    { $inc: { value: 1 } },
    { new: true, upsert: true }
  );
  return counter.value;
};

export const register = async (req, res) => {
  try {
    console.log(req.body); // Ghi lại req.body để kiểm tra
    if (!req.body.password) {
      return res.status(400).send("Mật khẩu là bắt buộc.");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // Lấy ID tự động tăng
    const id_number = await getNextIdNumber(); // Lấy id_number tiếp theo

    const newUser = new Employee({
      ...req.body,
      password: hash,
      id_number, // Thêm id_number vào người dùng mới
    });

    await newUser.save();
    return res.status(201).send("Tạo thành công");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Có lỗi xảy ra khi tạo người dùng.");
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log('Email:', email);
    
    // Kiểm tra xem người dùng có tồn tại không
    const user = await Employee.findOne({ email });
    if (!user) {
      return next(createError(404, "Tài khoản không chính xác"));
    }

    // So sánh mật khẩu
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return next(createError(400, "Mật khẩu không chính xác!"));
    }

    // Kiểm tra quyền admin
    

    // Trả về thông tin người dùng mà không có mật khẩu
    const { password: _, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};