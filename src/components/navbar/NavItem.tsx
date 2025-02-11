import { NavLink } from "react-router";

export interface NavItemProps {
    text: string,
    path: string
}

const NavItem = ({ text, path }: NavItemProps) => {
    return (
        <NavLink to={path}>{text}</NavLink>
    );
};

export default NavItem;