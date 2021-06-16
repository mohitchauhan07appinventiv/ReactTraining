import React, { useState } from "react";
import useStyle from "./style";
import { TextField, Button } from "@material-ui/core";


const ArrayForm = (props) => {
  const classes = useStyle();
  const [keySelected, setKeySelected] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [bikeObjKeys, setBikeObjKeys] = useState(null);
  const [defaultValues, setDefaultValues] = useState(null);
  const [inputField, setInputField] = useState(null);
  const [selelctedIndex, setSelectedIndex] = useState(null);

  // const [showData, setShowData] = useState(false);
  const selected = props.location.state.selected;
  const data = JSON.parse(localStorage.getItem("apiData"));
  const dataArray = data[selected];
  // console.log(dataArray);

  const handleChange = (e) => {
    setKeySelected(e.target.value);
    //   setShowData(true);
  };
  const handleChange2 = (e) => {
    setInputField({
      ...inputField, [e.target.name]:e.target.value
    });
  }


  // const objKeys = Object.keys(BikeObjSelectedModel);

  const edit = () => {
    setIsEdit(true);
    const BikeObjSelectedModel = dataArray.find((curr) => {
      return curr.model === keySelected;
    });
    
    const tempIndex = dataArray.findIndex((curr) => {
      return curr.model === keySelected;
    });
  
    setSelectedIndex(tempIndex);

    const bikeObjKeys = Object.keys(BikeObjSelectedModel);
    setBikeObjKeys(bikeObjKeys);

    const customdefauluObj = {
      price:BikeObjSelectedModel.price,
      name:BikeObjSelectedModel.name,
      model:BikeObjSelectedModel.model,
      desc:BikeObjSelectedModel.desc
    }

    setDefaultValues(customdefauluObj);
    setInputField(BikeObjSelectedModel);

  };
  const save = () => {
    data[selected][selelctedIndex] = inputField;
    window.localStorage.setItem('apiData',JSON.stringify(data));
    console.log(JSON.parse(localStorage.getItem('apiData')));
  };

  return (
    <div className={classes.cardContainer}>
      <h1 className={classes.heading}>
        {"Object Key Selected, Choose To Edit"}
      </h1>
      <div className={classes.displayContainer}>
        <div className={classes.arrayFormDisplay}>
          {isEdit ? (
            <>
              {bikeObjKeys.map((value, index) => {
                if (value === "name" || value==='model' || value==='price'|| value==='desc') {
                  return (
                    <TextField
                    key={index}
                      name={value}
                      fullWidth={true}
                      label={value}
                      variant="outlined"
                      defaultValue={defaultValues[value]}
                      onChange={handleChange2}
                    />
                  );
                }else{
                  return null
                }
              })}
            </>
          ) : (
            <>
              <TextField
                id="select"
                select
                margin={"normal"}
                fullWidth={true}
                label="Select Keys"
                variant="outlined"
                onChange={handleChange}
                SelectProps={{
                  native: true,
                  name: "select",
                }}
              >
                <option></option>
                {dataArray.map((value, index) => (
                  <option key={index}>{value.model}</option>
                ))}
              </TextField>
              <Button
                variant={"contained"}
                margin={"dense"}
                fullWidth={true}
                color={"secondary"}
                onClick={edit}
                className={classes.submitBtn}
              >
                EDIT
              </Button>
            </>
          )}
        </div>
        <div className={classes.formContainer}>
          {!isEdit && <h2 className={classes.title}>Please Press Edit Button First</h2>}
          
          <Button
            variant={"contained"}
            margin={"dense"}
            fullWidth={true}
            color={"secondary"}
            onClick={save}
            className={classes.submitBtn}
          >
            save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArrayForm;
