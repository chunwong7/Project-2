-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Weather" (
    "ID" varchar(20)   NOT NULL,
    "Temperature(F)" float   NOT NULL,
    "Humidity(%)" float   NOT NULL,
    "Visibility(mi)" float   NOT NULL,
    "Wind_Speed(mph)" float   NOT NULL,
    "Weather_Condition" varchar(30)   NOT NULL,
    CONSTRAINT "pk_Weather" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "AL_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_AL_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "AR_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_AR_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "AZ_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_AZ_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "CA_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_CA_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "CO_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_CO_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "CT_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_CT_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "DC_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_DC_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "DE_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_DE_Accident" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "FL_Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_FL_Accident" PRIMARY KEY (
        "ID"
     )
);




ALTER TABLE "AL_Accident" ADD CONSTRAINT "fk_AL_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "AR_Accident" ADD CONSTRAINT "fk_AR_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "AZ_Accident" ADD CONSTRAINT "fk_AZ_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "CA_Accident" ADD CONSTRAINT "fk_CA_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "CO_Accident" ADD CONSTRAINT "fk_CO_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "CT_Accident" ADD CONSTRAINT "fk_CT_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "DC_Accident" ADD CONSTRAINT "fk_DC_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "DE_Accident" ADD CONSTRAINT "fk_DE_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");

ALTER TABLE "FL_Accident" ADD CONSTRAINT "fk_FL_Accident_ID" FOREIGN KEY("ID")
REFERENCES "Weather" ("ID");



