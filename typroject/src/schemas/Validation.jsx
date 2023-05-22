import * as Yup from "yup";

const Validation = Yup.object({
  username: Yup.string().email().required("Enter your valid Email"),

  password: Yup.string().min(5).max(10).required("Please enter your password"),
});

export default Validation;
