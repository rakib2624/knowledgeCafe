import profile from "../../assets/images/profile.png"

const Header = () => {
    return (
        <header className="flex justify-between pt-5 pb-5 mb-5 border-b-2 max-w-7xl mx-auto">
            <h1 className='text-6xl font-bold'>Knowledge Cafe Bangladesh</h1>
            <img src={profile}></img>
        </header>
    );
};

export default Header;