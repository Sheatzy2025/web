interface FooterProps {
    text : string;
}

const Footer = (props : FooterProps) =>{
    return(
        <footer>Certification : {props.text}</footer>
    )
}

export default Footer;