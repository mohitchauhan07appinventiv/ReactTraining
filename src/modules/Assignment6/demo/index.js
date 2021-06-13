import React,{useState} from 'react';
import useStyle from './style';
import Login from './LoginPage';
import SignUp from './SignUpPage';
import MoviePage from './MoviePage';


export default function HomePage(){
    const classes = useStyle();

    const [loginPage, setLogin]=useState(true);
    const [signUpPage, setSignUp]=useState(false);
    const [moviePage, setMoviePage]=useState(false);

    const loginPageOn =() =>{
        setSignUp(false);
        setLogin(true);
    }
    const signUpPageOn=() => {
        setLogin(false);
        setSignUp(true);
    }
    const moviePageOn = () => {
        setLogin(false);
        setSignUp(false);
        setMoviePage(true);
    }
    
    return(
        <>
        <div className={classes.mainWrapper}>
            {signUpPage && <SignUp render={loginPageOn}/>}
            {loginPage && <Login render={signUpPageOn} renderToMovie={moviePageOn}/>}
            {moviePage && <MoviePage />}
        </div>
        </>
    );
}