import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import Icon from "@/components/ui/icon"

const prices = [
  {
    category: "Стиральные машины",
    icon: "WashingMachine",
    fallback: "Droplets",
    color: "text-blue-400",
    items: [
      { name: "Диагностика", price: "Бесплатно", note: "при заказе ремонта" },
      { name: "Замена подшипника", price: "от 2 850 ₽" },
      { name: "Замена помпы", price: "от 2 150 ₽" },
      { name: "Замена ТЭНа", price: "от 1 850 ₽" },
      { name: "Замена модуля управления", price: "от 3 350 ₽" },
    ],
  },
  {
    category: "Посудомоечные машины",
    icon: "Utensils",
    fallback: "Sparkles",
    color: "text-purple-400",
    items: [
      { name: "Диагностика", price: "Бесплатно", note: "при заказе ремонта" },
      { name: "Устранение протечки", price: "от 1 850 ₽" },
      { name: "Замена помпы", price: "от 2 350 ₽" },
      { name: "Замена ТЭНа", price: "от 2 150 ₽" },
      { name: "Чистка фильтров", price: "от 1 150 ₽" },
    ],
  },
  {
    category: "Мелкая техника",
    icon: "Zap",
    fallback: "Zap",
    color: "text-pink-400",
    items: [
      { name: "Диагностика", price: "Бесплатно", note: "при заказе ремонта" },
      { name: "Ремонт кофемашины", price: "от 1 550 ₽" },
      { name: "Ремонт пылесоса", price: "от 1 150 ₽" },
      { name: "Ремонт микроволновки", price: "от 1 350 ₽" },
      { name: "Ремонт утюга", price: "от 850 ₽" },
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Цены на ремонт
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 mt-6 text-lg max-w-xl"
          >
            Точная стоимость определяется после диагностики. Выезд и диагностика бесплатны при заказе ремонта.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prices.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-white/5">
                    <Icon name={block.icon} fallback={block.fallback} className={`w-6 h-6 ${block.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{block.category}</h3>
                </div>

                <div className="space-y-4">
                  {block.items.map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                      <div>
                        <span className="text-white/80 text-sm">{item.name}</span>
                        {item.note && <p className="text-white/40 text-xs mt-0.5">{item.note}</p>}
                      </div>
                      <span className={`text-sm font-semibold ${item.price === "Бесплатно" ? "text-green-400" : "text-white"}`}>
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="tel:+79995109840"
                  className="mt-8 w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
                >
                  📞 Вызвать мастера
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}