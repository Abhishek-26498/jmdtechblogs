import styles from '../styles/About.module.css'
import ClipLoader from "react-spinners/ClipLoader";
import React,{ useState , useEffect} from 'react'

const About = () => {
  const [loading, setLoading] = useState(false)
useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },500)
},[])
  return (
    <div className={styles.container}>
      <h1>About JMD Techspot</h1>
      {
        loading?
        <ClipLoader color={'#685c4e'} loading={loading} size={50} />
        :
      <div>

      <h2>Introduction</h2>
      <p>Occaecat veniam eu id est aliqua irure duis. Magna incididunt quis nisi est duis. Proident magna commodo quis enim cillum nulla. Ea do ea laborum reprehenderit deserunt adipisicing aute aliquip.</p>

      <p>Adipisicing proident consequat cillum ad sint. Officia cupidatat laboris enim fugiat sunt exercitation anim. Non sit elit Lorem dolore do qui fugiat veniam. Duis qui adipisicing sit aute in cillum esse incididunt.</p>
      <h2>Services</h2>
      <ul>
        <li>Serive 1</li>
        <li>Serive 2</li>
        <li>Serive 3</li>
        <li>Serive 4</li>
        <li>Serive 5</li>
      </ul>

      <p>Culpa irure exercitation dolor ad elit aliquip proident dolore quis. Veniam dolor enim exercitation proident aute anim eu. Anim ipsum culpa fugiat sunt incididunt sunt dolor. Ex do elit consectetur commodo. Labore deserunt duis anim anim.</p>

      <p>Ea aliqua consequat consequat id aliqua sunt consequat. Dolore officia ut aliquip aliquip adipisicing commodo id. Nulla consequat et cupidatat sunt aliquip eu anim. Nostrud ullamco anim aute id deserunt aliqua anim. Cillum enim pariatur sint nisi et fugiat laboris.</p>
      <h2>Contact us</h2>
      <p>Ipsum aliquip consequat labore incididunt nulla et dolore. Deserunt id duis proident nisi elit Lorem. Enim eiusmod duis voluptate ea.</p>
      </div>
 
        }
  </div>
  )
}

export default About