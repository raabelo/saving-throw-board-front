interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonTitleBar: React.FC<Props> = ({ ...props }) => {
    return (
        <button
            {...props}
            onClick={props.onClick}
            className={`py-1.5 px-2 hover:bg-gray-600 text-white transition-all focus:outline-none ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default ButtonTitleBar;
