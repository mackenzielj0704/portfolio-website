import URL from "./Jessup_Mackenzie_Resume.docx.pdf"
import './pageStyles/resume.css'

function Resume () {

    return (
        <>
        <h1 className="atitle">Resume</h1>
        <object data={URL} type="application/pdf" width="90%" height="80%" className="pdf">
            <p><a href={URL}>Link to Resume</a></p>
        </object>
        </>
    )
}
export default Resume