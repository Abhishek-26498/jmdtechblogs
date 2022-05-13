import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Variants from './Skelton'
import Skeleton from '@mui/material/Skeleton';
import AddButton from '../component/AddButton'
import Add from '../component/Add'


export default function Home(props) {
  const [blog, setBlog] = useState(props.data);
  const [loading, setLoading] = useState(false)
  const [close, setClose] = useState(true);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>

        <main className={styles.main}>
          {
            loading ?
              <Variants animation="wave" />
              :
              <div>
                {props.admin && <AddButton setClose={setClose} />}
                <h1 className={styles.title} >
                  JMD Blogspot
                </h1>
                <p className={styles.description}>
                  Welcome to Our Blog Website.
                </p>
                <h1 className={styles.blog}>Popular Blogs</h1>
                <div className={styles.wrapper}>

                  {blog.slice(0, 3).map((blogitem) => {
                    return <div key={blogitem.title}>
                      <Link href={URL+`/blogpost/${blogitem.slug}`} passHref>
                        <h2>{blogitem.title}</h2></Link>
                      <p>{blogitem.content.substr(0, 150)}</p>
                    </div>
                  })}

                </div>
                {!close && <Add setClose={setClose} />}
              </div>
          }
        </main>

      </div>
    </>
  )
}
export async function getServerSideProps(ctx) {
  const myCookie = ctx.req?.cookies || "";
  let admin = false
  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }
  const { URL } = process.env;
  const res = await fetch(URL+'/api/blogs')
  const data = await res.json()
  return {
    props: { data, admin },
  }
}