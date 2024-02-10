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
            spacing: {
                "main-padding": "var(--main-padding)",
                "sidebar": "var(--sidebar-width)",
            },
        },

        screens: {
            "sm": "640px",
            "md": "768px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",

            "icon-only": "1368px",
            "sidebar-shown": "850px",

            "sidebar-icon-only": "var(--sidebar-icon-only)",
        }
    },
    plugins: [],
};

export default config;
