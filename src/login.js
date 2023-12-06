import React, { useEffect } from 'react'

function Login(){
    const result = ''
    useEffect(()=>{
        fetch('https://localhost:5000', {
            method: 'POST',
            body: JSON.stringify({
              token: localStorage.getItem('token')
            }),
          })
          .then((res)=>{
            console.log(res);
            result = res.json();
          })
          .catch((err)=>{
            console.log(err);
          })
    });
    return (
        <p>{result}</p>
    )
}

export default Login;