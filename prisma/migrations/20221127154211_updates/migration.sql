/*
  Warnings:

  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `name` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(255),
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "name" TEXT NOT NULL;
