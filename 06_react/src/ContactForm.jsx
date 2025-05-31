import React, { useState } from "react";
import { useContactForm } from "./Hooks/useContactForm";

function ContactForm() {
    const [form, setForm] = useState({name:"", email:"", message:""})
    const {loading, submitContact, successMessage, errorMessage} = useContactForm()
    
    const handleChange = (e) => {
        setForm({...form,[e.target]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            Contact Form
            <form onSubmit={handleSubmit}>
                <input 
                name="name"
                value={form.name}
                onChange={handleChange} 
                placeholder="Your Name"
                />
                <email 
                name="email"
                value={form.email}
                onChange={handleChange} 
                placeholder="Your Email"
                />
                <textarea 
                name="message"
                value={form.message}
                onChange={handleChange} 
                placeholder="Your Message"
                />
                <button type="submit" disabled={loading}>
                    // Conditional Rendering
                    {loading ? "Sending...." : "Send"}
                </button>
            </form>
            {successMessage && <p>{successMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}