
import './pageStyles/about.css'

import URL from './me.jpg'

function About () {

    return (
        <>
        <h1 className="atitle">About Me</h1>
        <img className='img' src={URL}/>
        <div className="aboutBox">
            <div className="whoAmI">
                <p>I am a October graduate from SNHU's full-stack web development certificate course. I am excited to use what I have learned!</p>
                <p>I'm living in Beaufort, SC. In my freetime I enjoy spending time with my family and pets.</p>
                 
            </div>
        </div>
        </>
    )
}
export default About