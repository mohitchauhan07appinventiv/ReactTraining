import React from 'react'
import LoginPage from './components/LoginPage';
import useStyle from './components/style';
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Redirect
} from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import ProductDetailPage from './components/ProductDetailPage';

function PrivateRouting(props){
    if(localStorage.getItem('access_token')==null){
       
        return(
            <Redirect to='/' />
        )       
    }else{
    
        return(
            <Route {...props} />
        )
    }
}


function Assignemnt9() {
    const classes = useStyle();
    return (
        <>
        <Router>
         <div className={classes.mainContainer}>
             <Switch>
                 <PrivateRouting path={'/dashboard'} component={DashboardPage} exact />
                 <PrivateRouting path={'/dashboard/product/:id'} component={ProductDetailPage} exact />
                 <Route path={'/'} component={LoginPage}/>
             </Switch>
         </div>
        </Router>
        </>
    )
}

export default Assignemnt9;
