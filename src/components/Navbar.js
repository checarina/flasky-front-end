import "./Navbar.css"

function Navbar(){
    const links=["Home", "Add Bike", "Edit Bike"];
    return(
        <nav>{links.map((link) => <a className="navbar__link" key={link} href="http://www.adadevelopersacademy.org">{link}</a>)}</nav>
    )

}

export default Navbar;