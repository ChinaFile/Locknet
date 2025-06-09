/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./content/**/*.md', './content/**/*.html', './layouts/**/*.html'],
    theme: {
      fontFamily: {
        serif: ['Georgia Bold', 'serif'],
        sans: ['IBM Plex Sans', 'sans-serif',]
      },
      extend: {
        colors: {
          blue: {
            1: '#E5F6FF',
            2: '#BDE8FF',
            3: '#88D3FA',
            4: '#00ADEF',
            5: '#1365A7',
          },
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#E5E5E5',
            300: '#D4D4D4',
            400: '#A3A3A3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
            950: '#0a0a0a',
          },
        },
        typography: {
          DEFAULT: {
            css: {
              maxWidth: 'none',
              pre: {
                maxWidth: '100%',
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap'
              },
              code: {
                maxWidth: '100%',
                wordBreak: 'break-word',
                whiteSpace: 'pre-wrap'
              }
            }
          }
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms')
    ],
    safelist: [
      'toc-active',
      'hidden',
      // Drawer animation classes
      'transition',
      'duration-300',
      'duration-200',
      'ease-out',
      'ease-in',
      'translate-x-full',
      'translate-x-0',
      'opacity-0',
      'opacity-100',
      'transition-transform',
      'transition-opacity'
    ],
  }