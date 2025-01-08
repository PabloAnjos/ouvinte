import imgCart from "../assets/images/cart.png"
import imgHeadphone from "../assets/images/headphone.png"


export function Header() {
    return (
        <>
            <header className="w-screen flex justify-center p-8">
                    <nav className="w-[1540px] h-[80px] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                                <img src={imgHeadphone} alt="Logo Ouvinte" />
                                <h1 className="text-4xl text-text-white">Ouvinte</h1>
                        </div>

                        <img src={imgCart} alt="Icone Cart"  className="hover:cursor-pointer"/>
                    </nav>
            </header>
        </>
    )
}