export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#181B20', paper: '#F6F5F1', surface: '#FFFFFF', accent: '#E87439', text: '#202329', muted: '#707780', line: '#E5E4E0' },
    fontFamily: { heading: ['Manrope', 'sans-serif'], body: ['Inter', 'sans-serif'] },
    maxWidth: { content: '1360px' }, borderRadius: { panel: '12px' }
  } }, plugins: []
};
