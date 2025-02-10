export interface NavItemProps {
    text: string,
    url: string
}

const NavItem = ({ text, url }: NavItemProps) => {
    console.log(text, url);

    return (
        <a href={url}>{text}</a>
    );
};

export default NavItem;