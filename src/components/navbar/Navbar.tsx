import NavItem, { NavItemProps } from "./NavItem";


const Navbar = ({ items }: {items: NavItemProps[]}) => {
    return (
        <nav>
            <ul>
                <li>{items.map(i => (<NavItem {...i}></NavItem>))}</li>
            </ul>
        </nav>
    );
};

export default Navbar;