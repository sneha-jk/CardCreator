//import { lightBlue } from "@mui/material/colors";
import React, { useState } from "react";
import './Card.css'

function Creator(){

    const[inputarr,setinputarr]=useState([])
    const [input,setinput]=useState({name:"",mail:"",number:"",image:""})
    
    function changehandle(e){
        setinput({...input,[e.target.name]:e.target.value}) 
         console.log(input)
    }

    let {name,mail,number,image} = input;

    function click(e){
        e.preventDefault();
        setinputarr([...inputarr,{name,mail,number,image}]);
        console.log(inputarr);
        console.log(input);
    }

    function deleteChange(i){
        inputarr.splice(i,1);
        setinputarr([...inputarr]);
    }

    return(
        <div>
            <h1>Card Creator</h1>
            <form>
            <h5>Please enter your name</h5>
            <input type="text" name='name' value={input.name} onChange={changehandle}/><br/>
            <h5>Please enter your email</h5>
            <input className="inputfield" type="text" name='mail' value={input.mail} onChange={changehandle} /><br/>
            <h5>Enter your contact number</h5>
            <input type="text" name='number' value={input.number} onChange={changehandle}/><br/>
            <h5>Paste your profile picture URL</h5>
            <input className="inputfield" type="text" name="image" value={input.image} onChange={changehandle}/><br/><br/>
            <button onClick={click}>Create Card</button>
            </form>
            <div>
            {
                inputarr.map((info,ind)=>{
                    return(
                        <div key={ind} className="card">
                           <b>Name:</b> {info.name}<br></br>
                           <b>Mail:</b> {info.mail}<br></br>
                           <b>Number:</b> {info.number}<br></br>
                           <b>Image:</b><br></br><img src ={info.image} alt="profilepic"/>
                           <button onClick={()=>deleteChange(ind)} className="delbtn">Delete</button>
                        </div>
                    );
                })
            }
            
            </div>

        </div>
    );
}

export default Creator;