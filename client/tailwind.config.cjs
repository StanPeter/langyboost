/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // screens: {
            //     sm: '480px',
            //     md: '768px',
            //     lg: '976px',
            //     xl: '1440px',
            // },
            // colors: {
            //     'color-main': 'var(--color-main)', // This color should be eye-catching but not harsh. It can be liberally applied to your layout as its main identity.
            //     'color-main-light': 'var(--color-main-light)', // main color light, used for backgrounds and as white font color when dark background
            //     'color-light-accent': 'var(--color-light-accent)', // used as light accent of main color, mostly in forms as valid input
            //     'color-dark-accent': 'var(--color-dark-accent)', // most of borders in boxes, elements

            //     // TEXT COLORS
            //     'color-text-dark': 'var(--color-text-dark)', // mostly font color when white background
            //     'color-text-light': 'var(--color-text-light)', // main color light, used for backgrounds and as white font color when dark background

            //     // OTHER COLORS
            //     'color-invalid-light': 'var(--color-invalid-light)', // color for invalid inputs
            //     'color-invalid-dark': 'var(--color-invalid-dark)', // color for invalid inputs

            //     'color-facebook': 'var(--color-facebook)',
            //     'color-thumpsDown': 'var(--color-thumpsDown)',
            // },
            // fontFamily: {
            //     sans: ['Graphik', 'sans-serif'],
            //     serif: ['Merriweather', 'serif'],
            // },
            borderRadius: {
                '3xl': '1.8rem',
            },
            boxShadow: {
                
            }
        },
    },
    plugins: [],
};
