import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import useStyle from "./style";
import Loader from "./Loader";
import Header from './Header';
import data from "./data";

const DashboardPage = () => {
  const classes = useStyle();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  const handleOnclick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      localStorage.removeItem("access_token");
      history.push("/");
    }, 500);
  };
  return (
    <>
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Header text={'PRODUCT DASHBOARD'} handleOnclick={handleOnclick}/>
          <div className={classes.productContainer}>
            {data.map((value, index) => {
              return (
                <Link
                  key={index + 10}
                  className={classes.smallProductContainer}
                  to={{
                      pathname:`/dashboard/product/${value.id}`
                  }}
                >
                  <img className={classes.smallPrdImg} src={value.img} alt={'productImg'}></img>
                  <p className={classes.productTitle}>{value.title}</p>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default DashboardPage;
