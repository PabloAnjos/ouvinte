import { Header } from "./components/Header"
import { Produto } from "./components/Produto"


function App() {
  return (
    <>
        <Header />

        {/*SECTION PRODUTO*/}
        <section className="w-screen h-screen flex justify-center mt-10">
                  <div className="w-[1252px] h-[1126px]">
                        <Produto />
                  </div>
        </section>
    </>
  )
}

export default App
