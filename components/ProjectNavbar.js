

export const NavItem = ({ value, handlerFilterCategory, active }) => {
    let className = "capitalize cursor-pointer hover:text-green";
    if (active === value) className += " text-green";
    

    return (
        <li className={className} onClick={() => handlerFilterCategory(value)}>
            {value}
        </li>
    );
};

const ProjectsNavbar = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none ">
            <NavItem value="all" {...props} />
            <NavItem value="react" {...props} />
            <NavItem value="Web3" {...props} />
            <NavItem value="node" {...props} />
        </div>
    );
};

export default ProjectsNavbar;