import './Navbar.css'

function NavBar({how, Report}){

    function routeHome(){
        how(false);
        Report(false);
    }
    function routeHow(){
        how(true);
        Report(false);
    }

    function routeReport(){
        how(false);
        Report(true);
    }

    return (
        <div className="navbar">
            <div className = "nave">
                <button className = "navel" onClick={ e =>  routeHome()} > <b> Home </b> </button>
            </div>
            <div className = "nave">
                <button  className = "navel" onClick={ e => routeHow()}> <b> How to Use? </b> </button>
            </div>
            <div className = "naver">
                <button  className = "navelright" onClick={ e => routeReport()}> <b> Report </b> </button>
            </div>
        </div>
    );

}

export default NavBar;