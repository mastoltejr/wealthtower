-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('BANK', 'CHECKING', 'SAVINGS', 'DEBITCARD', 'CREDITCARD', 'LOAN', 'MORTGAGE', 'CARPAYMENT', 'INVESTMENT', 'STOCK', 'REALESTATE');

-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('CATEGORY', 'USER', 'EVENT', 'TRIP');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "transactionDate" TIMESTAMP(3) NOT NULL,
    "postDate" TIMESTAMP(3) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "accountID" INTEGER,
    "merchantID" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "transactionID" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Attachment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" "AccountType" NOT NULL DEFAULT E'CHECKING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Merchant" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Merchant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "type" "CategoryType" NOT NULL DEFAULT E'CATEGORY',
    "name" VARCHAR(255) NOT NULL,
    "fromDate" TIMESTAMP(3),
    "toDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RelatedCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToTransaction" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToMerchant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RelatedCategories_AB_unique" ON "_RelatedCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_RelatedCategories_B_index" ON "_RelatedCategories"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToTransaction_AB_unique" ON "_CategoryToTransaction"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToTransaction_B_index" ON "_CategoryToTransaction"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToMerchant_AB_unique" ON "_CategoryToMerchant"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToMerchant_B_index" ON "_CategoryToMerchant"("B");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountID_fkey" FOREIGN KEY ("accountID") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_merchantID_fkey" FOREIGN KEY ("merchantID") REFERENCES "Merchant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_transactionID_fkey" FOREIGN KEY ("transactionID") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RelatedCategories" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RelatedCategories" ADD FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTransaction" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToTransaction" ADD FOREIGN KEY ("B") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToMerchant" ADD FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToMerchant" ADD FOREIGN KEY ("B") REFERENCES "Merchant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
