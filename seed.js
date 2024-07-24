import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Adicionando os usuários
    await prisma.pessoa.createMany({
      data: [
        {
          username: 'will',
          email: 'will@mail.com',
        },
        {
          username: 'vini',
          email: 'vini@mail.com',
        },
        {
          username: 'rapha',
          email: 'rapha@mail.com',
        },
      ],
    })

    console.log('Usuários adicionados com sucesso!')
  } catch (error) {
    console.error('Erro ao adicionar usuários:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
