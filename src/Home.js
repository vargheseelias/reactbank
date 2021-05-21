import './Home.css'
import { Deposit } from "./Deposit";
import { Withdraw } from "./Withdraw";
function Home() {
    return (
        <div className="container">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" appHighlight href="#">SBI</a> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" appHighlight aria-current="page" href="#">Home</a> */}
                            </li>
                        </ul>
                        <span className="navbar-text p-3">  </span>
                        <span className="navbar-text p-3">  </span>

                    </div>
                </div>
            </nav>

            <div className="row text-center">
                <div >
                    <Deposit />

                    <div className="row text-center">
                        <div className="gap">
                            <Withdraw />
                        </div >
                    </div >

                </div >
            </div >
        </div>


    );
}
export default Home