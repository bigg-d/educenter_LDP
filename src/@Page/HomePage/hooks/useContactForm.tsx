import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Yup, { REGEX } from "@/@Common/Helpers/Yup";
import { toast } from "react-toastify";

export const useContactForm = () => {
  const methodForm = useForm({
    mode: "all",
    defaultValues: {},
    resolver: yupResolver(
      Yup.object({
        name: Yup.string()
          .trim()
          .required("Trường này là bắt buộc")
          .min(3, "Tối thiểu 3 ký tự")
          .max(255, "Tối đa 255 ký tự"),
        phone: Yup.string()
          .required("Trường này là bắt buộc")
          .matches(REGEX.PHONE, "Số điện thoại không hợp lệ!"),
        email: Yup.string()
          .trim()
          .required("Trường này là bắt buộc")
          .email("Email không hợp lệ"),
      })
    ),
  });

  const onSubmit = methodForm.handleSubmit(async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      toast.error("Đã có lỗi xảy ra");
    }
  });

  return { methodForm, onSubmit };
};
