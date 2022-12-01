const Header = (props) => {
  return <div className="lw-header">
    <div className="left">
        {props.leftLink && <p className="blue-link header-link">{props.leftLink}</p>}
    </div>
    <div className="middle">{props.title}</div>
    <div className="right">
    {props.rightLink && <p className="blue-link header-link">{props.rightLink}</p>}
    </div>
  </div>;
};

export default Header;
