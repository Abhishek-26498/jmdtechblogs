import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import swal from 'sweetalert';

const Add = ({ setClose }) => {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [author, setAuthor] = useState();
  const [slug, setSlug] = useState();


  console.log(title)
  console.log(content)
  console.log(author)
  console.log(slug)


  const handleCreate = async (e) => {
    
    e.preventDefault()
    
    
    console.log(title, content, author, slug)

    const data = {title, content, author, slug}
    const { URL } = process.env; 
   await fetch(URL+'/api/blogs ', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    })
    .then(response => response.JSON(data))
    console.log(data)
    .then(data => {
      console.log(data)
      console.log('Success:', data);
      setTitle('')
      setContent('')
      setAuthor('')
      setSlug('')
      swal({
        title: "Created!",
        text: "Your post is created",
        icon: "success",
        button: "ok",
      });
  
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
  }

  const handleChange = (e) => {
    if (e.target.name == 'title') {
      setTitle(e.target.value)
    }
    else if (e.target.name == 'content') {
      setContent(e.target.value)
    }
    else if (e.target.name == 'author') {
      setAuthor(e.target.value)
    }
    else if (e.target.name == 'slug') {
      setSlug(e.target.value)
    }
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Create a New Post</h1>
      
        <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            htmlFor="title"
            className={styles.input}
            type="text"
            onChange={handleChange}
            required="true"
            value={title}
            id="title"
            name = "title"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Content</label>
          <textarea
            htmlFor="content"
            rows={4}
            type="text"
            onChange={handleChange}
            required="true"
            value={content}
            id="content"
            name = "content"
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>author</label>
          <div className={styles.priceContainer}>
            <input
              htmlFor="author"
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              onChange={handleChange}
              required="true"
              value={author}
              id="author"
              name = "author"
            />
            
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Slug</label>
          <div className={styles.extra}>
            <input
              htmlFor="slug"
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              required="true"
              onChange={handleChange}
              value={slug}
              id="slug"
              name = "slug"
            />
            
        
          </div>
          
        </div>
        <button className={styles.addButton} onClick={handleCreate }>
          Create
        </button>
        
      </div>
    </div>
  );
};

export default Add;