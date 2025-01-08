import { Pessoas } from "./Pessoas";




export function AvaliacaoProduto() {
    return (
        <>
            <div className="w-1/2 h-full">
                    <h1 className="ml-10 text-text-white text-2xl font-semibold">O que nossos clientes dizem</h1>
                    <hr className="text-accent-green ml-10 w-96 mt-1"/>

                    <Pessoas 
                    name={"Maria das Graças"}
                    data={"19 de setembro de 2024"}
                    comment={"Surpreendentemente confortável e com um som maravilhoso, valeu cada centavo!"}
                    />
                    <Pessoas 
                    name={"Bruno Henrique"}
                    data={"18 de agosto de 2024"}
                    comment={"Design muito bonito e qualidade sonora sem igual. Uso diariamente! Poderia ser um pouco mais confortável."}
                    />
                    <Pessoas 
                    name={"Andreza O."}
                    data={"11 de julho de 2024"}
                    comment={"Gostei muito do fone. Gostei da qualidade dos acabamentos."}
                    />
            </div>
        </>
    )
}