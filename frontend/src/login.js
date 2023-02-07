import './login.css';
import {useState,useEffect} from "react";

function Login(){
    const [data,setdata] = useState({username:"",password:""});
    function handler(e) {
        e.preventDefault();
        setdata({username: e.target.username.value,password: e.target.password.value});
    }
    useEffect(()=>{
        var options = {
                    method: 'post', 
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)}
        fetch("http://localhost:8888/login",options)
        .then(async (response) => await response.json())
        .then((authver) => {
            console.log(authver);
        })
    },[data])
    return (
        <div id='loginpage'>
            <div className='becenter'>
                <h1 style={{color: "white"}}>LOGIN PAGE</h1>
                <form onSubmit={handler} method='post'>
                    <input type="text" name="username" placeholder="Username"/>
                    <br/>
                    <input type="password" name="password" placeholder='Password'/>
                    <br/>
                    <br/>
                    <input type="submit" value="Login" />
                    <br/>
                </form>
            </div>
        </div>
    )
}

export default Login;