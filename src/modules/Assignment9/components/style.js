import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "920px",
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    padding: "50px",
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexDirection:'column',
  },
  cardContainer: {
    width: "40%",
    height: "600px",
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "15px",
    boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.1)",
    transition: "0.5s ease",
    "&:hover": {
      boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.3)",
      opacity: "1",
    },
    opacity: "0.9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: "0 0 40px 0",
  },
  heading: {
    fontSize: "40px",
    textAlign: "center",
    textDecoration: "underline",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    // textAlign:'center',
    margin:'50px 0 0 0',
  },
  para: {
    fontSize: "16px",
    fontWeight: "normal",
    margin: "0 0 0 20px",
  },
  submitBtn: {
    height: "60px",
    width: "200px",
    borderRadius: "30px",
  },
  display: {
    height: "100%",
    width: "48%",
    // border: "1px solid black",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  // formContainer:{
  //   margin:'50px 0px',
  // },
  form: {
    height: "100%",
    width: "48%",
    // border: "1px solid black",
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center',
  
  },
  loginImg:{
    // margin:'50px 0 0 0',
    width:'109%',
    height:'55%',
  },
  navBarContainer:{
    height:'70px',
    width:'90%',
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "0px 40px",
    boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.1)",
    transition: "0.5s ease",
    "&:hover": {
      boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.3)",
      opacity: "1",
    },
    opacity: "0.9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin:'0px 0 50px 0',
  },
  productContainer:{
    maxHeight:'1200px',
    minHeight:'600px',
    width:'90%',
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "30px 40px",
    boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.1)",
    transition: "0.5s ease",
    "&:hover": {
      boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.3)",
      opacity: "1",
    },
    opacity: "0.9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap:'wrap',
  },
  smallProductContainer:{
    width:'26.5%',
    height:'500px',
    borderRadius:'20px',
    padding:'10px',
    transition:'0.5s ease',
    '&:hover':{
      boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.3)",
      cursor:"pointer",
    },
    margin:'0 0 20px 0',
  },
  smallPrdImg:{
    height:'93%',
    width:'100%',
    borderRadius:'20px',
  },
  productDisply:{
    display:'flex',
    height:'100%',
    width:'100%',    
  },
  productMedia:{
    margin:'50px 0 0 0',
    width:'50%',
    height:'900px',
  },
  productContent:{
    margin:'50px 0 0 0',
    width:'50%',
    height:'900px',
    padding:'0 40px',
    // border:'1px solid black'
  },
  ratingTitle:{
    margin:'40px 0 40px 0',
  },
  ratingSpan:{
    color:'rgba(235, 189, 52, 1)',
    fontWeight:'bold'
  },
  desctext:{
    margin:'50px 0 0 0',
    lineHeight:'2',

  },
  goBackBtn:{
    margin:'50px 0 0 0',
    height:'60px',
    width:'200px',
    borderRadius:"10px",
  },
  productTitle:{
    textAlign:'center',
    fontSize:'22px',
    fontWeight:'bold',
  }
});
export default useStyle;
