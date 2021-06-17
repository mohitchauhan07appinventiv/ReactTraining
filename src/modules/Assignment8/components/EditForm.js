import React from 'react';
import useStyle from './style';

const EditForm = () => {
     
    const classes=useStyle();
    
    return (
        <div className={classes.dialogBox}>
            <h1 className={classes.heading}>{'Edit The Given Entries'}</h1>
        </div>
    )
}

export default EditForm
