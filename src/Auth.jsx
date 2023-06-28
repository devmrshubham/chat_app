import  { useRef } from "react";
import axios from "axios";

const Auth = ({ onAuth }) => {
    const inputRef = useRef()
    const AuthUser = (e) =>{
        const userName = inputRef.current.value;
      
       
        axios.put("https://api.chatengine.io/users/",
        {
            username : userName,
            secret :userName

        },
        {
            headers:{
            "PRIVATE-KEY": "7cbefd54-a4cf-414d-afb8-574fcef3482a"

            }
        }).then(
            (success) =>{
              console.log(success.data)
                onAuth(success.data)

            }
        ).catch(
            (error)=>{
                console.log(error)

            }
        )
      
       


    }
  return (
    <div className="Auth-container">
      <div className="Auth-box">
        <h1>Welcome</h1>
        <span>Inter Your Name</span>
        <input type="text" placeholder="" ref={inputRef} />
        <button onClick={AuthUser}>Get</button>
      </div>
    </div>
  );
};

export default Auth;
