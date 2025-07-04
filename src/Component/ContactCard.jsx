import React from 'react'
import {RiEditCircleLine} from 'react-icons/ri'
import {IoMdTrash} from 'react-icons/io'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {db} from '../config/firebase'
import { deleteDoc, doc } from "firebase/firestore";
import AddUpdate from './AddUpdate'
import Hoock from '../Hoock/Hoock'
import { toast } from "react-toastify";


function ContactCard({contact}) {
   const { isOpen, onClose, onOpen } = Hoock();

  const deleteContact = async (id) =>{
try {
  await deleteDoc(doc(db, "contact", id))
  toast.success("Contact Deleted Successfully");
} catch (error) {
  console.log(error);
  
}
  }
  return (
     <>

       <div key={contact.id} className='bg-[#3334338a] flex justify-between items-center p-2 pl-1 rounded-lg'>
           <div className='flex gap-2'>
             <HiOutlineUserCircle className='text-orange text-3xl'/>
            <div className='text-white'>
              <h2 className='font-medium'>{contact.name}</h2>
              <p className='text-sm'>{contact.email}</p>
            </div>
           </div>
            <div className='flex'>
         <RiEditCircleLine onClick={onOpen}
         className='text-white text-2xl cursor-pointer'/>
         <IoMdTrash onClick={() => deleteContact(contact.id)}
         className='text-orange text-2xl cursor-pointer'/>
            </div>
          </div>

          <AddUpdate
          contact={contact}
           isUpdate isOpen={isOpen} onClose={onClose}/>
     </>
        
  )
}

export default ContactCard