const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const publicDir = path.join(__dirname, '..', 'public')
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir)

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFF0F5"/>
      <stop offset="100%" stop-color="#FFDDE9"/>
    </linearGradient>
    <linearGradient id="titlegrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#C2516E"/>
      <stop offset="100%" stop-color="#E07A9A"/>
    </linearGradient>
  </defs>

  <!-- 배경 -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- 배경 파스텔 원 (보케 효과) -->
  <circle cx="1120" cy="60"  r="260" fill="#F9C0D4" opacity="0.45"/>
  <circle cx="1180" cy="560" r="210" fill="#FFB3C6" opacity="0.35"/>
  <circle cx="40"   cy="610" r="170" fill="#F4B8D0" opacity="0.30"/>
  <circle cx="10"   cy="90"  r="130" fill="#FFC8DA" opacity="0.25"/>
  <circle cx="620"  cy="690" r="190" fill="#FADADD" opacity="0.40"/>
  <circle cx="500"  cy="-40" r="160" fill="#FFD6E3" opacity="0.35"/>
  <circle cx="900"  cy="350" r="120" fill="#F9C0D4" opacity="0.20"/>

  <!-- 장미 꽃 장식 (우상단) -->
  <g transform="translate(1040, 110)">
    <ellipse cx="0" cy="-52" rx="28" ry="54" fill="#F9C0D4" opacity="0.82" transform="rotate(0)"/>
    <ellipse cx="0" cy="-52" rx="28" ry="54" fill="#FFB3C6" opacity="0.72" transform="rotate(51)"/>
    <ellipse cx="0" cy="-52" rx="28" ry="54" fill="#F4A8C0" opacity="0.78" transform="rotate(102)"/>
    <ellipse cx="0" cy="-52" rx="28" ry="54" fill="#FFB8CC" opacity="0.72" transform="rotate(154)"/>
    <ellipse cx="0" cy="-52" rx="28" ry="54" fill="#F9C0D4" opacity="0.80" transform="rotate(205)"/>
    <ellipse cx="0" cy="-52" rx="28" ry="54" fill="#FFADC4" opacity="0.75" transform="rotate(257)"/>
    <ellipse cx="0" cy="-52" rx="28" ry="54" fill="#F4B8D0" opacity="0.70" transform="rotate(308)"/>
    <circle cx="0" cy="0" r="24" fill="#E07A9A" opacity="0.90"/>
    <circle cx="0" cy="0" r="12" fill="#F4A0B9" opacity="0.95"/>
  </g>

  <!-- 작은 장미 (좌하단) -->
  <g transform="translate(130, 530)">
    <ellipse cx="0" cy="-36" rx="20" ry="38" fill="#F9C0D4" opacity="0.70" transform="rotate(0)"/>
    <ellipse cx="0" cy="-36" rx="20" ry="38" fill="#FFB3C6" opacity="0.65" transform="rotate(60)"/>
    <ellipse cx="0" cy="-36" rx="20" ry="38" fill="#F4A8C0" opacity="0.68" transform="rotate(120)"/>
    <ellipse cx="0" cy="-36" rx="20" ry="38" fill="#FFB8CC" opacity="0.65" transform="rotate(180)"/>
    <ellipse cx="0" cy="-36" rx="20" ry="38" fill="#F9C0D4" opacity="0.70" transform="rotate(240)"/>
    <ellipse cx="0" cy="-36" rx="20" ry="38" fill="#FFADC4" opacity="0.65" transform="rotate(300)"/>
    <circle cx="0" cy="0" r="16" fill="#E07A9A" opacity="0.85"/>
    <circle cx="0" cy="0" r="8" fill="#F4A0B9" opacity="0.90"/>
  </g>

  <!-- 좌측 컬러 바 -->
  <rect x="0" y="0" width="6" height="630" fill="#E07A9A"/>

  <!-- 로고 박스 -->
  <rect x="80" y="62" width="54" height="54" rx="14" fill="#E07A9A"/>
  <text x="107" y="100" font-family="Arial, sans-serif" font-size="28" font-weight="bold"
        fill="white" text-anchor="middle">S</text>

  <!-- 브랜드명 -->
  <text x="148" y="100" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="#5A2233">Style</text>
  <text x="248" y="100" font-family="Arial, sans-serif" font-size="34" font-weight="bold" fill="#E07A9A">AI</text>

  <!-- 구분선 -->
  <rect x="80" y="140" width="460" height="1.5" fill="#E07A9A" opacity="0.40"/>

  <!-- 메인 한글 타이틀 -->
  <text x="80" y="268" font-family="Malgun Gothic, &#xB9D1;&#xC740; &#xACE0;&#xB515;, sans-serif" font-size="64" font-weight="bold" fill="#5A2233">AI&#xAC00; &#xCC3E;&#xC544;&#xC8FC;&#xB294;</text>
  <text x="80" y="358" font-family="Malgun Gothic, &#xB9D1;&#xC740; &#xACE0;&#xB515;, sans-serif" font-size="64" font-weight="bold" fill="url(#titlegrad)">&#xB098;&#xB9CC;&#xC758; &#xC2A4;&#xD0C0;&#xC77C;</text>

  <!-- 서브타이틀 -->
  <text x="80" y="430" font-family="Malgun Gothic, &#xB9D1;&#xC740; &#xACE0;&#xB515;, sans-serif" font-size="26" fill="#B07080">AI &#xAE30;&#xC220;&#xB85C; &#xC644;&#xC131;&#xD558;&#xB294; &#xB098;&#xB9CC;&#xC758; &#xD328;&#xC158; &amp; &#xBDF0;&#xD2F0;</text>

  <!-- 파스텔 스와치 -->
  <circle cx="80"  cy="530" r="20" fill="#F9C0D4"/>
  <circle cx="124" cy="530" r="20" fill="#FFB3C6"/>
  <circle cx="168" cy="530" r="20" fill="#E07A9A"/>
  <circle cx="212" cy="530" r="20" fill="#FADADD"/>
  <circle cx="256" cy="530" r="20" fill="#FFC8DA"/>

  <!-- URL -->
  <text x="1118" y="572" font-family="Arial, sans-serif" font-size="19"
        fill="#C2A0AC" text-anchor="end">yoonrileychoi.github.io/rest04</text>
</svg>
`.trim()

sharp(Buffer.from(svg))
  .png()
  .toFile(path.join(publicDir, 'og-image.png'))
  .then(() => console.log('OG image generated: public/og-image.png'))
  .catch(err => { console.error(err); process.exit(1) })
