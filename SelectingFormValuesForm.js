import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import showResults from './showResults';
import TextField from '@mui/material/TextField';


const validate = values => {
    const errors = {}
 if (!values.username) {
   errors.username = 'Required'

 } else if (values.username.length > 15) {
   errors.username = 'Must be 15 characters or less'

 }

 if (!values.email) {
   errors.email = 'Required'
 } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
   errors.email = 'Invalid email address'
 }
 if (!values.age) {
   errors.age = 'Required'
 } else if (isNaN(Number(values.age))) {
   errors.age = 'Must be a number'
 } else if (Number(values.age) < 18) {
   errors.age = 'Sorry, you must be at least 18 years old'
 }
 if(!values.Projectid){
 errors.Projectid='Please enter the project id'
 }
 else if(!/^[a-zA-Z0-9]/i.test(values.Projectid)){
   errors.Projectid='invalid Project '
 }
 return errors
}

const warn = values => {
 const warnings = {}
 if (values.age < 19) {
   warnings.age = 'Hmm, you seem a bit young...'
 }
 return warnings
}

const renderCheck = ({
 input,
 label,
 type,
 meta: { touched, error, warning }
}) => (
 <div className="checkboxleft">
   <label >{label}</label>
   <div>
     <input {...input} placeholder={label} type={type} className='form-check-input' />
     {touched &&
       ((error && <span className="text-danger">{error}</span>) ||
         (warning && <span>{warning}</span>))}
   </div>
 </div>
)
const renderFile = ({
 input,
 label,
 type,
 meta: { touched, error, warning }
}) => (
 <div >
   <label >{label}</label>
   <div>
     <input {...input} placeholder={label} type={type}  />
     {touched &&
       ((error && <span className="text-danger">{error}</span>) ||
         (warning && <span>{warning}</span>))}
   </div>
 </div>
)
const renderField = ({
 input,
 label,
 type,
 meta: { touched, error, warning }
}) => (
 <div>
   <label >{label}</label>
   <div>
     <input {...input} placeholder={label} type={type} className='form-control col-xs-3' />
     {touched &&
       ((error && <span className="text-danger">{error}</span>) ||
         (warning && <TextField>{warning}</TextField>))}
   </div>
 </div>
)

let SelectingFormValuesForm = props => {
  const {
    favoriteColorValue,
    fullName,
    handleSubmit,
    hasEmailValue,
    hasDetailsValue,
    pristine,
    reset,
    submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
        <div className='px-10'>
      <div className="col-md-8">
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
     

        <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="Projectid" type="text" component={renderField} label="Project id"/>
      
      <Field name="age" type="number" component={renderField} label="Age" />
      </div ></div>
      <div>
      <div className="row g-3"> 
      <div className="col-md-6">
<label className=' px-2'>
  <Field name="details"
  component="input"
  type="radio"
  value="offshore"/>{' '}
offshore</label>
<label>
  <Field name="details"
  component="input"
  type="radio"
  value="onshore"/>{' '}
onshore   </label>
</div>
</div>
</div>
<div className=" form-group">
<div className="row "> 
      <div className="col-md-6">
<div className=" form-check">




    <Field name="id"
  component={renderCheck}
  type="checkbox"
 
  id="html"
  label="html"/>
  </div> </div>
  <div className=" col-md-3">
<div className=" form-check">




    <Field name="id"
  component={renderCheck}
  type="checkbox"
 
  id="html"
  label="html"/>
  </div> </div><div className=" col-md-3">
<div className=" form-check">




    <Field name="id"
  component={renderCheck}
  type="checkbox"
 
  id="html"
  label="html"/>
  </div> </div><div className=" col-md-3">
<div className=" form-check">




    <Field name="id"
  component={renderCheck}
  type="checkbox"
 
  id="html"
  label="html"/>
  </div> </div> </div> </div>
  <div className="col-md-6">
     <label for="formFile" className="form-label">Default file input example</label>

    <Field name="bg"
  component={renderField}
  type="file"
 label="file here"
  id="formFile"
  />
  </div>
 
  <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="hasEmail">Has Email?</label>
        <div>
          <Field
            name="hasEmail"
            id="hasEmail"
            component="input"
            type="radio"
            value="details"
            label="onshore"
          />{''}
          
        </div>
      </div>
      {hasEmailValue &&
        <>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="#ff0000">Red</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">Blue</option>
          </Field>
        </div>
          

        </>}   {hasDetailsValue &&
        <>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="#ff0000">orange</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">silver</option>
          </Field>
        </div>
          

        </>}
       
        <div>
        <label htmlFor="hasDetails">Has details?</label>
        <div>
          <Field
            name="hasDetails"
            id="hasDetails"
            component="input"
            type="radio"
            value="details2"
            label="onshore"
          />{''}
          
        </div>
      </div>
      {hasDetailsValue &&
        <>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="#ff0000">orange</option>
            <option value="#00ff00">Green</option>
            <option value="#0000ff">silver</option>
          </Field>
        </div>
          

        </>}
       
         
           
    
      <div>
      <button className='btn btn-primary' type="submit" disabled={ submitting} onClick={showResults}>
          Submit
        </button>
        <button className='btn btn-danger' type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        </div>
    </form>
  );
};

// The order of the decoration does not matter.

// Decorate with redux-form
SelectingFormValuesForm = reduxForm({
  form: 'selectingFormValues',
  validate,
  warn // a unique identifier for this form
})(SelectingFormValuesForm);

// Decorate with connect to read form values
const selector = formValueSelector('selectingFormValues'); // <-- same as form name
SelectingFormValuesForm = connect(state => {
  // can select values individually
  const hasEmailValue = selector(state, 'hasEmail');
  const hasDetailsValue = selector(state, 'hasDetails');

  const favoriteColorValue = selector(state, 'favoriteColor');
  // or together as a group
  const { firstName, lastName } = selector(state, 'firstName', 'lastName');
  return {
    hasEmailValue,
    hasDetailsValue,
    favoriteColorValue,
    fullName: `${firstName || ''} ${lastName || ''}`,
  };
})(SelectingFormValuesForm);

export default SelectingFormValuesForm;
