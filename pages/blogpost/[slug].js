import React, { useState, useEffect } from 'react'
import styles from '../../styles/BlogPost.module.css'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Slug = ({data,slug}) => {
  const [blog, setBlog] = useState()
  const [loading, setLoading] = useState(false)

 
  useEffect(() => {
    const currentItem = data.find(item =>  item.slug === slug.slug)
    if(!currentItem){
      console.log("no details for this blog")
    }
    setBlog(currentItem)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [data,slug])

  return <div>
    <main className={styles.main}>

      {
        loading ?

          <div className={styles.skelton}> <Stack spacing={2}>
            <Skeleton variant="rectangular" width={300} height={48} />
            <Skeleton variant="text" width={500} />
            <Skeleton variant="text" width={500} />
            <Skeleton variant="text" width={500} />

          </Stack>
          </div>
          :
          <div className={styles.wrapper}>
            <h1>{blog && blog.title}  </h1>
            <p className={styles.p}>{blog && blog.content}</p>
          </div>
      }


    </main>

  </div>

}

export async function getServerSideProps(params) {
  const  slug  = params.query;

  const res = await fetch(`http://localhost:3000/api/blogs?slug=${slug}`)
  const data = await res.json()
  // console.log(data)
  return {
    props: { data,slug },
    // slg:{slug}, // will be passed to the page component as props
  }
}
export default Slug