import { AppBar } from "@/components/app-bar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

// Mock data - substituir por dados reais da API
const eventos = [
  {
    id: 1,
    title: "Conferência de Avivamento",
    description: "Três dias de adoração, pregação da palavra e manifestação do Espírito Santo.",
    date: "2024-02-15",
    endDate: "2024-02-17",
    time: "19:00",
    location: "Templo Central",
    image: "/church-conference.png",
    participants: 250,
    type: "conferencia",
  },
  {
    id: 2,
    title: "Retiro de Jovens",
    description: "Final de semana de comunhão, estudos bíblicos e atividades recreativas.",
    date: "2024-03-08",
    endDate: "2024-03-10",
    time: "14:00",
    location: "Chácara Betânia",
    image: "/youth-retreat.png",
    participants: 80,
    type: "retiro",
  },
  {
    id: 3,
    title: "Café da Manhã Solidário",
    description: "Momento de comunhão com arrecadação de alimentos para famílias carentes.",
    date: "2024-02-03",
    time: "08:00",
    location: "Salão Social",
    image: "/community-breakfast.jpg",
    participants: 150,
    type: "social",
  },
]

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppBar title="Eventos" />
      <main className="max-w-xl mx-auto p-4 space-y-4">
        {eventos.map((evento) => (
          <Card key={evento.id} className="overflow-hidden pt-0 pb-0">
            <div className="relative h-48 bg-muted">
              <img src={evento.image || "/placeholder.svg"} alt={evento.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {evento.type}
                </span>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div>
                <h3 className="font-bold text-xl mb-2">{evento.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{evento.description}</p>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(evento.date).toLocaleDateString("pt-BR")}
                    {evento.endDate && ` até ${new Date(evento.endDate).toLocaleDateString("pt-BR")}`}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{evento.time}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{evento.location}</span>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{evento.participants} inscritos</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Inscrever-se
              </Button>
            </div>
          </Card>
        ))}
      </main>
    </div>
  )
}
