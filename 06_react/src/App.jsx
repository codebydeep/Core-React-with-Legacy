import { useState } from "react";
import { useEffect } from "react";

export function App() {
    const [message, setMessage] = useState("Loading....")
    
    useEffect(() => {
        fetch(`http://localhost:3000/api`)
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch(() => setMessage("Failed to load"))

    }, [])
    return (
        <div>
            <h1>Welcome to ChaiCode</h1>
            <p>Serving Hot Chai With ReactJS</p>
            <h2>{message}</h2>
        </div>
    )
}