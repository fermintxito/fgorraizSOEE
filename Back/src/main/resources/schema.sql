create table users
(
  id integer not null auto_increment,
  name varchar(45) not null,
  age integer not null,
  email varchar(45) not null,
  password varchar(45) not null,
  created datetime not null,
  primary key(id)
);