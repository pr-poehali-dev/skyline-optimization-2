export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              СмаСервис<span className="text-blue-400">.</span>
            </a>
            <p className="text-white/50 leading-relaxed">
              Профессиональный ремонт бытовой техники с гарантией. Выезд мастера в день обращения.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Навигация</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Наши работы</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Мы ремонтируем</h4>
            <ul className="space-y-4 text-white/60">
              <li><span>Стиральные машины</span></li>
              <li><span>Посудомоечные машины</span></li>
              <li><span>Кофемашины</span></li>
              <li><span>Мелкая бытовая техника</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Позвоните нам</h4>
            <p className="text-white/60 mb-4">Сломалась техника? Вызовите мастера!</p>
            <a
              href="tel:+79995109840"
              className="text-xl font-medium hover:text-blue-400 transition-colors"
            >
              +7 (999) 510-98-40
            </a>
            <p className="text-white/40 mt-2 text-sm">Николай</p>
            <a
              href="https://max.ru/u/f9LHodD0cOKt2hMEYZRODwlXwAQI7dDzcxuV6p-stiu0U9t4nXVbG8abp0I"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
            >
              <img src="https://max.ru/favicon.ico" alt="MAX" className="w-4 h-4" />
              Написать в MAX
            </a>
            <a
              href="https://vk.com/cma.remont.surgut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-medium"
            >
              <img src="https://vk.com/favicon.ico" alt="ВКонтакте" className="w-4 h-4" />
              Мы ВКонтакте!
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2025 СмаСервис. Все права защищены.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}