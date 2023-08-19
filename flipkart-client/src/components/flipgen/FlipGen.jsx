import { makeStyles } from '@material-ui/core'
import { green } from '@material-ui/core/colors'
import React from 'react'
import './flipgen.css'
import { Link } from 'react-router-dom'
import SmartToyIcon from '@mui/icons-material/SmartToy';
import botimg from '../../assets/bot2.png'

export default function FlipGen() { 
//   const classes=useStyle()

  return (
    <div className='flipgen-container'>
    <Link to='/bot'>
    {/* <SmartToyIcon /> */}
    <img src={botimg} style={{heigth: '60px',width:'60px',backgroundImage:'none'}}/>
      FlipGen
    </Link>
    </div>
  )
}
