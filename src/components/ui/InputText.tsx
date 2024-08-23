interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "default" | "outlined" | "text";
}

const Input: React.FC<Props> = ({ variant = "default", ...props }) => {
    const style: { [key in typeof variant]: string } = {
        default: "px-3 py-1.5 w-full bg-custom-gradient rounded-full",
        outlined: "px-3 py-1.5 w-full rounded-full border border-purple-custom-200",
        text: "size-fit text-center mx-auto",
    };

    return (
        <input
            {...props}
            type={props.type || "text"}
            className={`${style[variant]} ${props.className} hover:opacity-50 transition-all`}
        />
    );
};

export default Input;
