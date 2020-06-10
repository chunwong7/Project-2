-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Weather" (
    "ID" varchar(10)   NOT NULL,
    "Temperature(F)" float   NOT NULL,
    "Humidity(%)" float   NOT NULL,
    "Visibility(mi)" float   NOT NULL,
    "Wind_Speed(mph)" float   NOT NULL,
    "Weather_Condition" varchar(30)   NOT NULL,
    CONSTRAINT "pk_Weather" PRIMARY KEY (
        "ID"
     )
);

CREATE TABLE "Accident" (
    "ID" varchar(10)   NOT NULL,
    "Severity" int   NOT NULL,
    "Time" date   NOT NULL,
    "Lat" float   NOT NULL,
    "Lng" float   NOT NULL,
    "City" varchar(30)   NOT NULL,
    "State" varchar(2)   NOT NULL,
    CONSTRAINT "pk_Accident" PRIMARY KEY (
        "ID"
     )
);

