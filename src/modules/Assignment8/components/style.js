import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContainer: {
    width: "80%",
    height: "12%",
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "0px 40px 0px 40px",
    boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.1)",
    transition: "0.5s ease",
    "&:hover": {
      boxShadow: "2px 2px 12px 14px rgba(0,0,0,0.3)",
      opacity: "1",
    },
    opacity: "0.9",
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
  },
  heading: {
    fontSize: "40px",
    textAlign: "center",
    textDecoration: "underline",
  },
  title: {
    fontSize: "30px",
    textAlign: "center",
  },
  para: {
    fontSize: "16px",
    textAlign: "left",
    fontWeight: "normal",
    margin:'0 0 0 20px'
  },
  displayContainer: {
    height: "90%",
    padding: "30px 0px  ",
    display: "flex",
  },
  display: {
    height: "100%",
    width: "50%",
    borderRadius:'30px',
    border:'1px solid rgba(0,0,0,0.2)',
    padding:'0px 30px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around'
  },
  arrayFormDisplay:{
    height: "100%",
    width: "50%",
    borderRadius:'30px',
    border:'1px solid rgba(0,0,0,0.2)',
    padding:'0px 30px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around'
  },
  formContainer: {
    height: "100%",
    width: "50%",
    padding:'0px 30px',
  },
  submitBtn:{
    height:'60px',
    width:"200px",
    borderRadius:'30px',
    
  }
});
export default useStyle;
