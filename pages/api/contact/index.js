import dbConnect from '../../../util/mongo'

import Contact from '../../../modals/Contact'


export default async function handler(req, res) {
  const {method} = req;
 
  dbConnect()
  

  if (method === "GET"){
       try {
           const contacts = await Contact.find()
           res.status(200).json(contacts)
       } catch (error) {
           res.status(500).json(error);
       }
  }
  if (method === "POST"){
      try {
          const contact = await Contact.create(req.body);
      
          res.status(201).json(contact)
          console.log(contact)
      } catch (error) {
          res.status(500).json(error);
      }
  }
 }






// export default async function handler(req, res) {
//   if (method === "POST"){
//     try {
//         const blog = await Blog.create(req.body);
//         console.log(blog)
//         res.status(201).json(blog)
//         console.log(blog)
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }
//   }