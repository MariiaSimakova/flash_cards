import '../Page404/page404.css'
import img from '../Page404/404.gif' 

function Page404 () {
    return (
        <div className="page404__wrapper">
            <p className="page404__title">Sorry, this page doesn't exist.</p>
            <img src={img} alt="Page not found" />
        </div>
    )
}

export default Page404;