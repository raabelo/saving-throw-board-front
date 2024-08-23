/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "purple-custom-100": "#BD83C0",
                "purple-custom-200": "#5E458F",
                "gray-custom-100": "#303136",
                "gray-custom-200": "#25262A",
            },
            backgroundImage: {
                "custom-gradient": "linear-gradient(to right, #5E458F, #BD83C0)",
            },
        },
    },
    plugins: [],
};
