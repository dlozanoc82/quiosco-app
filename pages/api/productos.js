import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

//Por medio de la api que siempre corre en el servidor
//Para tenerla disponible en un state o Provider
export default async function handler(req, res) {
    const productos = await prisma.producto.findMany({
        where: {
            categoriaId: 1,
        }
    });
    res.status(200).json(productos)
}