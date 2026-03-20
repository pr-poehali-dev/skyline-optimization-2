import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Icon from '@/components/ui/icon'

const services = [
  {
    iconName: "WashingMachine",
    fallback: "Droplets",
    color: "text-blue-400",
    title: "Стиральные машины",
    description: "Ремонт любых неисправностей: не крутит барабан, течёт, не отжимает, коды ошибок. Работаем со всеми марками — Samsung, LG, Bosch, Indesit и другими.",
  },
  {
    iconName: "Utensils",
    fallback: "Sparkles",
    color: "text-purple-400",
    title: "Посудомоечные машины",
    description: "Устраняем протечки, проблемы с нагревом, засоры, замену помпы и насоса. Быстрая диагностика и ремонт на дому.",
  },
  {
    iconName: "Zap",
    fallback: "Zap",
    color: "text-indigo-400",
    title: "Мелкая бытовая техника",
    description: "Ремонт кофемашин, пылесосов, микроволновок, утюгов, блендеров и другой техники. Диагностика бесплатно при заказе ремонта.",
  },
  {
    iconName: "ShieldCheck",
    fallback: "Shield",
    color: "text-pink-400",
    title: "Гарантия и сервис",
    description: "Даём письменную гарантию до 1 года на все виды работ. Используем только оригинальные запчасти. Выезд в день обращения.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Что мы ремонтируем
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                    <Icon name={service.iconName} fallback={service.fallback} className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                  Подробнее <div className="w-4 h-[1px] bg-current transition-all group-hover:w-8" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
