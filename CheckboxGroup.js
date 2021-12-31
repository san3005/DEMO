import React from 'react'
import { Field, ErrorMessage } from 'formik'

  
function CheckboxGroup (props) {
  const { label, name, options, ...rest } = props
  return (
      <div className="row">
      <label className='px-4'>{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
                <div className="col-sm-4">
                <input
                  type='checkbox'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            )
          })
        }}
      </Field>
      
       <ErrorMessage component="div" style={{fontSize:"10px",color:"red"}}name={name} />
 </div> )
}

export default CheckboxGroup