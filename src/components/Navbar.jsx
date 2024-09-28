export const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center bg-gradient-to-b from-indigo-700 to-indigo-400 px-4 py-4">
            <a 
             href="/"
             className="font-cursive font-semibold text-3xl text-white"> 
                Madhav<sub className="font-medium text-lg">Creations</sub>
            </a>
            <ul 
            className="flex justify-between items-center text-white text-base font-semibold capitalize w-1/2">
                <li className="hover:text-teal-500 transition-colors">
                    <a href="#">Home</a>
                    {/* <div className="w-12 h-px bg-blue-500 "></div> */}
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <a href="#">About us</a>
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <a href="#">Products</a>
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <a href="#">gallery</a>
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <a href="#">enquiry</a>
                </li>
                <li className="hover:text-teal-500 transition-colors">
                    <a href="#">contact us</a>
                </li>
            </ul>
        </nav>
    );
}
