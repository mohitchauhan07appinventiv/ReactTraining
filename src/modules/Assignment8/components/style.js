import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  mainContainer: {
    width: "100%",
    minHeight: "920px",
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    padding: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContainer: {
    width: "80%",
    // height: "12%",
    backgroundColor: "white",
    borderRadius: "30px",
    padding: "15px 40px 15px 40px",
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
    margin:'0 0 40px 0',
  },
  heading: {
    fontSize: "40px",
    textAlign: "center",
    textDecoration: "underline",
  },
  title: {
    fontSize: "22px",
    fontWeight:'bold'
  },
  para: {
    fontSize: "16px",
    fontWeight: "normal",
    margin:'0 0 0 20px'
  },
  submitBtn:{
    height:'60px',
    width:"200px",
    borderRadius:'30px', 
  },
  tablePaper:{
    width:'100%',
    margin:'15px 0 15px 0'
  },
  dialogBox:{
    width:'600px',
    padding:'30px 50px',
  },
  addFormBtn:{
    height:'60px',
    width:"300px",
    borderRadius:'30px', 
    margin:'0px 0 30px 150px',
  },
  dialogBoxMaterial:{
    paddingTop:'40px',
  },
  searchInput:{
    width:'40%',
  },
  deleteContainer:{
    width:'500px',
    height:'300px',
  },
  deleteBtnContainer:{
    margin:'40px 0 0 0',
    padding:'0px 100px'
  },
  cancelBtn:{

  },
  deleteBtn:{
   height:'60px',
   borderRadius:'50px',
   margin:'0 0 20px 0'
  },
  errorMessage:{
    color:'red'

  },
});
export default useStyle;
