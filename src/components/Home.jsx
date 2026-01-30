import React from "react";
import { useTranslation } from 'react-i18next';
import {
  FaMobileAlt,
  FaPrayingHands,
  FaBookOpen,
  FaPlay,
} from "react-icons/fa";
import Navbar from "./Navbar";
// import stage from "../assets/stage.jpeg";
import stage from "../assets/girl.jpg";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gray-50 text-gray-900 pt-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-transparent z-10"></div>
          <img
            src={stage}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div className="inline-block bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 shadow-sm">
                <span className="text-blue-700 font-bold text-sm tracking-wide uppercase">
                  {t('hero.invited')}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                {t('hero.jesus_prefix')} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {t('hero.jesus_suffix')}
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                "{t('hero.verse')}" <br />
                <span className="text-blue-600 font-bold text-base mt-2 block">— {t('hero.verse_ref')}</span>
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 flex items-center gap-2">
                  <FaPlay className="text-sm" /> {t('hero.watch_message')}
                </button>
                <button className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 px-8 py-4 rounded-full font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  {t('hero.new_here')}
                </button>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 group bg-white">
                <img 
                  src={stage} 
                  alt="Worship Service" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-bold text-xl text-white">{t('hero.join_live')}</p>
                            <p className="text-gray-200">{t('hero.service_time')}</p>
                        </div>
                        <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse flex items-center gap-1">
                            <span className="w-2 h-2 bg-white rounded-full"></span> {t('hero.live_badge')}
                        </div>
                    </div>
                </div>
              </div>
              
              {/* Floating Badge */}
               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl border border-gray-100 shadow-xl transform -rotate-3 hidden xl:block">
                  <div className="flex items-center gap-3">
                     <div className="bg-blue-100 rounded-full p-2">
                        <FaPrayingHands className="text-blue-600" />
                     </div>
                     <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">{t('hero.prayer_request')}</p>
                        <p className="text-sm font-bold text-gray-900">{t('hero.here_for_you')}</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Three Card Preview Section */}
        <section className="relative z-10 px-4 py-8 md:py-12 text-start">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-pink-400 to-pink-600 rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-white mb-2">
                    {t('cards.know_us')}
                  </h3>
                  <button className="text-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-white mb-2">
                    {t('cards.events')}
                  </h3>
                  <button className="text-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-gray-400 to-gray-600 rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-white mb-2">
                    {t('cards.next_steps')}
                  </h3>
                  <button className="text-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Welcome Home Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-full mx-auto relative overflow-hidden">
          <div className="marquee-track flex items-center gap-x-28 py-2 uppercase font-black text-2xl md:text-4xl text-gray-900">
            {[...Array(13)].map((_, i) => (
              <span key={i}>
                {t('welcome.text')}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-linear-to-r from-blue-700 from-0% to-blue-950 to-100% text-white px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            {t('mission.statement')}
          </h2>
          <p className="text-lg mb-8 text-blue-100 leading-relaxed">
            {t('mission.description')}
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold transition-colors">
            {t('mission.button')}
          </button>
        </div>
      </section>

      {/* Get Connected Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-black mb-4">
            {t('connect.title')}
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg">
            {t('connect.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kids Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-purple-500 to-purple-700 z-0"></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-white mb-3">{t('connect.kids')}</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>

            {/* Youth Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-gray-800 to-black z-0"></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-white mb-3">{t('connect.youth')}</h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>

            {/* Young Adults Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-teal-500 to-teal-700 z-0"></div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-white mb-3">
                  {t('connect.young_adults')}
                </h3>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wait, There's More Section */}
      <section className="bg-white text-gray-900 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-blue-600 mb-4">
            {t('more.wait')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
            {t('more.title')}
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            {t('more.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-teal-50 rounded-lg p-6 text-center hover:bg-teal-100 transition-colors cursor-pointer border border-teal-100">
              <h3 className="text-2xl font-black mb-2 text-teal-800">{t('more.community')}</h3>
              <p className="text-sm text-teal-600 mb-4">
                {t('more.community_desc')}
              </p>
              <button className="text-teal-700 font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('more.view_all')} <span>→</span>
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200">
              <h3 className="text-2xl font-black mb-2 text-gray-900">
                {t('more.prayer')}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {t('more.prayer_desc')}
              </p>
              <button className="text-gray-900 font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('cards.learn_more')} <span>→</span>
              </button>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition-colors cursor-pointer border border-blue-100">
              <h3 className="text-2xl font-black mb-2 text-blue-800">{t('more.service')}</h3>
              <p className="text-sm text-blue-600 mb-4">
                {t('more.service_desc')}
              </p>
              <button className="text-blue-700 font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('more.view_schedule')} <span>→</span>
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold transition-colors">
              {t('more.view_events')}
            </button>
          </div>
        </div>
      </section>

      {/* Latest Happenings */}
      <section className="bg-gray-100 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-gray-600 mb-4">
            {t('happenings.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            {t('happenings.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-white rounded-lg p-6 border-4 border-teal-500 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-teal-100 rounded-lg mb-4 flex items-center justify-center">
                <FaMobileAlt className="text-5xl text-teal-600" />
              </div>
              <h3 className="text-2xl font-black mb-2">
                {t('happenings.app_title')}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {t('happenings.app_desc')}
              </p>
              <button className="text-teal-600 font-bold text-sm hover:underline">
                {t('cards.learn_more')} →
              </button>
            </div>

            {/* Event Card 2 */}
            <div className="bg-white rounded-lg p-6 border-4 border-gray-200 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <FaPrayingHands className="text-5xl text-gray-400" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-gray-900">
                {t('happenings.prayer_title')}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {t('happenings.prayer_desc')}
              </p>
              <button className="text-gray-900 font-bold text-sm hover:underline">
                {t('cards.learn_more')} →
              </button>
            </div>

            {/* Event Card 3 */}
            <div className="bg-blue-600 text-white rounded-lg p-6 border-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                <FaBookOpen className="text-5xl text-blue-100" />
              </div>
              <h3 className="text-2xl font-black mb-2">{t('happenings.service_title')}</h3>
              <p className="text-blue-100 text-sm mb-4">
                {t('happenings.service_desc')}
              </p>
              <button className="text-white font-bold text-sm hover:underline">
                {t('cards.learn_more')} →
              </button>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-bold transition-colors">
              {t('more.view_events')}
            </button>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="bg-blue-50 text-gray-900 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-blue-600 mb-4">
            {t('sermons.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900">
            {t('sermons.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <FaPlay className="text-6xl text-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-gray-900">{t('sermons.recent')}</h3>
                <p className="text-gray-600 text-sm">{t('sermons.recent_desc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <FaPlay className="text-6xl text-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-gray-900">{t('sermons.series')}</h3>
                <p className="text-gray-600 text-sm">{t('sermons.series_desc')}</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-200">
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <FaPlay className="text-6xl text-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-gray-900">{t('sermons.podcast')}</h3>
                <p className="text-gray-600 text-sm">{t('sermons.podcast_desc')}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-bold transition-colors shadow-sm">
              {t('sermons.listen_now')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 py-16">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-black mb-4">{t('footer.about_title')}</h3>
              <p className="text-gray-400 text-sm">
                {t('footer.about_desc')}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.email')}</h3>
              <p className="text-gray-300 text-sm">info@gracechurch.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.find_us')}</h3>
              <p className="text-gray-300 text-sm">
                123 Faith Avenue
                <br />
                Blessed City, ST 12345
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.call_us')}</h3>
              <p className="text-gray-300 text-sm">(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Get Involved
            </a>
            <a href="#" className="hover:text-white">
              Ministries
            </a>
            <a href="#" className="hover:text-white">
              Next Steps
            </a>
            <a href="#" className="hover:text-white">
              Media
            </a>
            <a href="#" className="hover:text-white">
              Events
            </a>
          </div>
          <p className="text-center text-gray-500 text-xs">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </main>
  );
}
