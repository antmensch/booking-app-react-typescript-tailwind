type ButtonProps = {
    text: string;
    classes: string;
};

function Button(props: ButtonProps) {
    const { text, classes } = props;

    return <button className={"" + classes}>{text}</button>;
}

export default Button;
