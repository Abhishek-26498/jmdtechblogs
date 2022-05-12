import dbConnect from '../../../util/mongo'
import Blog from '../../../modals/Blog'

export default async function handler(req, res) {
   const {method,
    query: { id },
} = req;

   dbConnect()

   if (method === "GET"){
        try {
            const blogs = await Blog.findById(id);
            console.log(blogs)
            res.status(200).json(blogs)
        } catch (error) {
            res.status(500).json(error);
        }
   }
   if (method === "PUT"){
       try {
           const blogs = await Blog.create(req.body);
           res.status(201).json(blogs)
       } catch (error) {
           res.status(500).json(error);
       }
   }

   if (method === "DELETE"){
       try {
           
    await Blog.deleteOne(id);
      res.status(200).json({sucess: true});
    } catch (err) {
      res.status(500).json(err);
       }
   }
  }