import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createUser(name: string, age: number) {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      age: age,
    },
  });
}

async function findUserByName(name: string){
    const user = await prisma.user.findMany({
        where:{
            name:name
        }
    })

    return user; 
}

async function main() {
  await prisma.user.deleteMany();
  await createUser("Alex", 23);
  await createUser("Christy", 43);
  //const users = await prisma.user.findMany();
  const foundUsers = await findUserByName("Alex");
  console.log(foundUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
