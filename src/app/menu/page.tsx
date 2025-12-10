import { AppBar } from "@/components/app-bar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Church, Users, Calendar, Book, Bell, Heart, Settings, LogOut, ChevronRight, User } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    title: "Sobre a Igreja",
    icon: Church,
    href: "/igreja",
    description: "Conheça nossa história e missão",
  },
  {
    title: "Ministérios",
    icon: Users,
    href: "/ministerios",
    description: "Participe de nossas equipes",
  },
  {
    title: "Agenda",
    icon: Calendar,
    href: "/agenda",
    description: "Próximos cultos e reuniões",
  },
  {
    title: "Eventos",
    icon: Calendar,
    href: "/eventos",
    description: "Conferências e encontros",
  },
  {
    title: "Bíblia",
    icon: Book,
    href: "/biblia",
    description: "Leia e estude as escrituras",
  },
  {
    title: "Avisos",
    icon: Bell,
    href: "/avisos",
    description: "Notificações importantes",
  },
  {
    title: "Orações",
    icon: Heart,
    href: "/oracoes",
    description: "Pedidos e testemunhos",
  },
  {
    title: "Doação",
    icon: Heart,
    href: "/doacao",
    description: "Contribua com a obra",
  },
]

const configItems = [
  { title: "Editar Perfil", icon: User, href: "#" },
  { title: "Configurações", icon: Settings, href: "#" },
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppBar title="Menu" />
      <main className="max-w-xl mx-auto p-4 space-y-6">
        {/* User Profile Section */}
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">Nome do Usuário</h2>
              <p className="text-sm text-muted-foreground">usuario@email.com</p>
            </div>
          </div>
        </Card>

        {/* Main Menu */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground px-1">MENU PRINCIPAL</h3>
          <div className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="py-4 hover:bg-accent transition-colors cursor-pointer shadow-none border-none">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Settings Menu */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground px-1">CONFIGURAÇÕES</h3>
          <div className="flex flex-col gap-2">
            {configItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="py-4 hover:bg-accent transition-colors cursor-pointe shadow-none border-none">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-muted-foreground" />
                    <span className="flex-1 font-medium">{item.title}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <Button variant="destructive" className="w-full" size="lg">
          <LogOut className="w-5 h-5 mr-2" />
          Sair
        </Button>

        {/* App Version */}
        <p className="text-center text-sm text-muted-foreground pb-4">Versão 1.0.0</p>
      </main>
    </div>
  )
}
