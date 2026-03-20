import Icon from "@/components/ui/icon"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Work } from "@/components/Work"
import { Pricing } from "@/components/Pricing"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Pricing />

      {/* Call to Action Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              Готовы получить <br />
              <span className="text-gradient">скидку 20%</span> на первый ремонт?
            </h2>

            <ul className="text-left inline-flex flex-col gap-4 mb-10">
              {[
                "Экономия на первом визите мастера",
                "Профессиональная диагностика и ремонт",
                "Гарантия на все виды работ и запчасти",
                "Оперативный выезд в удобное для вас время",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-white/80">
                  <Icon name="CircleCheck" className="text-green-400 shrink-0" size={22} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mb-10 inline-block px-6 py-3 rounded-2xl border border-blue-400/40 bg-blue-500/10">
              <p className="text-white/60 text-sm mb-1">Назовите промокод при оформлении заявки</p>
              <p className="text-2xl font-bold tracking-widest text-blue-300">СмаПервый</p>
            </div>

            <div>
              <a href="tel:+79995109840" className="px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] inline-block">
                Вызвать мастера
              </a>
            </div>
          </div>
        </div>

        {/* Background Gradient for CTA */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      </section>

      <Footer />
    </main>
  )
}

export default Index