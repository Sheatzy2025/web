import "./pageTitle.css"

interface PageTitleProps {
  title : string;
}
const PageTitle = (props : PageTitleProps) => {
  return (
      <h1 className="title">{props.title}</h1>
  );
};

export default PageTitle