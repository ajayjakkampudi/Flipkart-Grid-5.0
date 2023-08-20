import { Button, CircularProgress, FormControl, OutlinedInput} from '@material-ui/core';
import React, { useState } from 'react'
import './GenPage.css'
import { query } from '../../api';

const recomendData1=['Men Solid Round Neck Pure Cotton Green T-Shirt', 'Men Solid Silk Blend Straight Kurta', 'Men Striped Round Neck Cotton Blend Maroon, White T-Shirt', 'Men Suit Textured Suit', 'WROGN Zero Men Printed Crew Neck Cotton Blend Black T-Shirt',]
const recomendData2=['Women Solid Round Neck Pure Cotton Green T-Shirt', 'Women Solid Silk Blend Straight Kurta', 'Women Striped Round Neck Cotton Blend Maroon, White T-Shirt', 'Women Suit Textured Suit', 'WROGN Zero Women Printed Crew Neck Cotton Blend Black T-Shirt',]

export default function GenPage() {

  const [value,setValue] = useState("")  
  const [loading,setLoading] = useState(false)  
  const [pos,setPos]=useState('6')
  let recomendImgUrl=[]

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
    // console.log(imgElement.src)
    loaderDiv.appendChild(imgElement);
    const pat=/women/i
    //  console.log(value.match(pat))
    if(value.match(pat)!=null)
    setPos(value.match(pat)['index']);
    else setPos(null)
    setValue("")
    // console.log(pos)
  } 


  const handleRecomend=async ()=>{
    console.log(pos)
    let recomendData=recomendData2
    if(pos==-1 || pos==null) recomendData=recomendData1
    const recomendBlob=await Promise.all(recomendData.map((data)=>query(data)))
    //  recomendImgUrl=[]
     recomendImgUrl=await Promise.all(recomendBlob.map((data)=>{
         const url=URL.createObjectURL(data)
         return url
     }))
    //  console.log(recomendImgUrl)
    
    const loaderDiv = document.querySelector('.genpage-recomend');
    let myImageElement = loaderDiv.querySelector('#myImage1');
    while(myImageElement){
        myImageElement.remove();
        myImageElement = loaderDiv.querySelector('#myImage1');
    }

    recomendImgUrl.map((data)=>{
      const loaderDiv = document.querySelector('.genpage-recomend');
      const imgElement = document.createElement("img");
      imgElement.id = "myImage1";
      imgElement.src = data;
      //  console.log(imgElement.src)
      loaderDiv.appendChild(imgElement);
    })

    const targetDivPos=loaderDiv.offsetTop;
    window.scrollTo({
      top: targetDivPos,
      behavior: 'smooth' 
    });

  }

  return (
    <div className='genpage-container'>
        <h1 className='genpage-header'>
            <span id='header1'>Flip</span>
            <span id='header2'>Gen</span> 
        </h1>
        <p className='genpage-desc'>
            Modern Custom Outfit Generator 
        </p>
        <div className='dialog-input'>
            <FormControl className='dialog-text'>
                <OutlinedInput placeholder={"Enter outfit description"} value={value} onChange={(e)=>setValue(e.target.value)}/>
            </FormControl>
            <Button onClick={handleClick} className='dialog-btn' variant="contained" disabled={loading} color='primary'>generate</Button>
        </div>
        <div className='loader'>
        {loading?<CircularProgress size={80}/>:<div></div>}
        </div>
        <Button onClick={handleRecomend} variant="contained" disabled={loading} color='primary'>More Recommendations</Button>
        <div className='genpage-recomend'></div>
    </div>
  )
}
