import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUpValidation } from "../../schema/SignupValidation.jsx";


function Signup() {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (values, actions) => {
    const valueStr = JSON.stringify(values, null, 2);
    // setting the item in the local storage.
    localStorage.setItem("user", valueStr);
    navigate("/login");
    console.log(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpValidation}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <div className="bg-white-grey min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <Form
                onSubmit={handleSubmit}
                className="bg-white px-6 py-8 rounded shadow-md text-white w-full"
              >
                <h1 className="mb-8 text-3xl text-center text-black">
                  Sign up
                </h1>
                <div className="mb-4">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="block border  text-red-400  border-grey-light w-full p-3 rounded mb-4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="block border  text-red-400  border-grey-light w-full p-3 rounded mb-4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="block text-red-500 border border-grey-light w-full p-3 rounded mb-4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="block border text-red-400 border-grey-light w-full p-3 rounded mb-4"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
                >
                  Create Account
                </button>
                <div className="text-center text-sm text-grey-dark mt-4">
                  By signing up, you agree to the
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Terms of Service
                  </a>{" "}
                  and
                  <a
                    className="no-underline border-b border-grey-dark text-grey-dark"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </div>
              </Form>
              <div className="text-grey-dark mt-6">
                Already have an account?
                <a
                  className="no-underline border-b border-blue text-blue"
                  href="../login/"
                >
                  Log in
                </a>
                
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}

export default Signup;
