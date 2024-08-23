interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonSideMenu: React.FC<Props> = ({ ...props }) => {
    return (
        <button
            {...props}
            onClick={props.onClick}
            className={`p-2 m-2 hover:bg-gray-600 aspect-square text-white transition-all rounded-md focus:outline-none ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default ButtonSideMenu;
