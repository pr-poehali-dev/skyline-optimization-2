import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

const cases = [
  {
    title: "Samsung WW60J4000",
    category: "Стиральная машина",
    image: "https://cdn.poehali.dev/projects/41ee256c-ef61-4132-bc80-411c69692e28/bucket/29c93aeb-b3f1-4f47-bb86-e143e37534a6.jpg",
    color: "from-blue-500/20 to-cyan-500/20",
    description: "Машина не отжимала — вышел из строя модуль управления. Провели диагностику, заменили плату за 2 часа. Клиент получил гарантию на 12 месяцев.",
    tags: ["Замена платы", "Гарантия 12 мес."],
  },
  {
    title: "Bosch SMS40D02",
    category: "Посудомоечная машина",
    image: "https://cdn.poehali.dev/projects/41ee256c-ef61-4132-bc80-411c69692e28/files/acf7475f-7d36-4e1b-89dc-ffa361573346.jpg",
    color: "from-purple-500/20 to-pink-500/20",
    description: "Течь из-под машины — треснул сальник помпы. Выехали в тот же день, заменили деталь на оригинальную. Машина работает как новая.",
    tags: ["Ремонт помпы", "Выезд в день"],
  },
  {
    title: "Delonghi ECAM",
    category: "Кофемашина",
    image: "https://cdn.poehali.dev/projects/41ee256c-ef61-4132-bc80-411c69692e28/files/5a42cda7-f28b-46b0-9104-fa5cea903393.jpg",
    color: "from-orange-500/20 to-red-500/20",
    description: "Кофемашина перестала молоть зерна — засор жерновов и износ шестерёнки. Прочистка и замена запчасти вернули любимый кофе на место.",
    tags: ["Мелкая техника", "Диагностика бесплатно"],
  },
]

export function Work() {
  return (
    <section id="work" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Примеры работ
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 max-w-md"
            >
              Реальные случаи из нашей практики — ремонтируем быстро и надёжно.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
          >
            Все случаи
          </motion.button>
        </div>

        <div className="space-y-20">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <GlassCard className="p-0 overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`p-12 flex flex-col justify-center relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                    <div className="relative z-10">
                      <span className="text-sm font-medium text-white/50 mb-4 block uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">
                        {item.title}
                      </h3>
                      <p className="text-white/70 mb-8 max-w-md">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm font-medium flex-wrap">
                        {item.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] md:h-auto overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}