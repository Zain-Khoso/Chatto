/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            light: {
                100: "#F5F4F4",
                200: "#F0F0F0",
            },
            dark: {
                100: "#413941",
                200: "#372F37",
                300: "#2C262C",
                400: "#0B090B",
            },
            primary: {
                100: "#85A9FF",
                200: "#0037B8",
                300: "#001852",
            },
        },

        fontFamily: {
            brand: ["Montserrat", "sans-serif"],
            body: ["Roboto", "sans-serif"],
        },

        screens: {
            tablet: "768px",
            desktop: "1024px",
        },

        extend: {},
    },
    plugins: [],
};
