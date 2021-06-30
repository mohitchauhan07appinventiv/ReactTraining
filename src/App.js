import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './modules/Assignment12/store/store';
// import Home from "./modules/home"
// import Assign1 from "./modules/Assignment1";
// import Assign2 from './modules/Assignment2';
// import Assign3 from './modules/Assignment3';
// import Assign4 from './modules/Assignment4';
// import Assign5 from './modules/Assignment5';
// import Assign6 from './modules/Assignment6/demo';
// import Assign7_1 from "./modules/Assignment7/FirstTry";
// import Assign7 from './modules/Assignment7/FinalWork';
// import Assign8 from './modules/Assignment8';
// import Assign9 from './modules/Assignment9';
// import Assign11 from './modules/Assignment11';
// import Assign12 from './modules/Assignment12';
import Assign13 from "./modules/Assignment13";

class App extends React.Component {
  render() {
    return (
      <>
      <Provider store ={store}>
        <BrowserRouter> 
          <Assign13 />
        </BrowserRouter>
      </Provider>
      </>
    );
  }
}

export default App;
