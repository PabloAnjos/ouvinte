import { AvaliacaoProduto } from "./components/AvaliacaoProduto"
import { Header } from "./components/Header"
import { Produto } from "./components/Produto"


function App() {
  return (
    <>
        <Header />

        {/*SECTION PRODUTO*/}
        <section className="w-screen h-screen flex justify-center mt-10">
                  <div className="w-[1252px] h-[1126px] flex gap-10">
                        <Produto />
                        <AvaliacaoProduto />
                  </div>
        </section>
    </>
  )
}

export default App
