import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"
import { LeadFormModal } from "@/components/LeadFormModal"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "Наши работы", href: "#work" },
    { name: "Прайс", href: "#pricing" },
    { name: "Акция 20%", href: "#promo" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div className="max-w-7xl mx-auto rounded-full flex items-center justify-between px-6 py-3 glass bg-black/40">
          <a href="/" className="text-2xl font-bold tracking-tighter">
            СмаСервис<span className="text-blue-400">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Оставить заявку
            </button>
            <a
              href="tel:+79995109840"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Вызвать мастера
            </a>
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex md:hidden bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Оставить заявку
          </button>
        </div>
      </motion.nav>

      <LeadFormModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}