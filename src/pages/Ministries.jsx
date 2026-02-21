import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sanityClient } from '../sanity'
import { useLanguage } from '../context/LanguageContext'
import Navbar from '../components/Navbar'
import MinistryGrid from '../components/ministries/MinistryGrid'

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
    <main className="min-h-screen bg-sky-blue/20">
      <Navbar transparent />
      <section className="bg-midnight-navy text-off-white px-4 py-16 pt-32 md:py-20 md:pt-32">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-bold text-sky-blue/80 mb-4">
            {t('ministries.label')}
          </p>
          <h1 className="text-4xl md:text-5xl font-black">
            {t('ministries.title')}
          </h1>
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
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
    </main>
  )
}

export default Ministries
