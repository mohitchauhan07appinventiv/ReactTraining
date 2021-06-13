import {makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    // --------------------------------------- MOVIE PAGE
    movieCardWrapper:{
        display:'flex',
        width:'80%',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    // --------------------------------------- MOVIE CARD
    root: {
        width: "450px",
        height: "700px",
        borderRadius:'20px',
      },
      cardAction: {
        height: "75%",
      },
      cardMedia: {
        height: "100%",
      },
      raiting:{
        margin:'10px 0 0 0',
      },
      raitingDigit:{
          color:'orange',
          fontWeight:'bold'
      },
    // --------------------------------------- index
    mainWrapper:{
        backgroundImage: "linear-gradient( -30deg, rgb(224,195,252) 0%, rgb(142,197,252) 100%)",
        width:'100vw',
        height:'100vh',
        margin:'0 auto',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    // --------------------------------------- SignUpForm
    submitBtn: {
        margin: "50px 0 0 0",
        height: "60px",
        width: "100%",
        borderRadius: "30px",
    },
    // --------------------------------------- LoginPage
    loginContainer: {
        backgroundColor: "#fff",
        width: "40%",
        height: "600px",
        borderRadius: "15px",
        position: "relative",
        padding: "50px 0px 0px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      loginMedia: {
        height: "55%",
        width: "50%",
        // border:'1px solid black'
      },
      loginFormContainer: {
        width: "50%",
        height: "90%",
        display: "flex",
        flexDirection: "column",
        // border:'1px solid black'
      },
      loginTitle: {
        fontFamily:'Hammer',
        fontWeight: "bold",
        textAlign: "center",
        margin: "0 0 30px 0",
      },
      loginBtn: {
        margin: "30px 0 0 0",
        height: "60px",
        width: "100%",
        fontWeight: "bolder",
        fontSize: "20px",
        borderRadius: "30px",
      },
      signupBtn: {
        // margin:'10px 0 0 0',
        height: "60px",
        width: "100%",
        borderRadius: "30px",
        backgroundColor: "green",
        fontWeight: "bolder",
        fontSize: "20px",
        "&:hover": {
          backgroundColor: "rgb(5, 110, 0)",
        },
      },
      orText: {
        textAlign: "center",
        margin: "10px 0 10px 0",
    },
    // --------------------------------------- SignUpPage
    signUpContainer: {
        backgroundColor: "#fff",
        width: "45%",
        height: "800px",
        borderRadius: "15px",
        position: "relative",
        padding: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
      media: {
        height: "60%",
        width: "45%",
      },
      signUpFormContainer: {
        width: "50%",
        height: "60%",
        display: "flex",
        flexDirection: "column",
      },
      signupTitle: {
        fontFamily: "Hammer",
        fontWeight: "bold",
        textAlign: "center",
        margin: "0 0 40px 0",
    },

});
export default useStyle;