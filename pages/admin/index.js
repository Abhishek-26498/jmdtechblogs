import axios from 'axios'
import { useState } from 'react'
import styles from '../../styles/Admin.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = ({ blogs }) => {
    const [blog, setBlog] = useState(blogs)
    const handleDelete = async (id) => {
        const { URL } = process.env;
        try {
            const res = await axios.delete(
                URL+ "/api/blogs/" + id)
            setBlog(blog.filter((b) => b._id !== id));
            toast.success("Deleted", {
                position: "top-center"
            });
            console.log(res)
        } catch (err) {
            console.log(err)
            toast.error("Something Wrong!", {
                position: "top-center"
            });
        }
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Blogs</h1>
                    <div className={styles.table}>
                        {blog.map(item => (
                            <div key={item._id}>
                                <div className={styles.wrapper} >
                                    <div className={styles.trTitle}>
                                        <h2>{item.title}</h2>
                                        <p>{item.content.substr(0, 150)}</p>
                                    </div>
                                    <div className={styles.trTitle}>
                                        <button
                                            className={styles.button}
                                            onClick={() => handleDelete(item._id)}
                                        >Delete</button>
                                        <ToastContainer />
                                    </div>

                                </div>
                                <hr />
                            </div>

                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    if (myCookie.token !== process.env.TOKEN) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false,
            },
        }
    }
    const { URL } = process.env;
    const res = await axios.get(URL+"/api/blogs")
    return {
        props: {
            blogs: res.data,
        },
    };
};
export default Index