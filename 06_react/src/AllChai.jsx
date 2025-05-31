import { useEffect, useState } from "react";

export function ChaiMenu(){
    const [menu, setMenu] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(`/api/all-chai`)
        .then(res => res.json())
        .then(data => setMenu(data))
        .catch(err => setError(err.message))
    }, [])

    return (
        <div>
            <h2>Available Chai</h2>
            <ul>
                {menu.map(chai => (
                    <li key={chai.id}>{chai.name}</li>
                    // Use of Key's - Tracking of Every Elemeny.
                    // Mostly DataBase IDs are used as a Key's.
                    // If -
                    // Key is same - Reuse DOM node
                    // Key is new - Add a new DOM node
                    // Key is missing - Remove the DOM node
                    // When Not having Key's -
                    // Then Some Elements are misbehaving, eg - Buttons are also not working, Input Fields are losing focus.
                ))}
            </ul>
        </div>
    )
}