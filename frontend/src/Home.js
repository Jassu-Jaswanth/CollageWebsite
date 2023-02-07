import './Home.css';
import {useState,useEffect} from 'react'


function Home(){
    var [data,setData] = useState("stranger");

    useEffect(() => {
        setTimeout(() => {
            setData("jazzy");
        },2000)
    },[data]);
    // fetch('http://localhost:8888/home').then(res =>{
    //     data = res.json();
    // })
    return (
        <div className='homepage'>
            <h1>Welcome {data} </h1>
        </div>
    )
}

export default Home;