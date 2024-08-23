interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outlined" | "text";
}

const Button: React.FC<Props> = ({ variant = "default", ...props }) => {
    const style: { [key in typeof variant]: string } = {
        default: "px-3 py-1.5 w-full bg-custom-gradient rounded-full",
        outlined: "px-3 py-1.5 w-full rounded-full border border-purple-custom-200",
        text: "size-fit text-center mx-auto",
    };

    return (
        <button
            {...props}
            type={props.type || "button"}
            className={`${style[variant]} ${props.className} hover:opacity-50 transition-all active:scale-95`}
        >
            {props.children}
        </button>
    );
};

export default Button;
