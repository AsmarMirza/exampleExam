import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Add() {
    async function addMenu(value){
const res=await fetch("http://localhost:3000/ourmenu/",{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify(value)
})
const data=await res.json()

    }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"red",paddingTop:"60px"}}>
           <HelmetProvider>
      <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      </HelmetProvider>
        <Formik
       initialValues={{ name: '', description: '', price: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         description: Yup.string()
           .required('Required'),
         price: Yup.number().required('Required'),
       })}
       onSubmit={(values, { resetForm }) => {
        addMenu(values)
         resetForm()
       }}
     >
       <Form>
         <label htmlFor="name"> Name</label><br />
         <Field name="name" type="text" /><br />
         <ErrorMessage name="name" />
 
         <label htmlFor="description">Description</label><br />
         <Field name="description" type="text" /><br />
         <ErrorMessage name="description" />
 
         <label htmlFor="price">Price</label><br />
         <Field name="price" type="number" /><br />
         <ErrorMessage name="price" />

         <button type="submit">Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add
