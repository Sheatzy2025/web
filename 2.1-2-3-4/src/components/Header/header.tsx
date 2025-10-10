interface HeaderProps {
    children : React.ReactNode;
    img : string;
    alt : string;
}

const Header = (props : HeaderProps) =>{
    return (
        <header>
        <img src={props.img} alt={props.alt} />
        {props.children}
        </header>
        
    )
}

export default Header;