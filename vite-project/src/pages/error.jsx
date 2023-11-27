import { Link } from "react-router-dom"
import Background from "../components/background"

function ErrorPage() {


    return (
        <>
            <Background/>
            <Link to='/' className="nav-link">Return Home</Link>
        </>
    )
}
export default ErrorPage