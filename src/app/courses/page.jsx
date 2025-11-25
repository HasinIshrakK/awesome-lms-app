import Cards from "@/Components/Cards/Cards";
import SearchBar from "@/Components/SearchBar";

const Courses = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold my-12 text-center">All Courses</h2>
            <div className="flex justify-between items-center mb-6">
                <SearchBar></SearchBar>
                <div className="dropdown dropdown-left justify-end dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Frontend</a></li>
                        <li><a>Backend</a></li>
                        <li><a>ML</a></li>
                        <li><a>Others</a></li>
                    </ul>
                </div>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Courses;