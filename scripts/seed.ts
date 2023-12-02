const { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: 'Programming' },
        { name: 'Gym' },
        { name: 'Devops' },
        { name: 'Data structure' },
        { name: 'Filming' },
        { name: 'Criket' },
      ],
    })
  } catch (error) {
    console.log('seeding failed', error)
  } finally {
    await database.$disconnect
  }
}

main()
