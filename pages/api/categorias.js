import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

//Por medio de la api que siempre corre en el servidor
//Para tenerla disponible en un state o Provider
export default async function handler(req, res) {
    const categorias = await prisma.categoria.findMany();
    res.status(200).json(categorias)
}
