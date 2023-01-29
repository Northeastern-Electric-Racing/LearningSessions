-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "teamId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Team" (
    "teamId" SERIAL NOT NULL,
    "teamName" TEXT NOT NULL,
    "budget" INTEGER NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Team_pkey" PRIMARY KEY ("teamId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("teamId") ON DELETE SET NULL ON UPDATE CASCADE;
