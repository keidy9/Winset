SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.players (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
    "tier" integer NOT NULL,
	"team_id" bigint,
	CONSTRAINT "players_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.teams (
	"_id" serial NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT "teams_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

/** HAVE A USERS TABLE:
	ID		USERNAME		PASSWORD		TOTAL CASH		
*/
CREATE TABLE public.users (
	"_id" serial NOT NULL,
	"username" varchar NOT NULL UNIQUE,
	"password" varchar NOT NULL,
    "total_cash" float NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

/** HAVE A BETS TABLE
	ID		CREATED_BY_USER(FOREIGN KEY)	TEAM BETTED ON(FOREIGN KEY)		AGAINST TEAM(FOREIGN KEY) 	PHASE(quarter, semi, finals)	ODDS	RESULTS		INITIAL BET		PAYOUT	TOTAL CASH AFTER PAYOUT
*/
CREATE TABLE public.bets (
	"_id" serial NOT NULL,
	"created_by_user_id" bigint NOT NULL,
	"team_betted_on_id" bigint NOT NULL,
    "against_team_id" bigint NOT NULL,
    "phase" varchar NOT NULL,
    "odds" bigint NOT NULL,
    "results" varchar NOT NULL,
    "initial_bet" bigint NOT NULL,
    "payout" bigint NOT NULL,
    "total_cash_after_payment" bigint NOT NULL,
	CONSTRAINT "bets_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE public.players ADD CONSTRAINT "players_fk0" FOREIGN KEY ("team_id") REFERENCES  public.teams("_id");

ALTER TABLE public.bets ADD CONSTRAINT "bets_fk0" FOREIGN KEY ("created_by_user_id") REFERENCES  public.users("_id");
ALTER TABLE public.bets ADD CONSTRAINT "bets_fk1" FOREIGN KEY ("team_betted_on_id") REFERENCES  public.teams("_id");
ALTER TABLE public.bets ADD CONSTRAINT "bets_fk2" FOREIGN KEY ("against_team_id") REFERENCES  public.teams("_id");


INSERT INTO public.teams VALUES (1, 'Luigi Brothers');
INSERT INTO public.teams VALUES (2, 'James Gang');
INSERT INTO public.teams VALUES (3, 'Meme Dream Team');
INSERT INTO public.teams VALUES (4, 'REACT TIME');
INSERT INTO public.teams VALUES (5, 'JJK');
INSERT INTO public.teams VALUES (6, 'New Jeans');
INSERT INTO public.teams VALUES (7, 'Teenage Mutant Ninja Turtles');
INSERT INTO public.teams VALUES (8, 'BunDL');



INSERT INTO public.players VALUES (1, 'Luigi', 3, 1);
INSERT INTO public.players VALUES (2, 'Mario', 3, 1);
INSERT INTO public.players VALUES (3, 'Bowser', 5, 1);
INSERT INTO public.players VALUES (4, 'Toad', 1, 1);
INSERT INTO public.players VALUES (5, 'Princess Peach', 1, 1);
/**
total weighting: 13
*/

INSERT INTO public.players VALUES (6, 'Lebron James', 5, 2);
INSERT INTO public.players VALUES (7, 'Lebron James With A Better Hairline', 1, 2);
INSERT INTO public.players VALUES (8, 'Lebronny James', 1, 2);
INSERT INTO public.players VALUES (9, 'Lebron James Terminator', 5, 2);
INSERT INTO public.players VALUES (10, 'Lebron James Clone', 5, 2);
/**
total weighting: 17
*/

INSERT INTO public.players VALUES (11, 'Blue Shrek', 5, 3);
INSERT INTO public.players VALUES (12, 'Hank Bob', 4, 3);
INSERT INTO public.players VALUES (13, 'Shrek Mike Wazowski', 3, 3);
INSERT INTO public.players VALUES (14, 'Uncanny Pikachu', 2, 3);
INSERT INTO public.players VALUES (15, 'Amogus', 5, 3);
/**
total weighting: 19
*/

INSERT INTO public.players VALUES (16, 'Jaime', 5, 4);
INSERT INTO public.players VALUES (17, 'Chris', 5, 4);
INSERT INTO public.players VALUES (18, 'Jimmy', 5, 4);
INSERT INTO public.players VALUES (19, 'Andrew B', 5, 4);
INSERT INTO public.players VALUES (20, 'Kelvin', 5, 4);
/**
total weighting: 25
*/

INSERT INTO public.players VALUES (21, 'Gojo', 5, 5);
INSERT INTO public.players VALUES (22, 'Itadori', 4, 5);
INSERT INTO public.players VALUES (23, 'Megumi', 2, 5);
INSERT INTO public.players VALUES (24, 'Nobara', 3, 5);
INSERT INTO public.players VALUES (25, 'Toge', 1, 5);
/**
total weighting: 15
*/

INSERT INTO public.players VALUES (26, 'Minji', 1, 6);
INSERT INTO public.players VALUES (27, 'Hanni', 2, 6);
INSERT INTO public.players VALUES (28, 'Danielle', 1, 6);
INSERT INTO public.players VALUES (29, 'Haerin', 4, 6);
INSERT INTO public.players VALUES (30, 'Hyein', 3, 6);
/**
total weighting: 11
*/

INSERT INTO public.players VALUES (31, 'Leonardo', 1, 7);
INSERT INTO public.players VALUES (32, 'Donatello', 1, 7);
INSERT INTO public.players VALUES (33, 'Raphiel', 2, 7);
INSERT INTO public.players VALUES (34, 'Mikey', 3, 7);
INSERT INTO public.players VALUES (35, 'Master Splinter', 1, 7);
/**
total weighting: 8
*/

INSERT INTO public.players VALUES (36, 'Ken', 5, 8);
INSERT INTO public.players VALUES (37, 'Brandon', 5, 8);
INSERT INTO public.players VALUES (38, 'Gio', 5, 8);
INSERT INTO public.players VALUES (39, 'Shi', 5, 8);
INSERT INTO public.players VALUES (40, 'Andrew W', 5, 8);
/**
total weighting: 25
*/


