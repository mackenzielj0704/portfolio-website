import emailjs from '@emailjs/browser'
import { useState } from 'react'
import './pageStyles/contact.css'

function Contact () {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Mackenzie',
        message: '',
        reply_to: '',
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(toSend)
        emailjs.send(
            'service_8sjcepz',
            'template_vmp8nlb',
            toSend,
            'CdHAPh_awI6c1Pzcr'
          )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
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
                    <input type="text" className="form-control" value={toSend.from_name} onChange={(e) => {
                        setToSend({...toSend, from_name: e.target.value}) 
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={toSend.reply_to} onChange={(e) => {
                        setToSend({...toSend, reply_to: e.target.value}) 
                    }}/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" value={toSend.message} onChange={(e) => {
                        setToSend({...toSend, message: e.target.value}) 
                    }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    </>
)
}
export default Contact