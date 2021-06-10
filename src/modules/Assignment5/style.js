import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  mainWrapper: {
    backgroundColor: "rgb(244,246,248)",
  },
  header: {
    width: "95%",
    height: "65px",
    // border: "1px solid black",
    display: "flex",
    alignItems: "center",
    padding: "0 16px 0 24px",
    justifyContent: "space-between",
    marginLeft: "5%",
    backgroundColor: "white",
    position:'fixed',
    top:'0',
    zIndex:'999',
  },
  switchBase: {
    color: "rgb(23, 196, 129) !important",
    "&$checked": {
      color: "rgb(23, 196, 129);",
    },
    "&.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "rgb(23, 196, 129);",
    },
    checked: {},
    track: {},
  },
  signUpBtn: {
    backgroundColor: "#388538",
    marginRight: "15px",
    color: "#fff",
    '&:hover':{
        backgroundColor:'#275d27',
    }
  },
  logInBtn: {
    backgroundColor: "#1565c0",
    color: "#fff",
    '&:hover':{
        backgroundColor:'#0e4684'
    },
  },
  drawer: {
    width: "50px",
  },
  drawerPaper: {
    backgroundColor: "#1565c0",
    width: "5%",
    height: "100%",
  },
  drawerIcons: {
    color: "white",
    width: "100%",
    height: "40px",
    margin: "10px 0 10px 0px",
  },
  contentSection: {
    width: "95%",
    marginLeft: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // textAlign:'center',
    // border:'1px solid black',
    marginTop:'65px'
  },
  bannerSection: {
    // border: "1px solid black",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "30px 0 10px 0",
  },
  buyAndSellContainer: {
    // border: "1px solid black",
    flexWrap: "wrap",
    width: "49%",
    display: "flex",
    minHeight: "100px",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "20px",
  },
  contentCard: {
    flexWrap: "wrap",
    width: "49%",
    display: "flex",
    minHeight: "100px",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    textAlign:'center',
  },
  buyRow: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0 0 20px 0",
  },
  buyBtn: {
    backgroundColor: "#1565c0",
    color: "white",
    width: "49%",
    height: "50px",
    '&:hover':{
        backgroundColor:'#0e4684'
    },
  },
  sellBtn: {
    color: "rgba(0,0,0,0.6)",
    width: "49%",
    height: "50px",
  },
  amountInput:{
    width:'49%',
  },
  searchBtn:{
    width:"100%",
    height:'50px',
    backgroundColor:'#1565c0',
    color:'white',
    marginBottom:'0',
    '&:hover':{
        backgroundColor:'#0e4684'
    },
  },
  contentText:{
      fontSize:'38px',
      color:'#424242',
  },
  contentBtn:{
    backgroundColor: "#388538",
    width:'30%',
    margin:'auto',
    color: "#fff",
    height:'50px',
    '&:hover':{
        backgroundColor:'#275d27',
    },
    tooltip:{
        fontSize: 16,
      backgroundColor: "#1465C0",
      color: "#fff",
      padding: "12px",
    },
  
  },
//   --------------------------------------------- Footer
  innerContainerLink: {
    // border: "1px solid black",
    width: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  linksRow: {
    display: "flex",
    flexDirection: "column",
  },
  linkSection: {
    display: "flex",
    justifyContent: "space-between",
    //   border:"1px solid black",
    width: "80%",
  },
  languageBtn: {
    margin: "10px 0 10px 0",
    color: "#1565c0",
    fontWeight: "bold",
    fontSize: "16px",
    height: "50px",
  },
  languageIcon: {
    margin: "0 10px 0 0",
  },
  copyRight: {
    margin: "0px 0 30px 0",
  },
  socialIcons: {
    width: "70px",
    height: "38px",
    padding: "0 12px 12px 12px",
  },
  BuyMonero:{
    display: "flex",
    alignItems: "center",
    color: "#388538",
    marginTop: "8px",
    fontSize: "24px",
  },
  //-----------------------------------------------Text Area

  TextContainer:{
    // border:'1px solid black',
    margin:'30px 0 0 0',
    width:'80%',
  },
  paraPostAd:{
    display: "flex",
    alignItems: "center",
    color: "#424242",
  },
  AdBtn:{
    color: "#388538",
    borderColor: "#388538",
  },
  moneroText:{
    fontSize: "18px",
  },
  showingAd:{
    display: "flex",
    justifyContent: "center",
    color: "#424242",
    alignItems: "center",
    marginTop: "27px",
  },
  vpnLogo:{
    height:"30px",
    width:'30px',
    margin: '0 10px 0 0'
  },
  showingAdText:{
    fontSize:'19px',
  },
  spanText:{
    fontWeight:'bold',
  },
  mainTextTitle:{
    fontSize: "20px",
    color:'rgba(0,0,0,0.8)',
    margin: "10px 0 10px 300px",
    fontWeight:'bold',
    width:'70%'
  },
  mainTextPara:{
    fontSize: "17px",
    width: "853px",
    color: 'rgba(0,0,0,0.8)',
    margin: "10px 0 10px 300px",
  },
  hl:{
    border:"1px solid rgba(0,0,0,0.1)",
    margin:'25px 0 15px 0',
  },
 
  // ----------------------------------------------stepper
  stepperContainer: {
    width: "50%",
    margin: "50px 0px",
    backgroundColor: "white",
    borderRadius: "10px",
    textAlign:'left',
  },
  stepperElement: {
    backgroundColor: "white",
    padding: "12px",
  },
  stepperHeader: {
    padding: "15px 15px 0 30px",
    fontSize: "26px",
    fontWeight: "bold",
  },
  stepperIcon: {
    color: "blue",
    margin: "0 15px 0 0",
  },
  stepperSubHeading: {
    padding: "0 30px",
    fontSize: "27px",
  },
  subscript: {
    padding: "0 0 0 30px",
    margin: "0 0 10px 0",
  },
  stepperPara: {
    padding: "10px 30px 10px 30px",
  },
  tableContainer:{
    width:'80%',
    margin:'30px 0 10px 0',
  },
  buyMoneroTitle:{
    color:'rgba(0,0,0,0.9)',
    fontSize:'34px',
    margin:'20px 0 0 0',
    fontWeight:'bold'
  },
  
}));

export default useStyle;
