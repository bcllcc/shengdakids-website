/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: 'var(--brand-primary)',
                    secondary: 'var(--brand-secondary)',
                    accent: 'var(--brand-accent)',
                    text: 'var(--brand-text)',
                    'text-secondary': 'var(--brand-text-secondary)',
                    bg: 'var(--brand-bg)',
                    'bg-light': 'var(--brand-bg-light)',
                    border: 'var(--brand-border)',
                }
            },
            fontFamily: {
                // 全面对齐竞品：采用干净的无衬线组合，彻底移除老派的衬线体
                sans: ['Nunito', '"Microsoft YaHei"', '"PingFang SC"', 'system-ui', 'sans-serif'],
                display: ['"Microsoft YaHei"', '"PingFang SC"', 'system-ui', 'sans-serif'],
                serif: ['"Microsoft YaHei"', '"PingFang SC"', 'system-ui', 'sans-serif'], // 强制把之前的serif类替换为干净的黑体
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'float-up': 'floatUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                floatUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            boxShadow: {
                'soft': '0 4px 30px rgba(0, 0, 0, 0.03)',
                'premium': '0 20px 40px rgba(0, 0, 0, 0.06)',
            }
        },
    },
    plugins: [],
};
