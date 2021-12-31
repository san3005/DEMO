import React from 'react'
import { Field, reduxForm } from 'redux-form'
import showResults from './showResults'
import TextField from '@mui/material/TextField';

const validate = values => {
     const errors = {}
  if (!values.Associatename) {
    errors.Associatename = 'Please enter associate name'

  } else if ( values.Associatename.length > 30  ) {
    errors.Associatename =  "Accepts Alphabets,Spaces &Min 5 to Max 30 char"

  }
  else if(values.Associatename.length<5){
    errors.Associatename="Accepts Alphabets,Spaces &Min 5 to Max 30 char"
  }
 
  else if(!/^[a-zA-Z   ]*$/.test(values.Associatename)){
    errors.Associatename="Accepts Alphabets,Spaces &Min 5 to Max 30 char"
  }

  if (!values.AssociateId) {
    errors.AssociateId = 'Please Enter Associate Id'
  } else if (!(/^[0-9]+$/.test(values.AssociateId))) {
    errors.AssociateId = 'Invalid AssociateId '
  }
 
  if(!values.Projectid){
  errors.Projectid='Please enter the project id'
  }
  else if(!/^[a-zA-Z0-9]*$/.test(values.Projectid)){
    errors.Projectid="A;PAHBETS project id"
  }
  
  else if(values.Projectid.length >12){
    errors.Projectid='Invalid Project Id'

  }
 
  
  if(!values.propic){
    errors.propic='Please Upload Profile Picture'
    }
 

  if(!values.comments){
    errors.comments='Please enter the comments '
    }
  return errors
}



const renderCheck = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className="checkboxleft">
    <div>
      <input {...input} placeholder={label} type={type} className='form-check-input' />    <label >{label}</label>

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
  value,
  meta: { touched, error, warning }
}) => (
  <div  >
    <label className="control-label">{label}</label>
    <div >
      <input {...input} placeholder={label} type="file"className='col-md-3' style={{border:"2px solid silver"}}  value={value} />
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
        ((error && <span className="text-danger" >{error}</span>) ||
          (warning && <span >{warning }</span>))}
    </div>
  </div>
)

const renderText = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className='form-floating' >
    <div>
      <label > {label}</label>
      <input {...input} placeholder={"comments"} type="textarea" style={{height: "100px",width:"600px"}} className='form-control' />
      {touched &&
        ((error && <span className="text-danger" >{error}</span>) ||
          (warning && <span >{warning }</span>))}
    </div>
  </div>
)

const selectHandler = () => {
  const cities = ['Hyderbad', 'Pune', 'Kochi','Chennai','Bangalore'];
  const select = document.getElementById('inputState');
  if (select.children.length > 1) {
      for (let i = select.children.length - 1; i > 0; i--) {

          select.removeChild(select.children[i]);

      }
  }
  cities.forEach((city) => {
      const option = document.createElement('option')
      option.textContent = city;
      option.setAttribute('value', city);
      select.append(option);

  });

}

const selectHandler1 = () => {
  const cities = ['US', 'Non US'];
  const select = document.getElementById('inputState');
  if (select.children.length > 1) {
      for (let i = select.children.length - 1; i > 0; i--) {
          select.removeChild(select.children[i]);

      }
  }
  cities.forEach((city) => {
      const option = document.createElement('option')
      option.textContent = city;
      option.setAttribute('value', city);
      select.append(option);

  });

}
const renderRadio = (props) => {
  return (
      <div className="form-check form-check-inline">
          <label className="form-check-label" htmlFor="inlineRadio1">
              <input {...props.input} className="form-check-input" type="radio" id="inlineRadio1" onClick={props.click} />

              {props.label}</label>
      </div>
  )
}

const renderSelect = (props) => {
  return (
      <div>
          <select {...props.input} id="inputState" className="form-control">
              <option>Select Location</option>
          </select>
          {props.meta.touched && ((props.meta.error && <span className="text-danger">{props.meta.error}</span>) || (props.meta.warning && <span>{props.meta.warning}</span>))}
      </div>
  )
}




const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting,input,Html} = props
  return (
    
    <form onSubmit={handleSubmit}>

      <div className='row px-10'>
      <div className="col-md-10" style={{padding:'10px 10px'}}>
    
      <Field
        name="Associatename"
        type="text"
        component={renderField}
        label="Associatename"
      />
      </div>
     
      <div className="col-md-10" style={{padding:'10px 10px'}}>

        <Field name="AssociateId" type="text" component={renderField} label="AssociateId" />
        </div>
        <div className="col-md-10" style={{padding:'10px 10px'}}>

      <Field name="Projectid" type="text" component={renderField} label="Project id"/>
</div>
</div>
      <div class="container ">
      <div className="row"> 
      <div className="col" style={{padding:'10px 10px'}}>
  <Field name="details"
  component={renderRadio}
  type="radio"
  label="offshore"
  value="offshore"
  click={selectHandler1}
  /></div>
      <div className="col" style={{padding:'10px 10px'}}>
  <Field name="details"
  type="radio"
  value="onshore"
  component={renderRadio}
  label="onshore"
  click={selectHandler}/>
</div>
</div>
</div>
<div className=" form-group">
<div className="row "> 
      <div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
<div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
<div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
</div>
<div className="row "> 
      <div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
<div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
<div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
</div>
<div className="row "> 
      <div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
<div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
<div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>

</div></div>
</div>
<div className='row'>
<div className="col-md-3">
<div className=" form-check">

<Field component={renderCheck}
label="Html"
name="Html"
type="checkbox"/>
</div>
</div></div>
</div>


<div className="container" style={{padding:'10px 10px'}}>

<Field component={renderFile}
label="Upload Here"
name="propic"
type="file"/>
</div>
<div className='container' style={{padding:'10px 10px'}} >

<Field component={renderText}
name="comments"
id="comments"
type="textarea"

/>

</div>
<div className="form-group">
            <Field name="inlineRadioOptions" component={renderRadio} label="Onshore" click={selectHandler1} />
            <Field name="inlineRadioOptions" component={renderRadio} label="Offshore" click={selectHandler} />
            <Field name="input_State" component={renderSelect} options={["Select location"]} />
        </div>
        <button className='btn btn-primary' type="submit" disabled={ pristine||submitting} onClick={showResults} >
          Submit
        </button>
        <button className='btn btn-danger' type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
    </form>
  )
}




export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
   // <--- warning function given to redux-form
})(SyncValidationForm)