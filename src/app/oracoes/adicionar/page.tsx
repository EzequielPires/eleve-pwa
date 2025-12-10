'use client'

import { AppBar } from "@/components/app-bar";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { FormSelect } from "@/components/ui/form-select";
import { FormSwitch } from "@/components/ui/form-switch";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Label } from "@/components/ui/label";
import { FormProvider, useForm } from "react-hook-form";

export default function Page() {
    const form = useForm();

    return (
        <div>
            <AppBar title="Pedido de oração"></AppBar>
            <FormProvider {...form}>
                <form className="flex flex-col gap-4 px-4">
                    <FormSelect
                        control={form.control}
                        label="Motivo"
                        items={[]}
                        {...form.register('reason')}
                    />
                    <FormTextarea
                        control={form.control}
                        label={'Descrição'}
                        height={160}
                        {...form.register('description')}
                    />
                    <div className="flex items-center justify-between mt-4">
                        <div className="space-y-0.5">
                            <Label>Aceita Visita</Label>
                            <p className="text-sm text-gray-500">Permite que membros da igreja façam visitas</p>
                        </div>
                        <FormSwitch
                            control={form.control}
                            {...form.register('receiveVisit')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Aceita Ligação</Label>
                            <p className="text-sm text-gray-500">Permite que membros da igreja façam ligações</p>
                        </div>
                        <FormSwitch
                            control={form.control}
                            {...form.register('receiveCall')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Publicar no Mural</Label>
                            <p className="text-sm text-gray-500">Torna a oração visível no mural público da igreja</p>
                        </div>
                        <FormSwitch
                            control={form.control}
                            {...form.register('postOnWall')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <Label>Oração Ativa</Label>
                            <p className="text-sm text-gray-500">Define se a oração está ativa no sistema</p>
                        </div>
                        <FormSwitch
                            control={form.control}
                            {...form.register('active')}
                        />
                    </div>
                    <Button className="mt-4">Continuar</Button>
                </form>
            </FormProvider>
        </div>
    )
}