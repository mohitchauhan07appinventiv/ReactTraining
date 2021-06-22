import React,{useEffect, useState} from 'react';
import useStyle from './style';
import { TextField} from '@material-ui/core';

const AddForm = (props) => {
    const {inputValues,inputChange, errors} = props;
    const classes=useStyle();
    const [formInputValues, setFormInputValues]=useState(inputValues);
    

    const handleChange = (e) => {
        const name = e.target.name;
        setFormInputValues({
            ...formInputValues,[name]:e.target.value
        })
    }

    useEffect(()=>{
        return(
            inputChange(formInputValues)
        );
    },[formInputValues, inputChange])


    return (
        <div className={classes.dialogBox}>
            <TextField className={classes.inputFields} name={'empFname'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter First Name'} fullWidth={true} defaultValue={inputValues.empFname} />
            <p className={classes.errorMessage}>{errors.empFname}</p>
            <TextField className={classes.inputFields} name={'empLname'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter Last Name'} fullWidth={true}  defaultValue={inputValues.empLname}/>
            <p className={classes.errorMessage}>{errors.empLname}</p>
            <TextField className={classes.inputFields} name={'desig'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter Designation'} fullWidth={true}  defaultValue={inputValues.desig}/>
            <p className={classes.errorMessage}>{errors.desig}</p>
            <TextField className={classes.inputFields} name={'tech'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter Technology'} fullWidth={true}  defaultValue={inputValues.tech}/>
            <p className={classes.errorMessage}>{errors.tech}</p>
        </div>
    )
}

export default AddForm
