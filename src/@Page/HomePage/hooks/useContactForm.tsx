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
        name: Yup.string().trim().required().min(3).max(255),
        phone: Yup.string()
          .required()
          .matches(REGEX.PHONE, "Số điện thoại không hợp lệ!"),
        email: Yup.string().trim().required().email(),
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
