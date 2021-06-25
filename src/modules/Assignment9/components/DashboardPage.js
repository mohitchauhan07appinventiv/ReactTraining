import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useStyle from "./style";
import Loader from "./Loader";
import Header from "./Header";
// import data from "./data";
import axios from "axios";
import Button from "./Button";

const DashboardPage = (props) => {
  const classes = useStyle();
  const {handleSetData}=props;
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const mainData = props.data;
  const [data,setData] = useState(mainData);
  // const [data, setData] = useState(data)

  // const apiCall = async () => {
  //   try {
  //     const apiData = await axios.get("https://reqres.in/api/users");
  //     handleSetData(apiData.data.data);
  //   } catch (e) {
  //     alert("cannot fetch data try again after some time");
  //     history.goBack();
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
    // apiCall();
    
  }, []);
  console.log(props.data);
  const handleOnclick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.removeItem("access_token");
      localStorage.removeItem("credentials");
      history.push("/");
    }, 500);
  };

  const handleAddUsers = async () => {
    console.log(data, "previous data");
    const res = await axios.put("https://reqres.in/api/users", {
      id: data.length + 1,
      email: "randomNewId@reqres.in",
      first_name: "Mike",
      last_name: "Ross",
      avatar:
        "https://pbs.twimg.com/profile_images/934207486533488641/Oyie2Q0D_400x400.jpg",
    });
    // data.splice(data.length,0,res.data);
    // handleSetData(data);
    handleSetData(res.data,'add');
    data.splice(data.length,0,res.data)
    setData(data);
    console.log(data, 'add data local to dashboard')
    alert("NEW User Added Successfully");
  };

  const handleEditData= () => {
    debugger;
    console.log('Called Edit data from dashboard');
  }

  const handleItemsOnClick = (id) => {
    history.push(`/dashboard/product/${id-1}`)
  }
  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Header text={"PRODUCT DASHBOARD"} handleOnclick={handleOnclick} />
          <Button
            variant={"contained"}
            color={"primary"}
            btnClass={classes.submitBtn}
            text={"Add User"}
            handleOnclick={handleAddUsers}
          />
          <div className={classes.productContainer}>
            {data.map((value, index) => {
              return (
                <div key={index+10} onClick={()=>{handleItemsOnClick(value.id)}}>
                  <img
                    className={classes.smallPrdImg}
                    src={value.avatar}
                    alt={"productImg"}
                  ></img>
                  <p
                    className={classes.productTitle}
                  >{`${value.first_name}  ${value.last_name}`}</p>
                  <p className={classes.productTitle}>{value.email}</p>
                </div>

                // <Link
                //   key={index + 10}
                //   className={classes.smallProductContainer}
                //   to={{
                //       pathname:`/dashboard/product/${value.id-1}`,
                //       state:{
                //         selectedData:data[value.id],

                //       },

                //   }}
                //   style={{textDecoration:'none'}}
                //   handleEditData={handleEditData}
                // >
                //   <img className={classes.smallPrdImg} src={value.avatar} alt={'productImg'}></img>
                //   <p className={classes.productTitle}>{`${value.first_name}  ${value.last_name}`}</p>
                //   <p className={classes.productTitle}>{value.email}</p>
                // </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default DashboardPage;
