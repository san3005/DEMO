import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const renderFile = ({ input, value, label, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div >
            <input {...input} placeholder={label} type="file" value={value} />
            <div>{touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}</div>
        </div>
    </div>
);

const renderCheck = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className="checkboxleft">
        <div>
            <input {...input} type={type} className="form-check-input " /><label>{label}</label>
            {touched && ((error && <span className="text-danger"><br></br>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
const renderField2 = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <div>
            <textarea {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)


const renderRadio = (props) => {
    return (
        <div className="form-check form-check-inline">
            <label className="form-check-label" htmlFor="inlineRadio1">
                <input {...props.input} className="form-check-input" type="radio" id="inlineRadio1" onClick={props.click} />

                {props.label}</label>
        </div>
    )
}

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

const validate = values => {
    const errors = {}
    if (!values.AName) {
        errors.AName = 'Please enter the Associate Name.'

    }
    else if (!/^[a-zA-Z ]*$/.test(values.AName)) {
        errors.AName = 'Accepts Alphabets, space & Min 5 to Max 30 Char'
    }
    else if (values.AName.length < 5) {
        errors.AName = 'Accepts Alphabets, space & Min 5 to Max 30 Char'
    }
    else if (values.AName.length > 30) {
        errors.AName = 'Accepts Alphabets, space & Min 5 to Max 30 Char'
    }


    if (!values.Aid) {
        errors.Aid = 'Please enter the Associate id.'
    }
    else if (!/^([0-9]{6})$/.test(values.Aid)) {
        errors.Aid = 'Invalid Associate Id'
    }


    if (!values.Pid) {
        errors.Pid = 'Please enter the Project id.'
    }
    else if (!/^[a-zA-Z0-9]{12}$/.test(values.Pid)) {
        errors.Pid = 'Please enter the Project id.'
    }

    if (!values.uploadProfile) {
        errors.uploadProfile = 'Please upload Profile Picture '
    }

    if (!values.Pid) {
        errors.Comments = 'Please Enter Comments.'
    }


    if (!values.input_State) {
        errors.input_State = 'Please Select Location'
    }
//skills validation 
var tcount = 0;

if (!values.html) {
    tcount = tcount + 1;
}
if (!values.sass) {
    tcount = tcount + 1;
}
if (!values.es5) {
    tcount = tcount + 1;
}
if (!values.bootstrap) {
    tcount = tcount + 1;
}
if (!values.angular) {
    tcount = tcount + 1;
}
if (!values.react) {
    tcount = tcount + 1;
}
if (!values.vu) {
    tcount = tcount + 1;
}
if (!values.typescript) {
    tcount = tcount + 1;
}
if (!values.express) {
    tcount = tcount + 1;
}
if (!values.node) {
    tcount = tcount + 1;
}
if (!values.mongo) {
    tcount = tcount + 1;
}
if (tcount >=7) {
    errors.bootstrap = 'Please select Min 5 skills.'
}


return errors
}


let FormCode = props => {
const { handleSubmit, pristine,
    reset,
    submitting } = props;
return (

    <form onSubmit={handleSubmit}>

        <div className="form-group">
            <Field name="AName" component={renderField} label="Associate Name" />
        </div>
        <div className="form-group">
            <Field name="Aid" component={renderField} label="Associate Id" />
        </div>
        <div className="form-group">
            <Field name="Pid" component={renderField} label="Project Id" />
        </div>
        <div className="form-group">
            <Field name="inlineRadioOptions" component={renderRadio} label="Onshore" click={selectHandler1} />
            <Field name="inlineRadioOptions" component={renderRadio} label="Offshore" click={selectHandler} />
            <Field name="input_State" component={renderSelect} options={["Select location"]} />
        </div>

        <div className="form-group">
            <div className="row">
                <div className="col-md-3">
                    <div className="form-check">
                        <Field component={renderCheck} label="HTML CSS" type="checkbox" name="html" />
                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="SASS" type="checkbox" name="sass" />
                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="ES5,ES6,ES7" type="checkbox" name="es5" />

                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="Bootstrap4" type="checkbox" name="bootstrap" />

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="form-check">
                        <Field component={renderCheck} label="Angular 8" type="checkbox" name="angular" />
                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="React JS" type="checkbox" name="react" />

                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="VU JS" type="checkbox" name="vu" />

                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="TypeScript" type="checkbox" name="typescript" />

                    </div>

                </div>
                <div className="col-md-3">
                    <div className="form-check">
                        <Field component={renderCheck} label="Express JS" type="checkbox" name="express" />

                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="Node JS" type="checkbox" name="node" />

                    </div>
                    <div className="form-check">
                        <Field component={renderCheck} label="Mongo DB" type="checkbox" name="mongo" />

                    </div>

                </div>

            </div>

        </div>


        <div className="form-group">
            <Field name="uploadProfile" component={renderFile} label="Upload Profile" />
        </div>

        <div className="form-group">
            <Field name="Comments" component={renderField2} label="Comments" rows="4" />
        </div>



        <div className="form-group">
            <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-danger resetspace" >Reset</button>

        </div>

    </form >
)
}
FormCode = reduxForm({
form: 'contact',
validate
})(FormCode);

export default FormCode;

