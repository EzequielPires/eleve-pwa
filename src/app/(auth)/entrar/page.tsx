'use client'

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

export default function Page() {
    const form = useForm()
    const router = useRouter();

    return (
        <div>
            <div className="relative">
                <AspectRatio ratio={16 / 8} className="bg-gray-900 flex items-center justify-center pb-8">
                    <Link href={'/'}>
                        <Image
                            src={`/logo-h-white.png`}
                            alt="Photo by Drew Beamer"
                            width={200}
                            height={48}
                        />
                    </Link>
                </AspectRatio>
                <Button className="absolute z-50 top-4 left-4" size={'icon-lg'} variant={"outline"} onClick={() => router.back()}>
                    <ArrowLeft />
                </Button>
                <div className="w-full bg-white absolute left-0 right-0 border-0 bottom-0 h-8 rounded-t-2xl z-50">
                    <FormProvider {...form}>
                        <form className="flex flex-col gap-4 p-4">
                            <div className="flex flex-col items-center mb-4">
                                <h1 className="text-2xl font-semibold">Bem vindo de volta</h1>
                                <p>Entre na sua conta EleveChurch.</p>
                            </div>
                            <FormInput
                                control={form.control}
                                label={'Email'}
                                {...form.register('email')}
                            />
                            <FormInput
                                control={form.control}
                                label={'Senha'}
                                type="password"
                                {...form.register('password')}
                            />
                            <div className="flex justify-end w-full">
                                <Link href={'/recuperar-senha'} className="font-semibold">Esqueceu sua senha?</Link>
                            </div>
                            <Button>Entrar</Button>
                            <div className="flex justify-center gap-4 w-full mt-4">
                                <span>Não tem uma conta?</span>
                                <Link href={'/cadastrar'} className="font-semibold">Cadastrar</Link>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}