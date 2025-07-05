
import Modle from './Modle'
import { ErrorMessage, Field, Form, Formik } from "formik";
import {db} from '../Config/Firebase'
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});



function AddUpdate({isOpen, onClose, isUpdate, contact}) {
const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.log(error);
    }
}

const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };



    

  return (
    <div>
<Modle
 isOpen={isOpen}
 onClose={onClose}
>
  <Formik
  validationSchema={contactSchemaValidation}
  initialValues={ isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }

}  
   onSubmit={(values) => {
            console.log(values);
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
  >
<Form className='flex flex-col gap-4 text-white'>
  <div className='flex flex-col gap-1 '>
    <label htmlFor="Name">Enter Name</label>
  <Field name="name"  placeholder="Enter your full Name " className="border border-white rounded-lg p-1 outline text-black"/>
  <div className='text-red-600 text-sm'>
    <ErrorMessage name='name'/>
  </div>
  </div>
  <div className='flex flex-col gap-1 '>
    <label htmlFor="Email">Enter Email</label>
  <Field name="email"  placeholder="Enter your Email " className="border border-white rounded-lg p-1.5 outline text-black"/>
   <div className='text-red-600 text-sm'>
    <ErrorMessage name='email'/>
  </div>
  </div>
  <button className='self-end border border-green-400 px-3 py-1 bg-green-600 rounded-xl cursor-pointer 
  hover:bg-green-700 hover:border-green-500 hover:scale-105 transition-transform duration-200'>
  {isUpdate ? "Update" : "Add"} Contact
</button>
</Form>
  </Formik>
</Modle>
    </div>
  )
}

export default AddUpdate