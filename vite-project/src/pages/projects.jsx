
import './pageStyles/projects.css'
import MazeRecoring from "../components/mazeRecording.mp4"
import ShelfHelpRecording from "../components/Shelf-helpRecording.mp4"
import PigLatinRecording from "../components/PigLatinRecording.mp4"

function Projects () {

    return (
        <>
        <h1 className="atitle">Projects</h1>
        <div className="resumeBoxes">
            <div className="project" id='one'>
                <h2 className='h2'>Maze/Sokoban Game</h2>
                <div>
                <video width="50%" height="50%" controls className='video'>
                    <source src={MazeRecoring} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    <p>
                        A one-person project that was made with HTML, JS, and CSS.
                        <br /> This site contains two games, a maze with three maps and sokoban with two.
                    </p>
                </div>
            </div>
            <div className="project" id='two'>
                <h2 className='h2'>Shelf-Help</h2>
                <video width="70%" height="70%" controls className='video'>
                    <source src={ShelfHelpRecording} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <h4 className='h2'><a target='_blank' rel='noopener noreferrer' href="http://54.81.116.198/" style={{textDecoration:"solid"}}>Capstone Project</a></h4>
                    <p>
                       Worked as backend developer. MERN stack was used for this project.<br /> Shelf-help is a site that allows you to save books you have/want to/or are reading.
                    </p>
                </div>
            </div>
            <div className="project" id='three'>
                <h2 className='h2'>Pig Latin Translator</h2>
                <div id='pigLatin'>
                <video width="47%" height="47%" controls className='video'>
                    <source src={PigLatinRecording} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                    <p className='pigLatinText' style={{marginLeft: "3%"}}>
                        A one-person project made with HTML, CSS, and JS. 
                        <br /> This site translates english to Pig-latin and Pig-latin to english live.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Projects