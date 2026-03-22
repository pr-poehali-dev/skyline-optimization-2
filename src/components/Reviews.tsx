import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const reviews = [
  {
    name: "Анастасия",
    text: "Вызвала мастера по стиральной машине — приехал в тот же день! Быстро нашёл причину, сделал всё аккуратно. Очень довольна, рекомендую всем!",
    rating: 5,
    service: "Ремонт стиральной машины",
  },
  {
    name: "Александра",
    text: "Посудомоечная машина перестала сливать воду. Мастер приехал через 2 часа после звонка, всё починил за 40 минут. Цена приятно удивила.",
    rating: 5,
    service: "Ремонт посудомоечной машины",
  },
  {
    name: "Антон",
    text: "Обратился с поломкой кофемашины. Думал уже выбрасывать, но мастер реанимировал её за один визит. Дали гарантию 6 месяцев — это круто.",
    rating: 5,
    service: "Ремонт кофемашины",
  },
  {
    name: "Виктор",
    text: "Стиралка не отжимала. Мастер приехал утром, к обеду машина уже работала. Профессионально, вежливо, без лишних слов. Буду обращаться снова.",
    rating: 5,
    service: "Ремонт стиральной машины",
  },
]

export function Reviews() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-white/50">Нам доверяют жители Сургута</p>
        </div>

        <div className="max-w-2xl mx-auto relative h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 glass rounded-3xl p-8 flex flex-col justify-between"
            >
              <p className="text-white/80 text-lg leading-relaxed">
                "{reviews[current].text}"
              </p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-semibold">{reviews[current].name}</p>
                  <p className="text-white/40 text-sm">{reviews[current].service}</p>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: reviews[current].rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-blue-400 w-6" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}