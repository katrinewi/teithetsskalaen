create table "teithet"
(
    id          bigserial primary key,
    title       text      not null,
    description text      not null,
    created_at  timestamp not null default now()
);

create table "votes"
(
    id         bigserial primary key,
    comment    text null,
    score      integer   not null,
    created_at timestamp not null default now(),
    teithet_id bigint    not null references teithet (id)
);
