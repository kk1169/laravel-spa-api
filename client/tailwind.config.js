/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],

    theme: {
      container: {
        // you can configure the container to be centered
        center: true,

        // or have default horizontal padding
        padding: '1rem',

        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1140px',
          '2xl': '1180px',
        },
      },
      fontFamily: {
        DEFAULT: 'Roboto, sans-serif',
        'roboto': 'Roboto, sans-serif',
        'oswald': 'Oswald, sans-serif'
      },
      extend: {
        colors: {
          'primary': {
            '50': '#fffbea',
            '100': '#fff1c5',
            '200': '#ffe485',
            '300': '#ffcf46',
            '400': '#ffb91b',
            '500': '#fa9200',
            '600': '#e26e00',
            '700': '#bb4a02',
            '800': '#983908',
            '900': '#7c2f0b',
            '950': '#481600',
          },
        },
      },
    },
    plugins: [],
  }
