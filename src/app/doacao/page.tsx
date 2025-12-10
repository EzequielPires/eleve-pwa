"use client"

import { AppBar } from "@/components/app-bar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, QrCode, CreditCard, DollarSign } from "lucide-react"

export default function DoacaoPage() {
  const pixKey = "igreja@exemplo.com.br"
  const bankDetails = {
    bank: "Banco do Brasil",
    agency: "1234-5",
    account: "67890-1",
    cnpj: "12.345.678/0001-90",
  }

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey)
  }

  return (
    <div className="min-h-screen bg-background">
      <AppBar title="Doação" />
      <main className="max-w-xl mx-auto p-4 space-y-6 flex flex-col gap-4">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Contribua com a Obra</h2>
          <p className="text-muted-foreground">Sua doação ajuda a manter e expandir o trabalho da igreja</p>
        </div>

        {/* PIX Section */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-full">
              <QrCode className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">PIX</h3>
              <p className="text-sm text-muted-foreground">Transferência instantânea</p>
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg space-y-2">
            <p className="text-sm text-muted-foreground">Chave PIX</p>
            <div className="flex items-center justify-between gap-2">
              <code className="text-sm font-mono">{pixKey}</code>
              <Button size="sm" variant="ghost" onClick={handleCopyPix}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Gerar QR Code
          </Button>
        </Card>

        {/* Bank Transfer Section */}
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-full">
              <CreditCard className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Transferência Bancária</h3>
              <p className="text-sm text-muted-foreground">Dados para depósito</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm text-muted-foreground">Banco</span>
              <span className="font-medium">{bankDetails.bank}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm text-muted-foreground">Agência</span>
              <span className="font-medium">{bankDetails.agency}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-sm text-muted-foreground">Conta</span>
              <span className="font-medium">{bankDetails.account}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm text-muted-foreground">CNPJ</span>
              <span className="font-medium">{bankDetails.cnpj}</span>
            </div>
          </div>
        </Card>

        {/* Info Card */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <div className="flex gap-3">
            <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-semibold">Toda doação é importante</h4>
              <p className="text-sm text-muted-foreground">
                Seus recursos são utilizados para manter as atividades da igreja, apoiar projetos sociais e expandir a
                palavra de Deus.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
