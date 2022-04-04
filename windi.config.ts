import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
    },
    colors: {
      'bright-blue': 'hsl(245, 75%, 52%)',
      'pale-blue': {
        50: 'hsl(225, 100%, 98%)',
        100: 'hsl(225, 100%, 94%)',
      },
      slate: {
        800: 'hsl(224, 23%, 55%)',
        900: 'hsl(223, 47%, 23%)',
      },
      white: '#FFFFFF',
    },
    fontFamily: {
      redhat: ['Red Hat Display', 'sans-serif'],
    },
  },
});
