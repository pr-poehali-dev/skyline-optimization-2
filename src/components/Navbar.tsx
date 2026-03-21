import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import { LeadFormModal } from "@/components/LeadFormModal"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Услуги", href: "#services" },
    { name: "Наши работы", href: "#work" },
    { name: "Прайс", href: "#pricing" },
    { name: "Акция 20%", href: "#contact" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
            "glass bg-black/40"
          )}
        >
          <a href="/" className="text-2xl font-bold tracking-tighter relative z-50">
            СмаСервис<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
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
            <a href="tel:+79995109840" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
              Вызвать мастера
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center md:hidden"
            >
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-light text-white hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={() => { setIsMobileMenuOpen(false); setIsModalOpen(true) }}
                  className="mt-2 bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold"
                >
                  Оставить заявку
                </button>
                <a href="tel:+79995109840" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold">
                  Вызвать мастера
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      <LeadFormModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
