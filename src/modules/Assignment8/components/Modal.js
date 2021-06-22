import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Dialog } from "@material-ui/core";
import Loader from "./Loader";

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
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setError] = useState({
    fname: "",
    lname: "",
    desig: "",
    tech: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
  }, [isAdd, editableObj]);

  const handleClose = () => {
    onClose();
  };

  const handleInputValues = (obj) => {
    setInputValues(obj);
  };
  const addNewData = () => {
    if (validation()) {
      addData(inputValues);
      handleClose();
    } else {
    }
  };
  const validation = () => {
    let anyFieldHasError = {
      empFname: true,
      empLname: true,
      desig: true,
      tech: true,
    };
    if (inputValues.empFname === "" || inputValues.empFname.length > 15) {
      anyFieldHasError.empFname =
        "First Name Length must be Greater Than 0 and Less than 15";
    } else {
      anyFieldHasError.empFname = "";
    }
    if (inputValues.empLname === "" || inputValues.empLname.length > 15) {
      anyFieldHasError.empLname =
        "Last Name Length must be Greater Than 0 and Less than 15";
    } else {
      anyFieldHasError.empLname = "";
    }
    if (
      inputValues.desig === "" ||
      !/^[a-zA-Z]{4,20}$/i.test(inputValues.desig)
    ) {
      anyFieldHasError.desig =
        "There can be minimum of 4 and maximum of 10 of alphabets.";
    } else {
      anyFieldHasError.desig = "";
    }
    if (
      inputValues.tech === "" ||
      !/^[a-zA-Z]{4,20}$/i.test(inputValues.desig)
    ) {
      anyFieldHasError.tech =
        "There can be minimum of 4 and maximum of 10 of alphabets.";
    } else {
      anyFieldHasError.tech = "";
    }
    setError(anyFieldHasError);
    if (
      !anyFieldHasError.empFname &&
      !anyFieldHasError.empLname &&
      !anyFieldHasError.desig &&
      !anyFieldHasError.tech
    ) {
      return true;
    } else {
      return false;
    }
  };
  const editPreviousData = () => {
    if (validation()) {
      addEdit(inputValues);
      handleClose();
    } else {
    }
  };
  const confirmDelete = () => {
    onClose();
    handleDelete();
  };
  const cancelDeletefun = () => {
    onClose();
    cancelDelete();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialogBox" open={open}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {isDelete ? (
            <>
              <div className={classes.deleteContainer}>
                <h1 className={classes.heading}>
                  {"Do You Want To Delete The Entry"}
                </h1>
                <div className={classes.deleteBtnContainer}>
                  <Button
                    variant={"contained"}
                
                    onClick={confirmDelete}
                    className={classes.deleteBtn}
                    color={"primary"}
                  >
                    {"yes"}
                  </Button>
                  <Button
                    variant={"contained"}
                 
                    onClick={cancelDeletefun}
                    className={classes.deleteBtn}
                    color={"secondary"}
                  >
                    {"no"}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={classes.dialogBoxMaterial}>
                {isAdd ? (
                  <>
                    <h1 className={classes.heading}>
                      {"Add New Entries Here"}
                      <span
                        className={classes.cancellBtn}
                        onClick={cancelDeletefun}
                      >
                        X
                      </span>
                    </h1>
                    <AddForm
                      data={data}
                      inputValues={inputValues}
                      inputChange={handleInputValues}
                      errors={errors}
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
                    <h1 className={classes.heading}>
                      {"Edit Entries Here"}
                      <span
                        className={classes.cancellBtn}
                        onClick={cancelDeletefun}
                      >
                        X
                      </span>
                    </h1>
                    <AddForm
                      editdata={data}
                      data={data}
                      inputValues={inputValues}
                      inputChange={handleInputValues}
                      errors={errors}
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
