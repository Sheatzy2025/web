interface PageTitleProps{
    title : string;
}

const PageTitle =(props : PageTitleProps) => {
    return(
        <h1>Titre : {props.title}</h1>
    )
}

export default PageTitle