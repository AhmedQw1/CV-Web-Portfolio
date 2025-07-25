/* eslint-env node */
/**
 * @type {import('tailwindcss').Config}
 * Current Date and Time (UTC): 2025-07-25 05:14:45
 * Current User's Login: AhmedQw1
 */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    
    extend: {
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      fontFamily: {
        sans: ['Verdana', 'Arial', 'sans-serif'],
        customgoogle: ['CustomGoogleFont', 'sans-serif'],
        comic: ['"Comic Neue"', '"Comic Sans MS"'],
        pixel: ['"Press Start 2P"'],
        retro: ['"VT323"', 'monospace'],
      },
      colors: {
        web2: {
          blue: '#0080FF',
          green: '#00CC66',
          orange: '#FF6600',
          pink: '#FF3399',
          yellow: '#FFCC00',
          purple: '#9933CC',
          red: '#FF3333',
        },
        retro: {
          navy: '#003366',
          teal: '#008080',
          maroon: '#800000',
          olive: '#808000',
        },
      },
      spacing: {
        '0.1': '0.025rem',
        '0.2': '0.05rem',
        '0.3': '0.075rem',
        '0.4': '0.1rem',
      },
      backgroundImage: {
        'noise-pattern': "url('data:image/png;base64,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')",
        'dot-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEklEQVQImWNgYGD4z0AswK4SAFXuAf8EPy+xAAAAAElFTkSuQmCC')",
        'stripe-pattern': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGUlEQVQYlWNgYGD4z4Eo/P//PwMafsixAwCdlhDnLBJfPwAAAABJRU5ErkJggg==')",
        'gradient-blue': 'linear-gradient(to bottom, #0080FF, #0066CC)',
        'gradient-green': 'linear-gradient(to bottom, #00CC66, #009933)',
        'gradient-button': 'linear-gradient(to bottom, #FFFFFF, #DDDDDD)',
        'gradient-metal': 'linear-gradient(to bottom, #EEEEEE, #AAAAAA)',
        'rainbow': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
      },
      boxShadow: {
        'web2': '0 1px 2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        'inset': 'inset 0 1px 3px rgba(0, 0, 0, 0.3)',
        'glossy': '0 1px 3px rgba(0, 0, 0, 0.3), inset 0 15px 10px -10px rgba(255, 255, 255, 0.5)',
      },
      animation: {
        'blink': 'blink 1s infinite',
        'marquee': 'marquee 20s linear infinite',
        'spin-slow': 'spin 6s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}