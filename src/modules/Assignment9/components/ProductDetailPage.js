import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useParams, useHistory } from "react-router-dom";
import useStyle from "./style";
import Loader from "./Loader";
import data from "./data";
import Button from './Button';


const ProductDetailPage = () => {
  const classes = useStyle();
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const param = useParams();
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

  const handleOnclickGoBack = () => {
    history.goBack();
  }
  const reducedData=data[param.id];
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header text={"Product Details"} handleOnclick={handleOnclick} />
          <div className={classes.productContainer}>
            <div className={classes.productDisply}>
              <div className={classes.productMedia}>
                <img className={classes.smallPrdImg} src={reducedData.img} alt={'productImg'}></img>
              </div>
              <div className={classes.productContent}>
                  <h2 className={classes.heading}>{reducedData.title}</h2>
                  <h2 className={classes.ratingTitle}>Raiting : - <span className={classes.ratingSpan}>{reducedData.rating}</span></h2>
                  <div className={classes.title}>Description - </div>
                  <p className={classes.desctext}>{reducedData.desc}</p>
                  <Button btnClass={classes.goBackBtn} variant = {'contained'} color={'primary'} text={'Go Back'} handleOnclick={handleOnclickGoBack}/>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetailPage;
