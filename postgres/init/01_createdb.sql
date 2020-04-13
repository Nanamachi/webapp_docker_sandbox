create role express login password 'password';
create database express_app;
grant all privileges on database express_app to express;

create role plack login password 'password';
create database plack_app;
grant all privileges on database plack_app to plack;
