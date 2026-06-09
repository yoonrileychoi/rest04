import { Link } from 'react-router-dom'
import { siteInfo, subjects } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-400">
      <div className="max-w-container mx-auto px-4 md:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* 브랜드 */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blush-400 to-azure-400 flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-bold text-lg text-white">
                Style<span className="text-blush-400">AI</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              {siteInfo.description}
            </p>
            <p className="text-xs">{siteInfo.address}</p>
            <p className="text-xs mt-1">Tel. {siteInfo.phone} &nbsp;|&nbsp; {siteInfo.email}</p>
          </div>

          {/* 스타일 영상 바로가기 */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">스타일 영상</h4>
            <ul className="space-y-2">
              {subjects.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/videos/${s.id}`}
                    className="text-sm hover:text-blush-300 transition-colors"
                  >
                    {s.icon} {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI 추천 바로가기 */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">AI 추천</h4>
            <ul className="space-y-2">
              {subjects.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/workbook/${s.id}`}
                    className="text-sm hover:text-azure-300 transition-colors"
                  >
                    {s.label} AI 추천
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{siteInfo.copyright}</p>
          <div className="flex gap-4">
            <Link to="/guide" className="hover:text-white transition-colors">이용 안내</Link>
            <Link to="/about/company" className="hover:text-white transition-colors">회사 소개</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
