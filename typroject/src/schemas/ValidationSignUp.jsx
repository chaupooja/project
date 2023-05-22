import * as Yup from "yup";

const ValidationSignUp = Yup.object({
  username: Yup.string().min(3).max(25).required("please Enter your Name"),
  email: Yup.string().email().required("Enter your valid Email"),
  password: Yup.string().min(5).max(10).required("Please enter your password"),
  repassword: Yup.string()
    .oneOf([Yup.ref("password"), null])
    .required("Password must be match"),
});

export default ValidationSignUp;
