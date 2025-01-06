/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Includes files in the app directory
    './src/**/*.{js,ts,jsx,tsx}', // Includes files in the src directory
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#86E3CE', // Light Mint Green
          DEFAULT: '#4CAF50', // Primary Green
          dark: '#388E3C', // Dark Green
        },
        secondary: {
          light: '#FFD3B5', // Light Coral
          DEFAULT: '#FF5722', // Vibrant Orange
          dark: '#E64A19', // Dark Orange
        },
        accent: {
          light: '#D1C4E9', // Light Lavender
          DEFAULT: '#673AB7', // Deep Purple
          dark: '#512DA8', // Dark Purple
        },
        neutral: {
          light: '#F5F5F5', // Light Gray
          DEFAULT: '#9E9E9E', // Neutral Gray
          dark: '#424242', // Dark Gray
        },
        success: '#4CAF50', // Green for success messages
        error: '#F44336', // Red for error messages
        warning: '#FF9800', // Orange for warnings
        info: '#2196F3', // Blue for informational messages
        background: {
          light: '#FFFFFF', // Set to white background for light mode
          dark: '#2C2C2C', // Dark grayish background for dark mode (not pure black)
        },
        // Adding custom grayish dark theme specifically for navbar, sidebar, and main page
        darkModeGray: '#2C2C2C', // Custom grayish dark color for navbar/sidebar
      },
      spacing: {
        18: '4.5rem', // Custom spacing for specific use cases
        22: '5.5rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
        128: '32rem',
      },
      screens: {
        xs: '475px', // Custom breakpoint for extra small devices
        '3xl': '1600px', // Large desktop screens
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], // Clean modern font
        heading: ['Poppins', 'sans-serif'], // Great for headings
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.dark'),
            h1: {
              color: theme('colors.primary.DEFAULT'), // Custom color for headings
            },
            h2: {
              color: theme('colors.primary.DEFAULT'),
            },
            h3: {
              color: theme('colors.primary.DEFAULT'),
            },
            h4: {
              color: theme('colors.primary.DEFAULT'),
            },
            p: {
              color: theme('colors.neutral.dark'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.neutral.light'),
            h1: {
              color: theme('colors.primary.light'), // Lighter color for headings in dark mode
            },
            h2: {
              color: theme('colors.primary.light'),
            },
            h3: {
              color: theme('colors.primary.light'),
            },
            h4: {
              color: theme('colors.primary.light'),
            },
            p: {
              color: theme('colors.neutral.light'),
            },
          },
        },
      }),
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 6px 8px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Improved styling for forms
    require('@tailwindcss/typography'), // For prose styles
    require('@tailwindcss/aspect-ratio'), // For maintaining aspect ratios
  ],
  darkMode: 'class', // Enable dark mode
};
