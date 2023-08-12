import "./pageStyles/homepage.css"

function Homepage () {

    return (
        <>
        <h1 className="title">Mackenzie Jessup</h1>
        <div className="littletext">
                <h5>MERN Developer</h5>
            </div>
        <div className="boxes">
            <div className="careerGoals">
                <h2>Goals</h2>
                <p>Current: Starting my career as a developer with an entry-level job</p>
                <p>Future: Becoming a worker that is seen as reliable and attentive</p>
            </div>
            <div className="skills">
                <h2>Skills</h2>
                <p>MongoDB, Express.js, Node.js, React.js, HTML/CSS, JavaScript</p>
            </div>
        </div>
        </>
    )
}

export default Homepage