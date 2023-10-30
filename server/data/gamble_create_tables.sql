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


ALTER TABLE public.players ADD CONSTRAINT "players_fk0" FOREIGN KEY ("team_id") REFERENCES  public.teams("_id");


INSERT INTO public.teams VALUES (1, 'Mario Sisters');
INSERT INTO public.teams VALUES (2, 'James Gang');
INSERT INTO public.teams VALUES (3, 'Codesmith Meme Dream Team');


INSERT INTO public.players VALUES (1, 'Maria', 3, 1);
INSERT INTO public.players VALUES (1, 'Luisa', 3, 1);
INSERT INTO public.players VALUES (1, 'Bowser', 5, 1);
INSERT INTO public.players VALUES (1, 'Toad', 1, 1);
INSERT INTO public.players VALUES (1, 'Prince Peach', 1, 1);
/**
total weighting: 13
*/

INSERT INTO public.players VALUES (2, 'Lebron James', 5, 1);
INSERT INTO public.players VALUES (2, 'Lebron James With Better Hairline', 1, 1);
INSERT INTO public.players VALUES (2, 'Lebron James That Flops Less', 1, 1);
INSERT INTO public.players VALUES (2, 'Lebron James That Hits Freethrows', 5, 1);
INSERT INTO public.players VALUES (2, 'Lebron James Killer Clone', 5, 1);
/**
total weighting: 17
*/

INSERT INTO public.players VALUES (3, 'Blue Shrek', 5, 1);
INSERT INTO public.players VALUES (3, 'Hank Bob', 5, 1);
INSERT INTO public.players VALUES (3, '', 5, 1);
INSERT INTO public.players VALUES (3, '', 5, 1);
INSERT INTO public.players VALUES (3, '', 5, 1);



