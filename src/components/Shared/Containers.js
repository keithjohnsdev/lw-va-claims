const Container = props => {
    // 12.5% margin container
    return (
        <div className="container">{props.children}</div>
    );
}

export default Container;

export const Container2 = props => {
    // 8% margin container
    return (
        <div className="container2">{props.children}</div>
    );
}

export const Container3 = props => {
    // 2% margin container
    return (
        <div className="container3">{props.children}</div>
    );
}