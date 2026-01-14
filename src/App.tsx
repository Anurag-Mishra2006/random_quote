import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

type Quote = {
  q: string
}

function App() {
  const [quote, setQuote] = useState("")
  const [quotes, setQuotes] = useState<Quote[]>([])

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await axios.get("/api/random.ts")
        const res2 = await axios.get("/api/quotes.ts")

        setQuote(res.data[0].q)
        setQuotes(res2.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchQuote()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white flex justify-center items-start p-6">
      <div className="w-full max-w-4xl space-y-10">

        {/* Header */}
        <header className="text-center">
          <h2 className="text-sm uppercase tracking-widest text-gray-400">
            Daily Inspiration
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            Quote of the Day
          </h1>
        </header>

        {/* Featured Quote */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg">
          <p className="text-2xl md:text-3xl font-semibold text-center leading-relaxed">
            “{quote}”
          </p>
        </div>

        {/* Quotes List */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            All Quotes
          </h2>

          <div className="grid gap-4 max-h-[400px] overflow-y-auto pr-2">
            {quotes.map((obj, i) => (
              <div
                key={i}
                className="bg-gray-100 text-gray-900 rounded-xl p-4 shadow hover:shadow-md transition"
              >
                <p className="text-lg font-medium leading-snug">
                  {obj.q}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default App
