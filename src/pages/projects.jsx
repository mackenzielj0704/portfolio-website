
import './pageStyles/projects.css'

function Projects () {

    return (
        <>
        <h1 className="atitle">Projects</h1>
        <div className="resumeBoxes">
            <div className="project" id='one'>
                <h2 className='h2'>Maze/Sokoban Game</h2>
                <div>
                <iframe width="50%" height="50%" src="https://youtube.com/embed/7fcBXATiO2k" id='mazeV'/>
                    <p>
                        A one-person project that was made with HTML, JS, and CSS.
                        <br /> This site contains two games, a maze with three maps and sokoban with two.
                    </p>
                </div>
            </div>
            <div className="project" id='two'>
                <h2 className='h2'>Shelf-Help</h2>
                <iframe width="70%" height="70%" src="https://youtube.com/embed/IqP3iQPvBsE" id='shelfV'/>
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
                <iframe width="47%" height="47%" src="https://youtube.com/embed/64hu596Barc" id='pigV'/>
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