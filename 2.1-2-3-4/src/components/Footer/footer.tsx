interface FooterProps {
    children : React.ReactNode;
    img : string;
    alt : string;
}

const Footer = (props : FooterProps) => {
    return (
        <footer>
            <img src={props.img} alt={props.alt}></img>
            {props.children}</footer>
    )
}

export default Footer;