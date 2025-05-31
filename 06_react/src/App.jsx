import { useState } from "react";
import { useEffect } from "react";
import { ChaiMenu } from "./AllChai";
import { useSpecialChai } from "./Hooks/useSpecialChai";

export function App() {
    const [chai, loading, error] = useSpecialChai()
    const [message, setMessage] = useState(1)
    
    useEffect(() => {
        fetch(`http://localhost:3000/api`)
        .then((res) => res.json())
        .then((data) => setMessage(data.message))
        .catch(() => setMessage("Failed to load"))

    }, []);
    
    // setMessage(prev => prev + 1)

    // Conditional Rendering -
    if(loading) return <h2>loading....</h2>
    if(error) return <h2>Error: {error}</h2>

    return (
        <div>
            <h1>Welcome to ChaiCode</h1>
            <p>Serving Hot Chai With ReactJS</p>
            <h2>{message}</h2>
            <ChaiMenu/>
            <h3>{chai.name}</h3>
        </div>
    )
}