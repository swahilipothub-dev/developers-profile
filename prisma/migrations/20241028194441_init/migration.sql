-- CreateTable
CREATE TABLE "Contributer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "githubUsername" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contributer_pkey" PRIMARY KEY ("id")
);
