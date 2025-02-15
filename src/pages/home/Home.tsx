import homeLogo from "../../assets/home.png"
import ListaPostagens from "../../components/postagens/listaPostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import "./Home.css"

function Home() {
  return (
    <>
        <div className="bg-fuchsia-900 flex justify-center">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className="text-5xl font-bold">Depressão</h2>
                    <p className="text-xl">Expresse aqui suas tristezas e emoções</p>

                    <div className="flex justify-around gap-4">
                        <ModalPostagem />
                        <button className="rounded bg-white text-fuchsia-900 py-2 px-4">Ver postagens</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={homeLogo} alt="Logo Home" className="w-2/3" />
                </div>
            </div>
        </div>
        <ListaPostagens />
    </>
  );
}

export default Home