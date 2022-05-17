
import styles from '../styles/Blog.module.css'
import Link from "next/link"
import ClipLoader from "react-spinners/ClipLoader";
import React, { useState, useEffect } from 'react'

const Blog = (props) => {
  const [blog, setBlog] = useState(props.data);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <div>
      <main className={styles.main}>
        {
          loading ?
            <ClipLoader color={'#685c4e'} loading={loading} size={50} />
            :
            <div>
              {blog.map((blogitem) => {
                return (
                <div key={blogitem.title}>
                  <Link href={URL+`/blogpost/${blogitem.slug}`} passHref>
                    <h2>{blogitem.title} </h2></Link>
                  <p>{blogitem.content.substr(0, 150)}</p>
                </div>
                )})}
            </div>
        }
      </main>
    </div>
  )
}
export async function getServerSideProps(context) {
  const { URL } = process.env;
  const res = await fetch(URL+'/api/blogs')
  const data = await res.json()
  return {
    props: { data }, // will be passed to the page component as props
  }
}
export default Blog