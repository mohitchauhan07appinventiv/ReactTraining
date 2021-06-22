import React, { useState } from "react";
import styleSheet from "./components/style";
import {
  Button,
  InputAdornment,
  TextField
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import Modal from "./components/Modal";
import DisplayTable from "./components/DisplayTable";


const Assignment8 = () => {
  const classes = styleSheet();
  const [isAdd, setIsAdd] = useState(null);
  const [isDelete, setDelete] = useState(false);
  const [selectedEditObj, setSelectedEditObj] = useState(null);
  const [searchData,setSearchData] = useState("");

  const addEmployee = () => {
    handleClickOpen();
    setIsAdd(true);
  };


  const columns = [
    {
      id: "empFname",
      label: "Employee First Name",
      minWidth: 300,
    },
    {
      id: "empLname",
      label: "Employee Second Name",
      minWidth: 350,
    },
    {
      id: "desig",
      label: "Designation",
      minWidth: 250,
    },
    {
      id: "tech",
      label: "Technology",
      minWidth: 250,
    },
    {
      id: "action",
      label: "Actions",
      minWidth: 100,
      align: "right",
    },
  ];
  const rows = [
   
  ];

  const [data, setData] = useState(rows);
  function search(data){
    return data.filter((row)=> 
    row.empFname.toLowerCase().indexOf(searchData)>-1 ||
    row.empLname.toLowerCase().indexOf(searchData)>-1 ||
    row.desig.toLowerCase().indexOf(searchData)>-1 ||
    row.tech.toLowerCase().indexOf(searchData)>-1
    
    )
  }

  //   ------------------------------------------------------- Modal Section
  const [open, setOpen] = useState(false);

  const handleAddData = (obj) => {
    data.unshift(obj)
    setData(data);
  };

  const handleEditData = (editedObj) => {
    const findIndexInData = data.findIndex((curr) => {
        return (
          curr.empFname === selectedEditObj.empFname &&
          curr.empLname === selectedEditObj.empLname
        );
      });
      const tempObj = data;
   
      tempObj[findIndexInData]=editedObj;
    setData(tempObj);
    // -----------------------------------------------------------------------------------
  };
  const handleDeleteData= (obj)=>{
    const findIndexInData = data.findIndex((curr) => {
      return (
        curr.empFname === obj.empFname &&
        curr.empLname === obj.empLname
      );
    });

    data.splice(findIndexInData,1);
    setData(data);
  }
  

  function handleEdit(obj) {
    setSelectedEditObj(obj);
    setIsAdd(false);
    setOpen(true);
  }
  
  const handleDelete = (obj) => {
    if(open){
      handleDeleteData(selectedEditObj);
      setDelete(false);
    }else{
      setOpen(true);
      setDelete(true);
      setSelectedEditObj(obj);
    }
  };
  
  const cancelDelete = () =>{
    setDelete(false);
  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   ------------------------------------------------------- Modal Section

  return (
    <div className={classes.mainContainer}>
      <div className={classes.cardContainer}>
        <h4 className={classes.heading}>{"Appinventiv"}</h4>
        <TextField
          label="Search"
          id="search"
          variant={'outlined'}
          className={classes.searchInput}
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search/></InputAdornment>,
          }}
        />
        <Button
          variant={"contained"}
          className={classes.submitBtn}
          color={"primary"}
          onClick={addEmployee}
        >
          {"Add Employee"}
        </Button>
      </div>
      {open && (
        <Modal
          data={data}
          columns={columns}
          isAdd={isAdd}
          open={open}
          onClose={handleClose}
          addData={handleAddData}
          addEdit={handleEditData}
          editableObj={selectedEditObj}
          isDelete= {isDelete}
          handleDelete={handleDelete}
          cancelDelete={cancelDelete}
        />
      )}
      <DisplayTable data={search(data)} columns={columns} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
};

export default Assignment8;
