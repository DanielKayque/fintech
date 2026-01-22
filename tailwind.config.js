/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // 1. As cores ficam aqui
      colors: {
        cor1: 'var(--color-1)',
        cor2: 'var(--color-2)',
        cor3: 'var(--color-3)',
        cor4: 'var(--color-4)',
        cor5: 'var(--color-5)',
      },
      // 2. O spacing fica AQUI DENTRO do extend também
      // Se você colocar fora do extend, ele apaga o p-1, p-2, p-4 padrão do Tailwind!
      spacing: {
        'spacing-padrao': 'var(--spacing-padrao)',
        'spacing-small': 'var(--spacing-small)',
      },
    },
  },
  plugins: [],
};