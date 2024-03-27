import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "background": 'var(--color-background)',
                "background-light": 'var(--color-background-light)',
                "background-secondary": {
                    'DEFAULT': 'var(--color-background-secondary)',
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3d3d3d',
                    '950': '#1a1a1a',
                },
                "background-secondary-light": {
                    'DEFAULT': 'var(--color-background-secondary-light)',
                    '50': '#f9f9f9',
                    '100': '#f2f2f2',
                    '200': '#e6e6e6',
                    '300': '#cccccc',
                    '400': '#b3b3b3',
                    '500': '#999999',
                    '600': '#8c8c8c',
                    '700': '#808080',
                    '800': '#757575',
                    '900': '#6b6b6b',
                    '950': '#4d4d4d',
                },

                "primary": {
                    'DEFAULT': 'var(--color-primary)',
                    '50': '#fffceb',
                    '100': '#fff4c6',
                    '200': '#feea89',
                    '300': '#fed53a',
                    '400': '#fec621',
                    '500': '#f8a508',
                    '600': '#dc7c03',
                    '700': '#b65707',
                    '800': '#94430c',
                    '900': '#79380e',
                    '950': '#461c02',
                }
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            width: {
                "sidebar": "var(--sidebar-width)",
                "sidebar-expanded": "var(--sidebar-width-expanded)",
                "content-width": "var(--content-width)",
            },
            maxWidth: {
                "content-width": "var(--content-width)",
            },
            height: {
                "navbar": "var(--navbar-height)",
            },
            spacing: {
                "main-padding": "var(--main-padding)",
                "sidebar": "var(--sidebar-width)",
                "navbar": "var(--navbar-height)",
            },
        },

        screens: {
            "sm": "640px",
            "md": "768px",
            "sidebar-shown": "875px",
            "lg": "1024px",
            "lg-max": { "max": "1023px", "min": "875px"},
            "xl": "1280px",
            "icon-only": "1368px",
            "2xl": "1536px",
        }
    },
    plugins: [],
    darkMode: 'class',
};

export default config;
