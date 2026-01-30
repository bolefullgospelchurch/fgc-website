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
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-28 pb-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Our Ministries
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((m) => (
            <div
              key={m._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 flex flex-col border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {m.title}
              </h3>

              <p className="text-gray-600 flex-grow">
                {m.description}
              </p>

              {m.meetingTime && (
                <div className="mt-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <span className="font-medium text-gray-700">
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
