import dbConnect from '../../../util/mongo'
import Blog from '../../../modals/Blog'

export default async function handler(req, res) {
  const {method} = req;

  dbConnect()

  if (method === "GET"){
       try {
           const blogs = await Blog.find()
           res.status(200).json(blogs)
       } catch (error) {
           res.status(500).json(error);
       }
  }
  if (method === "POST"){
      try {
          const blog = await Blog.create(req.body);
          console.log(blog)
          res.status(201).json(blog)
          console.log(blog)
      } catch (error) {
          res.status(500).json(error);
      }
  }
  if (method === "DELETE"){
    try {
        
   await Blog.findByIdAndDelete(id);
   res.status(200).json("The product has been deleted!");
 } catch (err) {
   res.status(500).json(err);
    }
}
 }









// import * as fs from 'fs';

// export default async function handler(req, res) {
//   const data= await fs.promises.readdir('blogdata' )
// let myfile;
// let allblogs=[];
//     for (let index = 0; index < data.length; index++) {
//       const item = data[index];
//       myfile= await fs.promises.readFile(('blogdata/'+item), 'utf-8')
//       allblogs.push(JSON.parse(myfile))
      
//     }
//   res.status(200).json(allblogs)
//   }
 

