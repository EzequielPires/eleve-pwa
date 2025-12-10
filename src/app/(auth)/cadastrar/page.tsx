'use client'

import { AppBar } from "@/components/app-bar";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

export default function Page() {
    const form = useForm();

    return (
        <div>
            <AppBar
                title="Cadastrar conta"
            />
            <FormProvider {...form}>
                <form className="px-4 flex flex-col gap-4">
                    <FormInput
                        control={form.control}
                        label="Nome"
                        {...form.register('name')}
                    />
                    <FormInput
                        control={form.control}
                        label="Celular"
                        {...form.register('phone')}
                    />
                    <FormInput
                        control={form.control}
                        label="E-mail"
                        {...form.register('email')}
                    />
                    <FormInput
                        control={form.control}
                        label="Senha"
                        type="password"
                        {...form.register('password')}
                    />
                    <Button>Continuar</Button>
                    <div className="flex justify-center gap-4 w-full mt-4">
                        <span>Já tem uma conta?</span>
                        <Link href={'/entrar'} className="font-semibold">Entrar</Link>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}