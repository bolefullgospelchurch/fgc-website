import { useEffect, useState } from 'react'
import { sanityClient } from '../sanity'
import { useLanguage } from '../context/LanguageContext'
import Navbar from './Navbar'

function Ministries() {
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
    <div className="bg-off-white min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-midnight-navy">
          Our Ministries
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m) => (
            <div
              key={m._id}
              className="bg-off-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col border border-midnight-navy/10"
            >
              <h3 className="text-xl font-semibold mb-3 text-midnight-navy">
                {m.title}
              </h3>

              <p className="text-midnight-navy/70 flex-grow">
                {m.description}
              </p>

              {m.meetingTime && (
                <div className="mt-4 text-sm text-midnight-navy/60 pt-4 border-t border-midnight-navy/10">
                  <span className="font-medium text-midnight-navy/80">
                    Meets:
                  </span>{" "}
                  {m.meetingTime}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Ministries
