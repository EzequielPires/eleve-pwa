'use client'

import { AppBar } from "@/components/app-bar";
import { ProgramationCard } from "@/components/programation-card";
import { ProgramationDay } from "@/components/programation-day";
import { FormSelect } from "@/components/ui/form-select";
import { FormProvider, useForm } from "react-hook-form";

export default function Page() {
    const form = useForm()

    return (
        <FormProvider {...form}>
            <AppBar title="Progamação" />
            <div className="p-4 flex flex-col gap-4 max-w-xl mx-auto pb-4">
                <FormSelect
                    control={form.control}
                    label="Selecione o mês"
                    items={[]}
                    {...form.register('month')}
                />
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                        <ProgramationDay />
                        <div className="flex-1 flex flex-col gap-4">
                            <ProgramationCard />
                            <ProgramationCard />
                            <ProgramationCard />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <ProgramationDay />
                        <div className="flex-1 flex flex-col gap-4">
                            <ProgramationCard />
                            <ProgramationCard />
                            <ProgramationCard />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <ProgramationDay />
                        <div className="flex-1 flex flex-col gap-4">
                            <ProgramationCard />
                            <ProgramationCard />
                            <ProgramationCard />
                        </div>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}