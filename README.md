Blog website progress:

##Day 1
 Implemented Vite + React Js + Tailwind in front end also installed few packages such as React Router, React Icons.
 Big life saver was Flowbite React which is UI Component library. Using Flowbite React library, I was able to implement Navigation bar,
 form, search bar, and buttons very easily. Also it is user friendly and easy to modify the size by TailwindCss

 Implemented Express Js, MongoDB in back end and also installed few packages such as Nodemon.
 I finished the part about user modal via MongoDb. Adding controller.js as async function and connect it to the routes is more clean
 way to write backend code. Signing up and authorization part is working with bscryptjs (password is hashed) and you can see it on 
 MongoDB database.
 Also Middleware error handle was implemented so in that way you can debug and track your code more efficently. 

 Jumped back to the front end. Navigation bar is done. all routes of front end works fine. Search bar doesn't work but will get it done 
 after Redux toolkit is implemented. Signing up section is in progress. There is little bug when it gets seen by big screen, Sign Up form
 look small. And it is not connected to the backend yet. 


##Day 2 

  Implemented Footer for the client website. This Flowbite UI component is super strong, so you can just calls like Footer.Collapse Footer.Link etc and it works perfectly.
  Also connected Sign up and Sign in from back end to the front end. It works fine.
  In Sign In part I used JWT Web token for authentication part and it would find email that matches you account then compare your bscryptjs hashed password with your account password if its true it will generate token from jwt and you'll get to access to the website with your login info. 
  
  Client side of Sign in component is pretty similar as sign up components. 

##Day 3

  Implemented Redux toolkit (Global state management) and used redux persist (will keep your information
  in your localstorage) to keep our login information even after website refreshes, it will remain logs in. With help of Redux toolkit I don't have to use useState instead I initialized global state management so I it can be controlled easily and globally. 
  

 ##Day 4

  Made dashboard in private. If not signed in user try to access to the dashboard componant it will not work. Used PrivateRoute.jsx and wrapped Dashboard components on it.