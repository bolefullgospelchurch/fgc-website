import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sanityClient } from '../sanity'
import { useLanguage } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import MinistryGrid from '../components/ministries/MinistryGrid'
import Footer from '../components/Footer'

function Ministries() {
  const { t } = useTranslation()
  const { language: lang } = useLanguage()
  const [ministries, setMinistries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    sanityClient
      .fetch(`*[_type == "ministry" && coalesce(isActive, true) == true] | order(order asc){
        _id,
        title,
        description,
        meetingDayAndTime,
        location,
        "slug": slug.current,
        "heroImageUrl": heroImage.asset->url,
        "galleryUrls": gallery[].asset->url
      }`)
      .then((data) => setMinistries(data || []))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <main className="min-h-screen bg-off-white">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-6 sm:px-10 lg:px-16 py-16 pt-32 md:py-24 md:pt-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-sky-blue mb-6">
            {t('ministries.label')}
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-off-white leading-none tracking-tight">
            {t('ministries.title')}
          </h1>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center text-midnight-navy/70">
              {t('ministries.loading')}
            </div>
          ) : ministries.length > 0 ? (
            <MinistryGrid ministries={ministries} lang={lang} />
          ) : (
            <div className="text-center text-midnight-navy/70">
              {t('ministries.empty')}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Ministries
