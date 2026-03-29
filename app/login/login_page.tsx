import { useState } from "react";

export default function login_page(){
    const [count , setCount] = useState(0);
    
    return <div>
        <h1>Login Button press counter :D</h1>
        <button onClick={()=> setCount(count+1)}> + </button>

    </div>
}