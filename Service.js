import React,{useState,useEffect} from "react";
import "./Api..css";
export default function Service(){
    const[Data,setdata]=useState([])
    const[city,setcity]=useState("")
    const[message,setmessage]=useState("")
    // const[filter,setfilter]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res=>res.json())
        .then(data=>{
            setdata(data)

        })
    },[]);
    function entrecity(e){
        setcity(e.target.value)
    }
    return(
        <div>
        <fieldset style={{textAlign:'center',width:'400px',marginLeft:'150px',marginTop:'150px'}}>
        <h1>Recherche city:</h1>
        <label style={{color:'red'}}>Entrer le nom du city:</label><br></br>
        <input type="text" onChange={entrecity}  value={city}></input><br></br><br></br>
        <button style={{backgroundColor:'red'}} onClick={setmessage}>chercher</button>
        {message ? (
  <>
    <h1>Resultat:</h1>
    <ul>
      {Data.filter(user => user.address.city.toLowerCase().includes(city.toLowerCase()))
        .map(Data => (
            <>
          <li style={{color:'red'}}>Name :{Data.name}</li>
          <li style={{color:'red'}}>Username:{Data.username}</li>
          </> 
        ))}
    </ul>
    {Data.filter(user => user.address.city.toLowerCase().includes(city.toLowerCase())).length === 0 ?(
              <p>City not found</p>
            ):null}
  </>

):null}
</fieldset>
        </div>
    )
}