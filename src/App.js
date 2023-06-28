import { useState } from "react";
import Auth from "./Auth.jsx"
import Chat from "./Chat.jsx";

const App = () => {
  const [auth,setAuth] = useState(null)
  return <>
    {
      auth == null ? <Auth onAuth={(user)=>setAuth(user)} />  : <Chat user={auth} />
    }
      
    </>
  
};

export default App;
