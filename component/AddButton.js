import styles from '../styles/AddButton.module.css'

const AddButton = ({setClose}) => {
  return (
    <div onClick={()=>setClose(false)} className={styles.mainAddButton}>New Post</div>
  )
}

export default AddButton