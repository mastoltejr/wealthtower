/*
  Warnings:

  - Added the required column `sourceFile` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "sourceFile" TEXT NOT NULL;
