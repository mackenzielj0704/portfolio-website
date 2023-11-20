
import './pageStyles/resume.css'

function Resume () {

    return (
        <>
        <h1 className="title"> Resume</h1>
        <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="90%" height="80%" className="pdf">
            <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        </object>
        </>
    )
}
export default Resume