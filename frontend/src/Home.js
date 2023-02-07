import './Home.css';


function Home(){
    let data;
    
    fetch('http://localhost:8888/home').then(res =>{
        data = res.json();
    })
    return (
        <div className='homepage'>
            <h1>Welcome {data.body.name} </h1>
        </div>
    )
}

export default Home;