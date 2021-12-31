import React from "react";
import { Formik, useField, Form, Field, FieldArray } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { ErrorMessage } from "formik";
import { FormHelperText } from "@material-ui/core";

import Select from "./Select";

function FormValid(props) {
  const [se, setSe] = useState(false);
  const [st, setSt] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleclick = () => {
    setSe(true);
    setSt(false);
  };
  const handleclick2 = () => {
    setSe(false);
    setSt(true);
  };
  const handlealert = () => {
    setAlert(false);
    setSt(false);
    setSe(false);
  };
  const dropdownoptions = [
    { key: "optiona", value: "coptiona" },
    { key: "optionb", value: "coptionb" },
    { key: "optionc", value: "coptionc" },
    { key: "optiond", value: "coptiond" },
  ];
  const dropdownoptions1 = [
    { key: "k2", value: "k2" },
    { key: "k3", value: "k3" },
    { key: "k4", value: "k4" },
    { key: "k5", value: "k5" },
  ];
  const checkboxoptions = [
    { key: "option1", value: "coption1" },
    { key: "option2", value: "coption2" },
    { key: "option3", value: "coption3" },
    { key: "option4", value: "coption4" },
    { key: "option5", value: "coption5" },
    { key: "option6", value: "coption6" },
    { key: "option7", value: "coption7", className: "px-4" },
    { key: "option8", value: "coption8" },
    { key: "option9", value: "coption9" },
    { key: "option10", value: "coption10" },
    { key: "option11", value: "coption11" },
  ];
  const MyTextArea = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <textarea
          className={`form-control shadow-none 
                 ${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
        />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  const marginTop = { marginTop: 5 };

  const validate = Yup.object({
    Associatename: Yup.string()
      .matches(
        /^[a-zA-Z   ]*$/,
        "Accepts alphabets spaces min 5 and max 30 char"
      )
      .max(30, "Accepts alphabets spaces min 5 and max 30 char")
      .min(5, "Accepts alphabets spaces min 5 and max 30 char")
      .required("Please enter Associate Name"),

    Associateid: Yup.string()
      .matches(/^[0-9]+$/, "Invalid Associate id")
      .max(12, "Invalid Associate id")
      .min(6, "Invalid Associate id")
      .required("Please enter Associate id"),
    Projectid: Yup.string()
      .matches(/^[a-zA-Z0-9]*$/, "on;y alplah numneric")
      .max(12, "Accepts alphabets spaces min 6 and max 12 char")
      .min(6, "Accepts alphabets spaces min 6 and max 12 char")
      .required("Please enter project id"),

    skills: Yup.array().min(5, "select min5"),
    propic: Yup.mixed().required("upload file plaease"),
    comments: Yup.string().required("Please enter comments "),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        Associatename: "",
        Associateid: "",
        Projectid: "",
        be: "",
        bt: "",
        shore: "",
        skills: [],
        propic: "",
        comments: "",
        gender: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        setAlert(true);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold">
            <span style={{ color: "red" }}>*</span>FORM VALIDATION
          </h1>
          <Form>
            {alert && (
              <div class="alert alert-primary" role="alert">
                This is a primary alert—check it out!{" "}
                <button
                  type="button"
                  class=" btn btn-outline-light"
                  onClick={handlealert}
                >
                  ok
                </button>
              </div>
            )}
            <TextField
              label="Associate Name"
              name="Associatename"
              type="text"
            />
            <TextField label="Associate ID " name="Associateid" type="text" />
            <TextField label="Projectid " name="Projectid" type="text" />
            <div className="col">
              <label>
                <Field
                  type="radio"
                  name="shore"
                  value="Offshore"
                  className=" radio"
                  onClick={handleclick}
                />
                Off-Shore
              </label>
              <label>
                <Field
                  type="radio"
                  name="shore"
                  value="Onshore"
                  onClick={handleclick2}
                  className="radio"
                />
                On-Shore
              </label>
            </div>
            {se && (
              <Select
                control="select"
                name="be"
                options={dropdownoptions}
                className="select"
              />
            )}
            {st && (
              <Select
                control="select"
                name="bt"
                options={dropdownoptions1}
                className="select"
              />
            )}
            <CheckboxGroup
              control="checkbox"
              label="Your skillset"
              name="skills"
              style={{ padding: "100px 100px" }}
              options={checkboxoptions}
            />
            <div className="form-group">
              <label htmlFor="file">File upload</label>
              <TextField
                id="file"
                name="propic"
                type="file"
                className="form-control"
              />
            </div>
            <MyTextArea
              className="mt-2"
              label="comments"
              name="comments"
              rows="6"
              cols="60"
            />
            <FormControl component="fieldset" style={marginTop}>
              <FormLabel component="legend">Gender</FormLabel>
              <Field
                as={RadioGroup}
                aria-label="gender"
                name="gender"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </Field>
            </FormControl>
            <FormHelperText>
              <ErrorMessage name="gender" />
            </FormHelperText>
            <div className="row">
              <div className="col-md-3">
                {" "}
                <button
                  className="btn btn-primary mt-3 mr-6"
                  disabled={!(formik.dirty && formik.isValid)}
                  type="submit"
                >
                  Submit
                </button>
              </div>

              <div className="col-md-3">
                {" "}
                <button
                  className="btn btn-danger mt-3 mr-4"
                  type="reset"
                  onClick={handlealert}
                >
                  Reset
                </button>{" "}
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}
export default FormValid;
