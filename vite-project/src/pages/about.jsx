/*
Aboout me page, will contain info about me and interests and influences/motivations
*/
import './pageStyles/about.css'

import URL from './images/me.jpeg'

function About () {

    return (
        <>
        <h1 className="title">About Me</h1>
        <div className="boxes">
            <div className="whoAmI">
                <p>I am Mackenzie Jessup, I am a full-stack MERN developer.</p>
                <p>I will graduate from Kenzie Academy with a certificate in November, and am excited to start working in this field.</p>
                
            </div>
        </div>
        <img className='img' src={URL}/>
        </>
    )
}
export default About