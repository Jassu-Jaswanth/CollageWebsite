import './login.css';
import {useState,useEffect} from "react";
import { Navigate } from "react-router-dom";

function Login(){
    const [data,setdata] = useState({username:"",password:""});
    const [isloggedin,setloggedin] = useState(false);
    function handler(e) {
        e.preventDefault();
        setdata({username: e.target.username.value,password: e.target.password.value});
    }
    useEffect(()=>{
        if(data.username && data.password){
            // console.log(data.username + " : " + data.password);
            var options = {
                        method: 'post', 
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)}
            fetch("http://localhost:8888/login",options)
            .then(async (response) => {
                var session = await response.json()
                console.log(session);
                if(session.userid){
                    sessionStorage.setItem("session",JSON.stringify(session));
                    setloggedin(true);
                } else {
                    setloggedin(false);
                }
            })
        } else {
            // do nothing
            console.log("Enter username and password");
        }
    },[data])
    if(isloggedin){
        // setloggedin(false);
        return (
            <Navigate replace to="/home" />
        )
    } else {
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
}

export default Login;