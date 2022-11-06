import image from '../images/troll-face-icon-23.jpg'

function Navbar() {
    return (  
        <div className="navbar flex__horizontal background-colour ">
            <div className="header flex__horizontal">
                <img src={image} width='30px' alt="" />
                <h2>Meme Generator</h2>
            </div>
            <p className="p__navbar">React Course - Project 3</p>
        </div>
    );
}

export default Navbar;