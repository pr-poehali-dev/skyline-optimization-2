import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"

interface LeadFormModalProps {
  open: boolean
  onClose: () => void
}

export function LeadFormModal({ open, onClose }: LeadFormModalProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("https://functions.poehali.dev/19c09ace-a102-47c4-97d0-0d479cf870d2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, description }),
      })

      if (res.ok) {
        setSuccess(true)
        setName("")
        setPhone("")
        setDescription("")
      } else {
        const data = await res.json()
        setError(data.error || "Ошибка отправки. Попробуйте ещё раз.")
      }
    } catch {
      setError("Ошибка отправки. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setSuccess(false)
    setError("")
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-[#0a0a0a] border border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Оставить заявку</DialogTitle>
        </DialogHeader>

        {success ? (
          <div className="py-8 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <Icon name="CircleCheck" className="text-green-400" size={36} />
            </div>
            <p className="text-xl font-semibold">Заявка отправлена!</p>
            <p className="text-white/60">Мы свяжемся с вами в ближайшее время.</p>
            <Button onClick={handleClose} className="mt-2 bg-white text-black hover:bg-white/90 rounded-full px-8">
              Закрыть
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div>
              <label className="text-sm text-white/60 mb-1 block">Ваше имя *</label>
              <Input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Иван Иванов"
                required
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-sm text-white/60 mb-1 block">Телефон *</label>
              <Input
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="+7 999 000 00 00"
                required
                type="tel"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-sm text-white/60 mb-1 block">Опишите проблему</label>
              <Textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Не заряжается телефон, разбит экран..."
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-blue-400 resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="bg-white text-black hover:bg-white/90 rounded-full py-6 text-base font-bold mt-2"
            >
              {loading ? "Отправляем..." : "Отправить заявку"}
            </Button>

            <p className="text-center text-white/40 text-xs">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}