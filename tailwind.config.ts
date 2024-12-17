module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        moveLeftRight: {
          '0%, 100%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(-48%)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        moveLeftRight: 'moveLeftRight 5s infinite ease-in-out',
        bounce: 'bounce 2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
