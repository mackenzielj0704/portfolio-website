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

    const [submit, hasSubmit] = useState(false)

    function Submitted () {
        if (submit === true) {
            return <p>Thank you! I will respond as soon as I can.</p>
        } else if (toSend.from_name === '' || toSend.message === '' || toSend.reply_to === ''){
            return <p className='pleaseFill'>Please fill out all inputs.</p>
        } else {
            return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(toSend)
        if (toSend.from_name !== '' && toSend.message !== '' && toSend.reply_to !== ''){
            emailjs.send(
            'service_8sjcepz',
            'template_vmp8nlb',
            toSend,
            'CdHAPh_awI6c1Pzcr'
          )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                hasSubmit(true)
            })
            .catch((err) => {
                console.log('FAILED...', err);
                hasSubmit(false)
            })
        } else {
            console.log('FAILED...');
            hasSubmit(false)
        }
    }

    return (
        <>
            <h1 className="atitle">Contacts</h1>
            <h4 className="link">
                LinkedIn: <a style={{textDecoration:"solid"}} target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/mackenzie-jessup-527198278">Mackenzie Jessup</a>
            </h4>
            <div className='form'>
                <h3 id='emailMe'>Email Me</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" id='nameLabel'>Name</label>
                        <input type="text" id="name" className="form-control" value={toSend.from_name} autoComplete="given-name" onChange={(e) => {
                            setToSend({...toSend, from_name: e.target.value}) 
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" id='emailLabel'>Email address</label>
                        <input type="email" id='email' autoComplete="email" className="form-control" aria-describedby="emailHelp" value={toSend.reply_to} onChange={(e) => {
                            setToSend({...toSend, reply_to: e.target.value}) 
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" id='messageLabel'>Message</label>
                        <textarea id='message' className="form-control" rows="5" value={toSend.message} onChange={(e) => {
                            setToSend({...toSend, message: e.target.value}) 
                        }}></textarea>
                    </div>
                    <button type="submit" disabled={submit} className="btn btn-primary" id='button'>Send</button>
                    <Submitted />
                </form>
            </div>
        </>
    )
}
export default Contact