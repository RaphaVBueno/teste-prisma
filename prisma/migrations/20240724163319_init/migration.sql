-- CreateTable
CREATE TABLE "pessoa" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "pessoa_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pessoa_username_key" ON "pessoa"("username");
