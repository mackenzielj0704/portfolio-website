
import { useState } from 'react'
import './pageStyles/contact.css'
import { Link } from "react-router-dom"

function Contact () {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        return console.log(name, email, message)
    }

return (
    <>
        <h1 className="title">Contacts</h1>
        <h4 className="link">
            LinkedIn: <a style={{textDecoration:"solid"}} target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/mackenzie-jessup-527198278">Mackenzie Jessup</a>
        </h4>
        <div className='form'>
            <h3>Email Me</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
)
}
export default Contact