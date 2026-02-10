import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sanityClient } from '../sanity'
import { useLanguage } from '../context/LanguageContext'
import Navbar from '../components/Navbar'

function Ministries() {
  const { t } = useTranslation()
  const { language: lang } = useLanguage()
  const [ministries, setMinistries] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "ministry"]{
        _id,
        "title": title.${lang},
        "description": description.${lang},
        "meetingTime": meetingTime.${lang}
      }`)
      .then(setMinistries)
  }, [lang])

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ministries.map((m) => (
              <div
                key={m._id}
                className="bg-off-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col border border-midnight-navy/10"
              >
                <h3 className="text-xl font-semibold mb-3 text-midnight-navy">
                  {m.title}
                </h3>

                <p className="text-midnight-navy/70 grow">
                  {m.description}
                </p>

                {m.meetingTime && (
                  <div className="mt-4 text-sm text-midnight-navy/60 pt-4 border-t border-midnight-navy/10">
                    <span className="font-medium text-midnight-navy/80">
                      {t('ministries.meets')}
                    </span>{" "}
                    {m.meetingTime}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Ministries
