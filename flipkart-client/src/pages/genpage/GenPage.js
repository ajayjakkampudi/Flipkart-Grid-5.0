import { Button, CircularProgress, FormControl, LinearProgress, OutlinedInput} from '@material-ui/core';
import React, { useState } from 'react'
import './GenPage.css'



export default function GenPage() {

  const [value,setValue] = useState("")  
  const [loading,setLoading] = useState(false)  
//   console.log(value)
  async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.blob();
	return result;
  }

  const handleClick=async ()=>{
     setLoading(true)
     const loaderDiv = document.querySelector('.loader');
     const myImageElement = loaderDiv.querySelector('#myImage');
     if(myImageElement){
         myImageElement.remove();
     }
     const res=await query(value);
    //  console.log(res);
    setLoading(false)
    const imgElement = document.createElement("img");
    imgElement.id = "myImage";
    imgElement.src = URL.createObjectURL(res);
    loaderDiv.appendChild(imgElement);
    setValue("")
     console.log(value)
  } 

  return (
    <div className='genpage-container'>
        <h1 className='genpage-header'>
            Hi! Welcome to FlipGen 
        </h1>
        <h1 className='genpage-header'>
            Modern Custom Outfit Generator 
        </h1>
        <div className='dialog-input'>
            <FormControl className='dialog-text'>
                <OutlinedInput placeholder={"Enter outfit description"} value={value} onChange={(e)=>setValue(e.target.value)}/>
            </FormControl>
            <Button onClick={handleClick} className='dialog-btn' variant="contained" disabled={loading}>generate</Button>
        </div>
        <div className='loader'>
        {loading?<CircularProgress size={80}/>:<div></div>}
        </div>
    </div>
  )
}
