import { PrismaClient, User } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  console.log("Seeding database...");

  const users: Omit<User, "id" | "updatedAt">[] = [...Array(10)].map(() => ({
    email: faker.internet.email(),
    sex: faker.person.sex(),
    age: faker.number.int({ min: 18, max: 65 }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    isActive: !!faker.number.int({ min: 0, max: 1 }),
    createdAt: faker.date.between({
      from: new Date("2023-01-01"),
      to: new Date("2025-12-31"),
    }),
  }));

  await prisma.user.createMany({
    data: users,
  });

  console.log("Database seeded!");
};

main()
  .catch((e) => console.log(e))
  .finally(() => prisma.$disconnect());
