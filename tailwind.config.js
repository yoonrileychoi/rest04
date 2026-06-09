/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        /* ── 컬러 팔레트 5종 ──────────────────────────────── */
        /* 1. Blush  : 베이비 핑크 (메인) */
        blush: {
          50:  '#FFF0F5',
          100: '#FFD6E7',
          200: '#FFB3CC',
          300: '#F9C6D4',
          400: '#F4A0B9',
          500: '#EC7A9A',
          600: '#D95780',
          700: '#BB3A66',
          800: '#972251',
          900: '#74103C',
        },
        /* 2. Azure  : 베이비 블루 (메인) */
        azure: {
          50:  '#EFF8FF',
          100: '#DBEFFD',
          200: '#BAD9F4',
          300: '#90C4EE',
          400: '#60ABE5',
          500: '#3892D8',
          600: '#2177BE',
          700: '#185F9E',
          800: '#104D82',
          900: '#093D68',
        },
        /* 3. Sage   : 민트/세이지 (보조) */
        sage: {
          50:  '#F0FDF8',
          100: '#D0F5EB',
          200: '#A2E9D5',
          300: '#67D6BA',
          400: '#33BC9A',
          500: '#1AA27F',
          600: '#0F8466',
          700: '#0C6A52',
          800: '#0A5542',
          900: '#094535',
        },
        /* 4. Plum   : 라벤더/퍼플 (보조) */
        plum: {
          50:  '#F6F3FF',
          100: '#EDE8FE',
          200: '#DDD0FC',
          300: '#C5AEF8',
          400: '#A882F2',
          500: '#8B58E8',
          600: '#7340CF',
          700: '#5D2FAD',
          800: '#4C248D',
          900: '#3D1E72',
        },
        /* 5. Coral  : 포인트 컬러 (CTA·강조) */
        coral: {
          50:  '#FFF1F2',
          100: '#FFD9DF',
          200: '#FFB3BC',
          300: '#FF8F9D',
          400: '#FF6B7A',
          500: '#F5465A',
          600: '#DF2841',
          700: '#BB162C',
          800: '#990F22',
          900: '#7A0A1B',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1400px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
        slideUp: 'slideUp 0.7s ease forwards',
        pulse2: 'pulse2 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
