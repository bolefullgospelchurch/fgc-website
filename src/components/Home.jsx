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
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={stage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy via-transparent to-transparent z-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-16">
            {/* Badge */}
            <div className="inline-block bg-off-white/10 backdrop-blur-sm border border-off-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in shadow-lg">
              <span className="text-sky-blue font-bold text-sm tracking-widest uppercase">
                  {t('hero.invited')}
                </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-off-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
                {t('hero.jesus_prefix')} <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-coral-red">
                  {t('hero.jesus_suffix')}
                </span>
            </h1>

            {/* Subtext / Verse */}
             <p className="text-xl md:text-2xl text-off-white/85 max-w-3xl mx-auto mb-10 leading-relaxed font-bold drop-shadow-md">
                "{t('hero.verse')}" <br />
               <span className="text-sky-blue font-semibold text-lg mt-3 block">{t('hero.verse_ref')}</span>
              </p>

            {/* Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-deep-blue/30 hover:scale-105 flex items-center gap-2">
                  <FaPlay className="text-sm" /> {t('hero.watch_message')}
                </button>
                <button className="bg-off-white/10 hover:bg-off-white/20 backdrop-blur-md border border-off-white/30 text-off-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105">
                  {t('hero.new_here')}
                </button>
             </div>

             {/* Service Time Footer */}
             <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-off-white/80 border-t border-off-white/10 pt-8 max-w-2xl mx-auto">
                 <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-sky-blue mb-1">{t('hero.join_live')}</p>
                  <p className="text-lg text-off-white font-medium">{t('hero.service_time')}</p>
                 </div>
                <div className="hidden md:block w-px h-12 bg-off-white/20"></div>
                  <div className="text-center">
                  <p className="text-sm font-semibold uppercase tracking-wider text-sky-blue mb-1">{t('hero.prayer_request')}</p>
                  <p className="text-lg text-off-white font-medium">{t('hero.here_for_you')}</p>
                 </div>
             </div>
        </div>

        {/* Three Card Preview Section */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-coral-red to-sky-blue rounded-lg overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-midnight-navy/40 group-hover:bg-midnight-navy/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-off-white mb-2">
                    {t('cards.know_us')}
                  </h3>
                  <button className="text-off-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-deep-blue to-midnight-navy rounded-lg overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-midnight-navy/40 group-hover:bg-midnight-navy/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-off-white mb-2">
                    {t('cards.events')}
                  </h3>
                  <button className="text-off-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative h-56 md:h-64 bg-linear-to-br from-sky-blue to-deep-blue rounded-lg overflow-hidden group cursor-pointer transition-transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-midnight-navy/40 group-hover:bg-midnight-navy/50 transition-colors z-10"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-3xl font-black text-off-white mb-2">
                    {t('cards.next_steps')}
                  </h3>
                  <button className="text-off-white font-bold text-sm hover:underline flex items-center gap-1">
                    {t('cards.learn_more')} <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Welcome Home Section */}
      <section className="bg-off-white py-12 md:py-16">
        <div className="max-w-full mx-auto relative overflow-hidden">
          <div className="marquee-track flex items-center gap-x-28 py-2 uppercase font-black text-2xl md:text-4xl text-midnight-navy">
            {[...Array(13)].map((_, i) => (
              <span key={i}>
                {t('welcome.text')}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-linear-to-r from-deep-blue from-0% to-midnight-navy to-100% text-off-white px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            {t('mission.statement')}
          </h2>
          <p className="text-lg mb-8 text-off-white/80 leading-relaxed">
            {t('mission.description')}
          </p>
          <button className="bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-3 rounded-lg font-bold transition-colors">
            {t('mission.button')}
          </button>
        </div>
      </section>

      {/* Get Connected Section */}
      <section className="bg-sky-blue/10 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-midnight-navy mb-4">
            {t('connect.title')}
          </h2>
          <p className="text-center text-midnight-navy/80 mb-12 max-w-2xl mx-auto text-lg">
            {t('connect.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Kids Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-sky-blue to-deep-blue z-0"></div>
              <div className="absolute inset-0 bg-midnight-navy/30 group-hover:bg-midnight-navy/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-off-white mb-3">{t('connect.kids')}</h3>
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>

            {/* Youth Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-deep-blue to-midnight-navy z-0"></div>
              <div className="absolute inset-0 bg-midnight-navy/30 group-hover:bg-midnight-navy/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-off-white mb-3">{t('connect.youth')}</h3>
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>

            {/* Young Adults Ministry */}
            <div className="relative h-80 rounded-lg overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-b from-coral-red to-sky-blue z-0"></div>
              <div className="absolute inset-0 bg-midnight-navy/30 group-hover:bg-midnight-navy/40 transition-colors z-10"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <h3 className="text-4xl font-black text-off-white mb-3">
                  {t('connect.young_adults')}
                </h3>
                <button className="bg-deep-blue hover:bg-deep-blue/90 text-off-white px-6 py-2 rounded-lg font-bold transition-colors w-fit">
                  {t('cards.learn_more')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wait, There's More Section */}
      <section className="bg-sky-blue/10 text-midnight-navy px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-sky-blue mb-4">
            {t('more.wait')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-6">
            {t('more.title')}
          </h2>
          <p className="text-center text-midnight-navy/70 mb-8 max-w-2xl mx-auto text-lg">
            {t('more.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-sky-blue/10 rounded-lg p-6 text-center hover:bg-sky-blue/15 transition-colors cursor-pointer border border-sky-blue/30">
              <h3 className="text-2xl font-black mb-2 text-deep-blue">{t('more.community')}</h3>
              <p className="text-sm text-deep-blue/80 mb-4">
                {t('more.community_desc')}
              </p>
              <button className="text-deep-blue font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('more.view_all')} <span>→</span>
              </button>
            </div>
            <div className="bg-off-white rounded-lg p-6 text-center hover:bg-off-white/80 transition-colors cursor-pointer border border-midnight-navy/10">
              <h3 className="text-2xl font-black mb-2 text-midnight-navy">
                {t('more.prayer')}
              </h3>
              <p className="text-sm text-midnight-navy/70 mb-4">
                {t('more.prayer_desc')}
              </p>
              <button className="text-deep-blue font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('cards.learn_more')} <span>→</span>
              </button>
            </div>
            <div className="bg-coral-red/10 rounded-lg p-6 text-center hover:bg-coral-red/15 transition-colors cursor-pointer border border-coral-red/30">
              <h3 className="text-2xl font-black mb-2 text-coral-red">{t('more.service')}</h3>
              <p className="text-sm text-coral-red/90 mb-4">
                {t('more.service_desc')}
              </p>
              <button className="text-coral-red font-bold text-sm hover:underline flex items-center justify-center gap-1 mx-auto">
                {t('more.view_schedule')} <span>→</span>
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-3 rounded-lg font-bold transition-colors">
              {t('more.view_events')}
            </button>
          </div>
        </div>
      </section>

      {/* Latest Happenings */}
      <section className="bg-sky-blue/10 px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-midnight-navy/60 mb-4">
            {t('happenings.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            {t('happenings.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-off-white rounded-lg p-6 border-4 border-sky-blue hover:shadow-lg transition-shadow">
              <div className="h-40 bg-sky-blue/15 rounded-lg mb-4 flex items-center justify-center">
                <FaMobileAlt className="text-5xl text-sky-blue" />
              </div>
              <h3 className="text-2xl font-black mb-2">
                {t('happenings.app_title')}
              </h3>
              <p className="text-midnight-navy/70 text-sm mb-4">
                {t('happenings.app_desc')}
              </p>
              <button className="text-sky-blue font-bold text-sm hover:underline">
                {t('cards.learn_more')} →
              </button>
            </div>

            {/* Event Card 2 */}
            <div className="bg-off-white rounded-lg p-6 border-4 border-midnight-navy/10 hover:shadow-lg transition-shadow">
              <div className="h-40 bg-off-white rounded-lg mb-4 flex items-center justify-center border border-midnight-navy/10">
                <FaPrayingHands className="text-5xl text-midnight-navy/40" />
              </div>
              <h3 className="text-2xl font-black mb-2 text-midnight-navy">
                {t('happenings.prayer_title')}
              </h3>
              <p className="text-midnight-navy/70 text-sm mb-4">
                {t('happenings.prayer_desc')}
              </p>
              <button className="text-deep-blue font-bold text-sm hover:underline">
                {t('cards.learn_more')} →
              </button>
            </div>

            {/* Event Card 3 */}
            <div className="bg-deep-blue text-off-white rounded-lg p-6 border-4 border-deep-blue hover:shadow-lg transition-shadow">
              <div className="h-40 bg-sky-blue/40 rounded-lg mb-4 flex items-center justify-center">
                <FaBookOpen className="text-5xl text-off-white" />
              </div>
              <h3 className="text-2xl font-black mb-2">{t('happenings.service_title')}</h3>
              <p className="text-off-white/80 text-sm mb-4">
                {t('happenings.service_desc')}
              </p>
              <button className="text-off-white font-bold text-sm hover:underline">
                {t('cards.learn_more')} →
              </button>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-3 rounded-lg font-bold transition-colors">
              {t('more.view_events')}
            </button>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="bg-sky-blue/10 text-midnight-navy px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-bold text-sky-blue mb-4">
            {t('sermons.label')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-midnight-navy">
            {t('sermons.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-midnight-navy/10">
              <div className="h-48 bg-deep-blue flex items-center justify-center">
                <FaPlay className="text-6xl text-off-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-midnight-navy">{t('sermons.recent')}</h3>
                <p className="text-midnight-navy/70 text-sm">{t('sermons.recent_desc')}</p>
              </div>
            </div>
            <div className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-midnight-navy/10">
              <div className="h-48 bg-deep-blue flex items-center justify-center">
                <FaPlay className="text-6xl text-off-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-midnight-navy">{t('sermons.series')}</h3>
                <p className="text-midnight-navy/70 text-sm">{t('sermons.series_desc')}</p>
              </div>
            </div>
            <div className="bg-off-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-midnight-navy/10">
              <div className="h-48 bg-deep-blue flex items-center justify-center">
                <FaPlay className="text-6xl text-off-white/90" />
              </div>
              <div className="p-6">
                <h3 className="font-black mb-2 text-midnight-navy">{t('sermons.podcast')}</h3>
                <p className="text-midnight-navy/70 text-sm">{t('sermons.podcast_desc')}</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <button className="bg-coral-red hover:bg-coral-red/90 text-off-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm">
              {t('sermons.listen_now')}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-navy text-off-white px-4 py-16">
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-black mb-4">{t('footer.about_title')}</h3>
              <p className="text-off-white/70 text-sm">
                {t('footer.about_desc')}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.email')}</h3>
              <p className="text-off-white/80 text-sm">info@gracechurch.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.find_us')}</h3>
              <p className="text-off-white/80 text-sm">
                123 Faith Avenue
                <br />
                Blessed City, ST 12345
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">{t('footer.call_us')}</h3>
              <p className="text-off-white/80 text-sm">(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-off-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-off-white/60">
            <a href="#" className="hover:text-off-white">
              Home
            </a>
            <a href="#" className="hover:text-off-white">
              Get Involved
            </a>
            <a href="#" className="hover:text-off-white">
              Ministries
            </a>
            <a href="#" className="hover:text-off-white">
              Next Steps
            </a>
            <a href="#" className="hover:text-off-white">
              Media
            </a>
            <a href="#" className="hover:text-off-white">
              Events
            </a>
          </div>
          <p className="text-center text-off-white/50 text-xs">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </main>
  );
}
