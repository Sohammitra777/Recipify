import image from "../assets/chef-hat-svgrepo-com.svg"

function Header(){
    return (
        <header className="p-2 flex justify-center items-center gap-4 bg-white shadow-md shadow-black gorw">
            <img className="w-7 h-10 cursor-pointer" src={image} alt="Chef Image" />
            <h3 className="text-3xl cursor-pointer">Recipify</h3>
        </header>
    );
};

export default Header;
