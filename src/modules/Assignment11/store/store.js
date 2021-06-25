import { applyMiddleware,compose,createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../rootReducer";

const logger=createLogger()

const multipleMiddleWares=applyMiddleware(compose(thunk,logger))

 const store=createStore(rootReducer,multipleMiddleWares)

 export default store