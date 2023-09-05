import React,{useState} from 'react'
import { Button} from '@mui/material'

const InputField = ({onDataUpdate}) => {
    //const [show,setShow]=useState(0);
    const [data,setdata]=useState(0);
    const handleChange=(e)=>{
        setdata(e.target.value) ;
       }
      const handleClick=(e)=>{
       //setShow(data)
       onDataUpdate(data)
      }
  return (
    <>
    <div>InputField</div>
      <input type="text" onChange={handleChange} />
      <Button onClick={handleClick} >Show</Button>
      </>
  )
}

export default InputField