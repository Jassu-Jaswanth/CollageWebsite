import './Home.css';
import {useState,useEffect} from 'react';
// var utils = require('./utils')

function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

function Home(){
    var [semtables,setsemtabs] = useState([]);
    var [gdata,setgdata] = useState({
        "name"  : "placeHolder",
        "id" : "placeholder",
        "dept_name" : "placeholder",
        "tot_cred" : "placeholder"
    })
    var [cdata,setcdata] = useState([])
    var session_params;
    if("session" in sessionStorage){
        session_params.sessionid =  sessionStorage.getItem("session").sid;
    }
    useEffect(()=>{
        fetch("http://localhost:8888/home",{method:'get',mode:'cors'}).then(async (response)=>{
            let data = await response.json();
            // console.log(data);
            setgdata(data);
        })
    },[])
    
    useEffect(() =>{
        fetch("http://localhost:8888/home/coursedets",{method:'get',mode:'cors'}).then(async (response) =>{
            let data = await response.json();
            // console.log(data);
            setcdata(data);
        })
    },[])

    useEffect(() => {
        console.log(cdata.length)
        if(cdata.length){
            // Adjust data accordingly
            let year = cdata[0].year;
            
            let curr_tab_data = [];
            for (let i = 0; i<cdata.length; i++){
                if(cdata[i].year === year){
                    curr_tab_data.push(cdata[i]);
                } else {
                    semtables.push(
                    <div key={year} id="internalTabs">
                    <table>
                        <colgroup>
                            <col width="20%"/>
                            <col width="60%"/>
                            <col width="20%"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <th>Course Id</th>
                            <th>Course name</th>
                            <th>Credits</th>
                        </tr>
                        {
                            curr_tab_data.map((val, key) => {
                                return (
                                    <tr key={key}>
                                    <td>{val.cid}</td>
                                    <td>{val.cname}</td>
                                    <td>{val.credits}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table></div>);
                    year = cdata[i].year;
                    curr_tab_data = [];
                    curr_tab_data.push(cdata[i]);
                }
            }
            setsemtabs([...semtables,<div key={year} id="internalTabs"><table>
                <colgroup>
                    <col width="20%"/>
                    <col width="60%"/>
                    <col width="20%"/>
                </colgroup>
                <tbody>
                <tr>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                </tr>
                {
                    curr_tab_data.map((val, key) => {
                        return (
                            <tr key={key}>
                            <td>{val.cid}</td>
                            <td>{val.cname}</td>
                            <td>{val.credits}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table></div>]);
        }
    },[cdata])

    return (
        <div className='homepage'>
            <div id='genData'>
                ID : {gdata.id}
                <br/>
                Name : {gdata.name}
                <br/>
                Department : {gdata.dept_name}
                <br/>
                Total Credits : {gdata.tot_cred}
            </div>
            <div>
            </div>
            <div id='semtabs'>
                {semtables}
            </div>
        </div>
    )
}

export default Home;