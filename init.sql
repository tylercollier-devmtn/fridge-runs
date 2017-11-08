DROP INDEX IF EXISTS users_display_name_index;

DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    auth_id text UNIQUE NOT NULL,
    email text UNIQUE NOT NULL,
    display_name text,
    first_name text,
    last_name text
);


CREATE INDEX IF NOT EXISTS users_display_name_index ON users (display_name);


DROP TABLE IF EXISTS runs;

CREATE TABLE IF NOT EXISTS runs (
    id serial PRIMARY KEY,
    type INTEGER REFERENCES users (id),
    owner INTEGER REFERENCES users (id),
    redeemed TEXT
)