const FooterButton = (props) => {
  return <button className="footer-button" onClick={props.onClick}>{props.children}</button>;
};

export const LoginButton = (props) => {
  return <button className={`login-button ${props.mod}`} onClick={props.onClick} disabled={props.mod === "green" ? false : true}>{props.children}</button>;
};

export default FooterButton;
