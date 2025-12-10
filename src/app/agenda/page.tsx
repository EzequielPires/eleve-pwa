"use client"

import { AppBar } from "@/components/app-bar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { useState } from "react"

const mockEvents = [
  {
    id: 1,
    title: "Culto de Celebração",
    date: "2026-01-21",
    time: "19:00",
    location: "Templo Principal",
    type: "culto",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Escola Bíblica Dominical",
    date: "2026-01-21",
    time: "09:00",
    location: "Salas de Aula",
    type: "ensino",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "Reunião de Oração",
    date: "2026-01-24",
    time: "20:00",
    location: "Sala de Oração",
    type: "oracao",
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Culto de Jovens",
    date: "2026-01-26",
    time: "19:30",
    location: "Auditório",
    type: "culto",
    color: "bg-orange-500",
  },
  {
    id: 5,
    title: "Reunião de Líderes",
    date: "2026-01-28",
    time: "14:00",
    location: "Sala de Reuniões",
    type: "reuniao",
    color: "bg-red-500",
  },
]

export default function AgendaPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const monthYear = currentDate.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  })

  const isToday = (day: number) => {
    const today = new Date()
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    )
  }

  const isSelectedDate = (day: number) => {
    return (
      day === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    )
  }

  const hasEvents = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(day).padStart(2, "0")}`
    return mockEvents.some((event) => event.date === dateStr)
  }

  const getEventsForSelectedDate = () => {
    const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(
      2,
      "0",
    )}-${String(selectedDate.getDate()).padStart(2, "0")}`
    return mockEvents.filter((event) => event.date === dateStr)
  }

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
  }

  const selectedEvents = getEventsForSelectedDate()

  return (
    <div className="min-h-screen bg-background pb-20">
      <AppBar title="Agenda" />

      <main className="max-w-xl mx-auto">
        {/* Calendar Header */}
        <div className="sticky top-14 bg-background z-10 border-b">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold capitalize">{monthYear}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevMonth} className="h-8 w-8 bg-transparent">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth} className="h-8 w-8 bg-transparent">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="px-4 pb-4">
            {/* Week days header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
                <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, index) => {
                const day = index + 1
                const isCurrentDay = isToday(day)
                const isSelected = isSelectedDate(day)
                const hasEvent = hasEvents(day)

                return (
                  <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`
                      aspect-square rounded-lg flex items-center justify-center relative text-sm
                      transition-colors
                      ${isSelected ? "bg-primary text-primary-foreground font-semibold" : ""}
                      ${isCurrentDay && !isSelected ? "border-2 border-primary font-medium" : ""}
                      ${!isSelected && !isCurrentDay ? "hover:bg-accent" : ""}
                    `}
                  >
                    {day}
                    {hasEvent && (
                      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-current rounded-full" />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Events List for Selected Date */}
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">
              {selectedDate.toLocaleDateString("pt-BR", {
                weekday: "long",
                day: "numeric",
                month: "long",
              })}
            </h3>
            <Button size="sm" className="h-8 gap-1">
              <Plus className="h-4 w-4" />
              Novo
            </Button>
          </div>

          {selectedEvents.length === 0 ? (
            <Card className="p-8">
              <div className="text-center text-muted-foreground">
                <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>Nenhum evento para este dia</p>
              </div>
            </Card>
          ) : (
            <div className="space-y-3">
              {selectedEvents.map((event) => (
                <Card key={event.id} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex gap-3">
                    <div className={`w-1 rounded-full ${event.color}`} />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold">{event.title}</h4>
                        <span className="text-xs px-2 py-1 bg-accent rounded-full whitespace-nowrap">{event.type}</span>
                      </div>

                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
