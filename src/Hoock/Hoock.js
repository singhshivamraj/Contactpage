import React from 'react'
import { useState } from 'react'

const Hoock = () =>{
  
    const [isOpen, setOpen]  = useState(false)
     const onOpen = () =>{
      console.log("clicked")
      // setOpen(true)
      setOpen(true)
     }
     const onClose = () =>{
      setOpen(false)
     }
    
  
  return {onOpen, onClose, isOpen}
}

export default Hoock