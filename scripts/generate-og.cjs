const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

// public 폴더 생성
const publicDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir)

// 사이트 기존 5종 컬러 팔레트
const palette = [
  { color: '#EC7A9A', label: 'Blush' },
  { color: '#3892D8', label: 'Azure' },
  { color: '#1AA27F', label: 'Sage' },
  { color: '#8B58E8', label: 'Plum' },
  { color: '#F5465A', label: 'Coral' },
]

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 다크 배경 그라데이션 (기존 컬러 기반) -->
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#12091E"/>
      <stop offset="100%" stop-color="#091224"/>
    </linearGradient>
    <!-- 브랜드 그라데이션 (기존 blush → azure) -->
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#EC7A9A"/>
      <stop offset="100%" stop-color="#3892D8"/>
    </linearGradient>
    <!-- 로고 박스 그라데이션 -->
    <linearGradient id="logo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#EC7A9A"/>
      <stop offset="100%" stop-color="#60ABE5"/>
    </linearGradient>
  </defs>

  <!-- 배경 -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- 장식 원 — 기존 5색 -->
  <circle cx="1080" cy="80"  r="220" fill="#EC7A9A" opacity="0.07"/>
  <circle cx="1150" cy="520" r="180" fill="#3892D8" opacity="0.08"/>
  <circle cx="60"   cy="580" r="140" fill="#8B58E8" opacity="0.07"/>
  <circle cx="30"   cy="120" r="100" fill="#1AA27F" opacity="0.06"/>
  <circle cx="600"  cy="650" r="160" fill="#F5465A" opacity="0.05"/>

  <!-- 좌측 브랜드 컬러 바 -->
  <rect x="0" y="0" width="6" height="630" fill="url(#brand)"/>

  <!-- 로고 박스 -->
  <rect x="80" y="68" width="58" height="58" rx="14" fill="url(#logo)"/>
  <text x="109" y="108" font-family="Arial, sans-serif" font-size="30" font-weight="bold"
        fill="white" text-anchor="middle">E</text>

  <!-- 브랜드명 -->
  <text x="154" y="108" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white">Edu</text>
  <text x="228" y="108" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="#EC7A9A">AI</text>

  <!-- 구분선 -->
  <rect x="80" y="148" width="500" height="1.5" fill="#EC7A9A" opacity="0.3"/>

  <!-- 메인 타이틀 (영문) -->
  <text x="80" y="265" font-family="Arial, sans-serif" font-size="58" font-weight="bold" fill="white">Smart Learning</text>
  <text x="80" y="340" font-family="Arial, sans-serif" font-size="58" font-weight="bold" fill="url(#brand)">with AI</text>

  <!-- 설명 -->
  <text x="80" y="415" font-family="Arial, sans-serif" font-size="26" fill="#94a3b8">AI-powered personalized workbooks &amp;</text>
  <text x="80" y="450" font-family="Arial, sans-serif" font-size="26" fill="#94a3b8">expert video lectures for every student.</text>

  <!-- 컬러 팔레트 스와치 5개 -->
  ${palette.map((p, i) => `
  <circle cx="${80 + i * 58}" cy="540" r="22" fill="${p.color}" opacity="0.9"/>
  <circle cx="${80 + i * 58}" cy="540" r="22" fill="none" stroke="${p.color}" stroke-width="2" opacity="0.4"/>
  `).join('')}

  <!-- URL -->
  <text x="1118" y="570" font-family="Arial, sans-serif" font-size="20"
        fill="#475569" text-anchor="end">yoonrileychoi.github.io/rest04</text>
</svg>
`.trim()

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(publicDir, 'og-image.png'))
  .then(() => console.log('OG image generated: public/og-image.png'))
  .catch(err => { console.error(err); process.exit(1) })
