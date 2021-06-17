import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Dialog } from "@material-ui/core";

import AddForm from "./AddForm";

import useStyle from "./style";

function SimpleDialog(props) {
  const classes = useStyle();
  const {
    onClose,
    data,
    isAdd,
    open,
    addData,
    editableObj,
    addEdit,
    isDelete,
    handleDelete,
    cancelDelete,
  } = props;
  const [inputValues, setInputValues] = useState();


  useEffect(() => {
    if (isAdd) {
      const inputObj = {
        empFname: "",
        empLname: "",
        desig: "",
        tech: "",
      };

      setInputValues(inputObj);
    } else {
      setInputValues(editableObj);
    }
  }, []);

  const handleClose = () => {
    onClose();
  };

  const handleInputValues = (obj) => {
    setInputValues(obj);
  };
  const addNewData = () => {

      addData(inputValues);
      handleClose();
  
  
  };
  const editPreviousData = () => {
    addEdit(inputValues);
    handleClose();
  };
  const confirmDelete = () => {
    onClose();
    handleDelete();
  }
  const cancelDeletefun = () =>{
    onClose();
    cancelDelete();
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialogBox" open={open}>
      {isDelete ? (
        <>
          <div className={classes.deleteContainer}>
            <h1 className={classes.heading}>{'DO You Want To Delete The Entry'}</h1>
            <div className={classes.deleteBtnContainer}>
              <Button
              variant={'contained'}
              fullWidth={'true'}
              onClick={confirmDelete} 
              className={classes.deleteBtn} 
              color={'primary'}            
              >
                {"delete"}
              </Button>
              <Button
              variant={'contained'}
              fullWidth={'true'}
              onClick={cancelDeletefun} 
              className={classes.deleteBtn} 
              color={'secondary'}            
              >
                {"Cancel"}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={classes.dialogBoxMaterial}>
            {isAdd ? (
              <>
                <h1 className={classes.heading}>{"Add New Entries Here"}</h1>
                <AddForm
                  data={data}
                  inputValues={inputValues}
                  inputChange={handleInputValues}
                />
                <Button
                  className={classes.addFormBtn}
                  variant={"contained"}
                  color={"primary"}
                  onClick={addNewData}
                >
                  {"add entries"}
                </Button>
              </>
            ) : (
              <>
                <h1 className={classes.heading}>{"Edit Entries Here"}</h1>
                <AddForm
                  editdata={data}
                  data={data}
                  inputValues={inputValues}
                  inputChange={handleInputValues}
                />
                <Button
                  className={classes.addFormBtn}
                  variant={"contained"}
                  color={"primary"}
                  onClick={editPreviousData}
                >
                  {"Save Changes"}
                </Button>
              </>
            )}
          </div>
        </>
      )}

    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SimpleDialog;
