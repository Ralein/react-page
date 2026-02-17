import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#00c6ff",
                    dark: "#0072ff",
                },
                secondary: "#f0f2f5",
                text: {
                    DEFAULT: "#333333",
                    secondary: "#666666",
                },
                border: "#e0e0e0",
                card: "#ffffff",
            },
            backgroundImage: {
                "primary-gradient": "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
            },
            boxShadow: {
                sm: "0 1px 3px rgba(0,0,0,0.1)",
                md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
            },
            borderRadius: {
                sm: "4px",
                md: "8px",
                lg: "12px",
            }
        },
    },
    plugins: [],
};
export default config;
