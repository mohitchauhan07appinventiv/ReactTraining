import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    padding:'50px',
  },
  Btn: {
    size: "500px",
    width: "300px",
    height:'70px',
    backgroundImage:
      "linear-gradient(to right, #283048 0%, #859398  51%, #283048  100%)",
    margin: "10px",
    padding: "15px 45px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",
    fontWeight: "bolder",
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    // display: "block",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fff",
      textDecoration: "none",
    },
  },
  cardContainer:{
    backgroundColor:'rgb(252,252,252)',
    // backgroundColor:'white',
    width:'50%',
    height:'600px',
    margin: '100px auto',
    borderRadius:'40px',
    padding:'30px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    boxShadow:'2px 12px 24px rgba(0,0,0,0.3)',
    transition:'0.5s ease',
    '&:hover':{
        boxShadow:'2px 12px 24px rgba(0,0,0,0.6)', 
    },
  },
  display:{
      position:'relative',
      border:'1px solid rgba(0,0,0,0.1)',
      borderRadius:'10px',
      width:'100%',
      height:'80%',
      transition:'0.4s ease',
      '&:hover':{
        // border:'1px solid rgba(0,0,0,0.5)',
        boxShadow:'1px 1px 4px rgba(0,0,0,0.5)',
      },
  },
  editContainer:{
    display:'flex',
    width:'100%',
    height:'100%',
  },

  editDisplay:{
    position:'relative',
      // border:'1px solid black',
      borderRadius:'10px',
      width:'50%',
      height:'100%',
      transition:'0.4s ease',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding:'10px',
      '&:hover':{
        // border:'1px solid rgba(0,0,0,0.5)',
        boxShadow:'1px 1px 4px rgba(0,0,0,0.5)',
      },
  },
 
  formContainer:{
    width:'50%',
    height:'100%',
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    // border:'1px solid rgba(0,0,0,0.2)',
  },
  btnContainer:{
    display:'flex',
    
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  formControlSelect:{
      width:'40%',
  },
});
export default useStyles;
