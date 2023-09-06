import React,{useState} from 'react'
import { Button} from '@mui/material'

const InputField = ({onDataUpdate}) => {
    const [data,setdata]=useState(0);
    const handleChange=(e)=>{
        setdata(e.target.value) ;
       }
      const handleClick=(e)=>{
       onDataUpdate(data)
      }
  return (
    <>
      <input type="text" onChange={handleChange} />
      <Button variant="outlined" onClick={handleClick} >Show</Button>
      </>
  )
}

export default InputField