import imgProduct from "../assets/images/product.png"
import imgStarGreen from "../assets/images/star-green.png"


export function Produto() {
    return (
        <>
            <div className="w-1/2 h-full">
                    <img src={imgProduct} alt="Imagem Headphone" />
                    <h1 className="text-3xl text-text-white p-3 mt-4">Fone de Ouvido Escutante Deluxe On-Ear</h1>
                    
                    <div className="flex items-center justify-between p-3">
                        <p className="text-3xl text-text-white font-bold"><span className="text-accent-green font-extralight">R$</span> 699</p>
                        
                        <div className="flex gap-1">
                                <img src={imgStarGreen} alt="Icon Star Green" />
                                <img src={imgStarGreen} alt="Icon Star Green" />
                                <img src={imgStarGreen} alt="Icon Star Green" />
                                <img src={imgStarGreen} alt="Icon Star Green" />
                                <img src={imgStarGreen} alt="Icon Star Green" />
                        </div>
                    </div>

                    <p className="text-secondary-text text-base font-light mt-10 p-3">
                        Eleve sua experiência sonora com o Fone de Ouvido Escutante Deluxe On-Ear, um acessório de áudio premium com design sofisticado 
                        e desempenho impecável. Com uma combinação de metal escovado e couro de alta qualidade, este fone de ouvido foi projetado para 
                        oferecer o máximo de conforto e um som cristalino. Ideal para quem busca estilo e alta performance, o Escutante Deluxe proporciona 
                        graves profundos e agudos nítidos, garantindo uma imersão completa em qualquer gênero musical.
                    </p>

                    <hr  className="text-[#525252] mt-10"/>

                    <h2 className="text-secondary-text font-bold mt-5 p-3">Especificações:</h2>
                    <ul className="text-secondary-text text-base font-light p-3 list-disc">
                        <li>Modelo: Escutante Deluxe On-Ear</li>
                        <li>Material: Alumínio escovado com almofadas em couro macio</li>
                        <li>Conectividade: Cabo reforçado de alta durabilidade</li>
                        <li>Compatibilidade: Funciona com qualquer dispositivo que tenha entrada P2 (3.5mm)</li>
                        <li>Cor: Prata com detalhes em couro marrom</li>
                        <li>Peso: 280g</li>
                        <li>Alcance de Frequência: 20Hz – 20kHz</li>
                        <li>Sensibilidade: 100dB</li>
                        <li>Impedância: 32Ω</li>
                    </ul>
            </div>
        </>
    )
}