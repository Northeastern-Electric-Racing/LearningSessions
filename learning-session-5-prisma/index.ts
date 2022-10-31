import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

console.log('If this prints, then youre all set up! (you can delete this line now)');

// function that will create a team
const createTeam = async (teamName: string, budget: number, description: string) => {
  const team = await prisma.team.create({ data: { teamName, budget, description } });
};

// find a team in the db
const findTeamByName = async (name: string) => {
  const team = await prisma.team.findFirst({ where: { teamName: name } });
  return team;
};

const createUser = async (firstName: string, lastName: string, email: string, teamId?: number) => {
  // EXERCISE 1:
  // fill this out
};

const main = async () => {
  // PRE EXERCISE:
  // uncomment the line below and fill in the arguments
  // createTeam(need, some, args);
  //
  //
  // uncomment these lines and find your team by adding in the name
  // const team = await findTeamByName('your team name here');
  // console.log(JSON.stringify(team));
};

main();
