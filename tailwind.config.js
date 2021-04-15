module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: () => ({
                eye_catcher_liebenzell: "url('/assets/eye_catcher_liebenzell.jpeg')",
            }),
            colors: {
                primary: {
                    50: "#fef2e0",
                    100: "#fddeb2",
                    200: "#fcc981",
                    300: "#fbb350",
                    400: "#faa22c",
                    500: "#f89312",
                    600: "#f48711",
                    700: "#ee7810",
                    800: "#e7680f",
                    900: "#dd4e0e",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
