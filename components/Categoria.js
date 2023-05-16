import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

const Categoria = ({categoria}) => {

    const {categoriaActual, handleClickCategoria} = useQuiosco();

    const {nombre, icono, id} = categoria;

    return (
        <div className={`flex ${categoriaActual?.id === id ? 'bg-amber-400' : ''} items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer`} onClick={() => handleClickCategoria(id) } >
            <Image 
                width={70}
                height={70}
                src={`/assets/img/icono_${icono}.svg`}
                alt="Imagen Icono"
                className="mr-5"
            />

            <button
                type="button"
                className="text-2xl font-bold"
            >
                {nombre}
            </button>

        </div>
    )
}

export default Categoria