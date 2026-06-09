import { useState, useEffect } from 'react'

const themes = {
  blush: {
    '--t-from':      '#EC7A9A',
    '--t-to':        '#FF6B7A',
    '--t-from-dark': '#D95780',
    '--t-to-dark':   '#DF2841',
    '--t-50':        '#FFF0F5',
    '--t-100':       '#FFD6E7',
    '--t-text':      '#D95780',
    '--t-ring':      '#F4A0B9',
  },
  azure: {
    '--t-from':      '#3892D8',
    '--t-to':        '#8B58E8',
    '--t-from-dark': '#2177BE',
    '--t-to-dark':   '#7340CF',
    '--t-50':        '#EFF8FF',
    '--t-100':       '#DBEFFD',
    '--t-text':      '#2177BE',
    '--t-ring':      '#60ABE5',
  },
  sage: {
    '--t-from':      '#1AA27F',
    '--t-to':        '#3892D8',
    '--t-from-dark': '#0F8466',
    '--t-to-dark':   '#2177BE',
    '--t-50':        '#F0FDF8',
    '--t-100':       '#D0F5EB',
    '--t-text':      '#0F8466',
    '--t-ring':      '#33BC9A',
  },
  plum: {
    '--t-from':      '#8B58E8',
    '--t-to':        '#EC7A9A',
    '--t-from-dark': '#7340CF',
    '--t-to-dark':   '#D95780',
    '--t-50':        '#F6F3FF',
    '--t-100':       '#EDE8FE',
    '--t-text':      '#7340CF',
    '--t-ring':      '#A882F2',
  },
  coral: {
    '--t-from':      '#F5465A',
    '--t-to':        '#EC7A9A',
    '--t-from-dark': '#DF2841',
    '--t-to-dark':   '#D95780',
    '--t-50':        '#FFF1F2',
    '--t-100':       '#FFD9DF',
    '--t-text':      '#DF2841',
    '--t-ring':      '#FF6B7A',
  },
}

export { themes }

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'blush')

  useEffect(() => {
    const vars = themes[theme] || themes.blush
    Object.entries(vars).forEach(([k, v]) => {
      document.documentElement.style.setProperty(k, v)
    })
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, setTheme]
}
