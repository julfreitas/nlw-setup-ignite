import Fastify, { fastify } from 'fastify'
import cors from '@fastify/cors'
import {PrismaClient} from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

//Método HTTP -> get: buscar uma informação
app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({ //findmany -> retonrnar todos os registros de habits
        where: { //que tenham um título começando com Beber
            title: {
                startsWith: 'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server runing!')
})