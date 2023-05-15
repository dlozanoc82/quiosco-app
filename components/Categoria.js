import Image from "next/image";

const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria;

    return (
        <div className="flex items-center gap-4 w-full border p-5 hover:bg-amber-400 hover:cursor-pointer">
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