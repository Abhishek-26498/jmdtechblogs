import { useState,useEffect } from 'react'
import styles from '../styles/Contact.module.css'
import Button from '@mui/material/Button';
import ClipLoader from "react-spinners/ClipLoader";
import swal from 'sweetalert';
import emailjs from 'emailjs-com'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  const handleSubmit = (e) => {
   
    e.preventDefault()
    
    emailjs.sendForm('service_999rr0b',
    'template_mrfk287',
    e.target,
    'Ey1_bNAVtEO9JAo7Q').then((res)=>{
      console.log(res);
     
      
    }).catch((err)=>console.log(err))



    console.log(phone, name, phone, message)

    const data = {phone, name, email, message}

    fetch('http://localhost:3000/api/contact ', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
      swal({
        title: "Submitted!",
        text: "Thanks for sharing your concern!",
        icon: "success",
        button: "cancel",
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }
  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'message') {
      setMessage(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Contact Us</h1>
      {
          loading ?
            <ClipLoader display={'flex'} justify-conyent={'center'} align-item={'center'} color={'#685c4e'} loading={loading} size={50} />
            :
      <div>
      <form onSubmit={handleSubmit}  >
        <div >
          <label htmlFor="name" className="form-label">Name</label>
          <input  required="true" type="text" value={name} onChange={handleChange} className={styles.inputs} id="name" name='name' />

        </div>
        <div >
          <label htmlFor="email" className="form-label">Email address</label>
          <input  required="true" type="email" className={styles.inputs} onChange={handleChange} value={email} id="email" name='email' />
          <div className={styles.formtext}>{"We'll never share your email with anyone else."}</div>
        </div>
        <div >
          <label htmlFor="phone" className="form-label">Phone</label>
          <input  required="true" type="phone" className={styles.inputs} onChange={handleChange} value={phone} id="phone" name='phone' />
        </div>
        <div >
          <label htmlFor="message">Message</label>
          <textarea  required="true" value={message} className={styles.inputs} onChange={handleChange} id="message" name='message' />

        </div>
        <Button variant="contained" color="success" type="submit" >Submit</Button>
      </form>
      </div>
      }
   
    </div>
  )
}

export default Contact