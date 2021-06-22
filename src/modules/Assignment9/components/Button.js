import React from 'react'
import { Button } from '@material-ui/core';


const CustomButton = (props) => {
   
    const { handleOnclick, btnClass, text, variant, color } = props;
    return (
        <>
        <Button variant = {variant} color={color} className={btnClass} onClick={()=>handleOnclick()} >{text}</Button>
        </>
    )
}
export default CustomButton;
