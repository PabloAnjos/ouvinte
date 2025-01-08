import { Pessoas } from "./Pessoas";
import imgStarGray from '../assets/images/star-gray.png'


export function AvaliacaoProduto() {
    return (
        <>
            <div className="w-1/2 h-full flex flex-col">
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


                    <form className="bg-secondary-background w-[540px] h-[500px] ml-10 rounded-lg">
                        <h1 className="text-text-white text-2xl font-semibold ml-10 mt-5">Deixe seu review</h1>
                        <hr className="text-accent-green mt-1 w-60 ml-10"/>

                        <div className="p-10 flex flex-col">
                                <label className="text-text-white text-base font-light">Nome</label>
                                <input type="text" className="w-[450px] h-9 bg-inputs-color rounded-lg mt-2"/>

                                <label className="text-text-white text-base font-light mt-5">Review</label>
                                <input type="text" name="" id="" className="bg-inputs-color w-[450px] h-[72px] rounded-lg mt-2"/>

                                <label className="text-text-white text-base font-light mt-5">Estrelas</label>
                                <div className="flex mt-3">
                                    <img src={imgStarGray} alt="" className="w-10 h-10 hover:cursor-pointer"/>
                                    <img src={imgStarGray} alt="" className="w-10 h-10 hover:cursor-pointer"/>
                                    <img src={imgStarGray} alt="" className="w-10 h-10 hover:cursor-pointer"/>
                                    <img src={imgStarGray} alt="" className="w-10 h-10 hover:cursor-pointer"/>
                                    <img src={imgStarGray} alt="" className="w-10 h-10 hover:cursor-pointer"/>
                                </div>

                                <button className="bg-accent-green w-[450px] h-14 mt-8 rounded-lg text-text-white text-2xl font-semibold hover:bg-[#50a73b] ">Enviar</button>
                        </div>
                    </form>
            </div>
        </>
    )
}