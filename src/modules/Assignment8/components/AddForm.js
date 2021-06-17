import React,{useEffect, useState} from 'react';
import useStyle from './style';
import { TextField} from '@material-ui/core';

const AddForm = (props) => {
    const {inputValues,inputChange, submitBtnClicked} = props;
    const classes=useStyle();
    const [formInputValues, setFormInputValues]=useState(inputValues);
    const [errors, setError] = useState({
        fname:"",
        lname:'',
        desig:'',
        tech:''
    });

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
    },[formInputValues])

    if(submitBtnClicked){

        const checkValid = () => {
            if(formInputValues.empFname==='' || formInputValues.empFname.length > 15){
                setError({
                    ...errors,fname:'First Name Length must be Greater Than 0 and Less than 15'
                })
            }else{
                setError({
                    ...errors,fname:''
                })
            }
            if(formInputValues.empLname==='' || formInputValues.empLname.length > 15){
                setError({
                    ...errors,lname:'Last Name Length must be Greater Than 0 and Less than 15'
                })
            }else{
                setError({
                    ...errors,lname:''
                })
            }
            if(formInputValues.desig==='' || !/^[a-zA-Z]{4,20}$/i.test(formInputValues.desig)){
                setError({
                    ...errors,desig:'There can be minimum of 4 and maximum of 10 of alphabets.'
                })
            }else{
                setError({
                    ...errors,desig:''
                })
            }
            if(formInputValues.tech==='' || !/^[a-zA-Z]{4,20}$/i.test(formInputValues.desig)){
                setError({
                    ...errors,tech:'There can be minimum of 4 and maximum of 10 of alphabets.'
                })
            }else{
                setError({
                    ...errors,tech:''
                })
            }
        }
    }

    return (
        <div className={classes.dialogBox}>
            <TextField className={classes.inputFields} name={'empFname'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter First Name'} fullWidth={true} defaultValue={inputValues.empFname} />
            <p className={classes.errorMessage}>{errors.fname}</p>
            <TextField className={classes.inputFields} name={'empLname'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter Last Name'} fullWidth={true}  defaultValue={inputValues.empLname}/>
            <p className={classes.errorMessage}>{errors.lname}</p>
            <TextField className={classes.inputFields} name={'desig'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter Designation'} fullWidth={true}  defaultValue={inputValues.desig}/>
            <p className={classes.errorMessage}>{errors.desig}</p>
            <TextField className={classes.inputFields} name={'tech'} variant={'outlined'} margin={'normal'} onChange={handleChange} label={'Enter Technology'} fullWidth={true}  defaultValue={inputValues.tech}/>
            <p className={classes.errorMessage}>{errors.tech}</p>
        </div>
    )
}

export default AddForm
