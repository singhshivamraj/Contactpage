import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar'
import {FiSearch} from 'react-icons/fi'
import {TbCirclePlusFilled} from 'react-icons/tb'
import {collection, doc, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from "./Config/Firebase";
import {HiOutlineUserCircle} from 'react-icons/hi'
import {RiEditCircleLine} from 'react-icons/ri'
import {IoMdTrash} from 'react-icons/io'
import ContactCard from './Component/ContactCard'
import Modle from './Component/Modle'
import AddUpdate from './Component/AddUpdate'
import Hoock from './Hoock/Hoock'

  import { ToastContainer, toast } from 'react-toastify';
import NotfondContact from './Component/NotfondContact'
  // import 'react-toastify/dist/reactToastify.css'

function App() {
 const [contact, setContact] = useState([]);
  const { isOpen, onClose, onOpen } = Hoock();
 
 useEffect(() =>{
const getContact = async () =>{
try{
  const contactRef = collection(db, "contact");
  // const contactSnapshort = await getDocs(contactRef)
  
 onSnapshot(contactRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContact(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
}
getContact()
 }, [])


 const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contact");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContact(filteredContacts);

      return filteredContacts;
    });
  };


  return (
    <>
    
  
     
     <div className='mx-auto max-w-[370px] px-4'>

      <Navbar/>
     <div className='flex gap-2'>
       <div className='flex relative items-center flex-grow '>
      <FiSearch className='text-xl text-white absolute right-2 ml-2  '/>
        <input onChange={filterContacts} type="text" name="" id=""  className='bg-transparent border border-white h-10 rounded-md flex-grow p-2 outline-transparent text-white' placeholder='Enter your text here'/>
      </div>
      
        <TbCirclePlusFilled onClick={onOpen}  className='text-4xl text-green-500 cursor-pointer hover:border-green-500 hover:scale-105 transition-transform duration-100  '/>
      
     </div>
     <div className='mt-4 gap-3 flex flex-col'>
      {
       contact.length <= 0 ? <NotfondContact/> : contact.map((contact) => (
        <ContactCard  key={contact.id} contact={contact}/>
        ))
      }
     </div>
     </div>
<AddUpdate 
 onClose={onClose}
isOpen={isOpen}
/>
<ToastContainer position='bottom-center'/>

    </>
  )
}

export default App
