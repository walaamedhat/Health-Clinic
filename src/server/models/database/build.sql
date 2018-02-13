
BEGIN;

DROP TABLE IF EXISTS doctors, secretary, patients, appointments CASCADE;


CREATE TABLE "doctors" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL UNIQUE,
	"password" VARCHAR NOT NULL,
	"location" VARCHAR NOT NULL,
	"position" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"image" TEXT NOT NULL
);



CREATE TABLE "secretary" (
	"id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,
	"email" VARCHAR NOT NULL UNIQUE,
	"password" VARCHAR NOT NULL,
	"location" VARCHAR,
	"position" TEXT,
	"description" TEXT
);



CREATE TABLE "patients" (
 	"id" serial PRIMARY KEY,
 	"name" varchar(100) NOT NULL,
 	"phone" varchar(50) NOT NULL,
<<<<<<< HEAD
 	"dob" DATE NOT NULL,
 	"note" TEXT NOT NULL,
 	"visit" integer NOT NULL,
 	"time" TIME NOT NULL,
 	"interval" integer NOT NULL
=======
 	"dob" DATE DEFAULT NULL,
 	"note" TEXT DEFAULT '',
 	"visit" integer DEFAULT 0,
 	"time" TIME DEFAULT '00:00:00',
 	"interval" integer DEFAULT 0
>>>>>>> aa51193ccf520b5a2516187c077651e4a246b9ed
 );


CREATE TABLE "appointments" (
	"id" SERIAL PRIMARY KEY,
	"id_patient" INTEGER REFERENCES patients(id),
	"id_doctor" INTEGER REFERENCES doctors(id),
	"date" DATE NOT NULL,
	"time-set" TIME NOT NULL,
	"status" VARCHAR
);

COMMIT;
