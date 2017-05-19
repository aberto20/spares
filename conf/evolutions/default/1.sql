# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table user (
  id                        bigint auto_increment not null,
  first_name                varchar(255),
  last_name                 varchar(255),
  role                      varchar(255),
  phone                     varchar(255),
  email                     varchar(255),
  photo                     varchar(255),
  username                  varchar(255),
  password                  varchar(255),
  active                    tinyint(1) default 0,
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  constraint uq_user_username unique (username),
  constraint pk_user primary key (id))
;




# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table user;

SET FOREIGN_KEY_CHECKS=1;

