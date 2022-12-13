import "./Navbar.css"

function Navbar(){
    const links=["Home", "Add Bike", "Edit Bike"];
    return(
        <nav>{links.map((link) => <a href="http://www.adadevelopersacademy.org" className="nav__link">{link}</a>)}</nav>
    )

}

export default Navbar;