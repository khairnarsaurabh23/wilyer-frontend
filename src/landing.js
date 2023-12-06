import React,{useEffect} from 'react';
import Login from './login';

function Landing(){
    useEffect(()=>{
        fetch('https://localhost:5000/')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            localStorage.setItem('token',`${res.data.token}`)
        })
        .catch((err)=>{
            //error handling can be done more elegantly
            console.log(err);
        })
    });

    return(
        <>
        <p>{localStorage.getItem('token')}</p>
        <Login />
        </>
    );
}

export default Landing;