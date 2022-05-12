
import cookie from "cookie";

const handler = (req, res) => {
  // console.log(req)
  // res.status(200).json({name:"abhishek"})
  if (req.method === "POST") {
   
    const { username, password } = req.body;
    console.log(req.body)
 
console.log( process.env.ADMIN_USERNAME)
console.log( process.env.ADMIN_PASSWORD)
    // const pswd = process.env.ADMIN_PASSWORD;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
        
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      
      res.status(200).json("Succesfull");

    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
};

export default handler;