import "./Header.css"
import image from "../../assets/chef-hat-svgrepo-com.svg"

function Header(){
    return (
        <header>
            <img src={image} alt="Chef Image" />
            <h3>Recipify</h3>
        </header>
    );
};

export default Header;
