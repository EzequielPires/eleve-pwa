import { ChurchBackground } from "@/components/church-background";

export default function Page() {
    return (
        <div>
            <ChurchBackground />
            <div className="px-4 flex flex-col gap-4">
                <h2 className="text-xl font-semibold">Sobre nós</h2>
                <p>A Comunidade Evangélica Vinde é uma igreja cristã que tem como propósito principal anunciar o amor de Deus e promover o crescimento espiritual de cada pessoa que chega até ela. Com cultos vibrantes, ensino bíblico sólido e um ambiente acolhedor, a Vinde busca ser um lugar onde famílias e indivíduos encontram direção, apoio e comunhão verdadeira.</p>
                <p>Nos encontros semanais, a igreja enfatiza a adoração sincera, a pregação da Palavra e a oração como fundamentos para uma vida transformada. Além dos cultos, a comunidade desenvolve diversos ministérios voltados para crianças, jovens, casais e projetos sociais, tudo com o objetivo de servir à cidade e manifestar o evangelho na prática.</p>
                <p>A Vinde valoriza a simplicidade, a unidade e a presença de Deus. Aqui, cada pessoa é convidada a caminhar com Cristo, descobrir seus dons e participar ativamente da missão de alcançar outras vidas. Com um coração aberto e uma visão voltada para o Reino, a Comunidade Evangélica Vinde deseja ser um farol de esperança e fé para todos que a procuram.</p>
            </div>
        </div>
    )
}