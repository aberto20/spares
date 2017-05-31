# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table bland (
  id                        bigint auto_increment not null,
  bland_name                varchar(255),
  description               varchar(255),
  image                     varchar(255),
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  constraint pk_bland primary key (id))
;

create table part_type (
  id                        bigint auto_increment not null,
  type_name                 varchar(255),
  image                     varchar(255),
  description               varchar(255),
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  series_id                 bigint,
  constraint pk_part_type primary key (id))
;

create table series (
  id                        bigint auto_increment not null,
  serie_no                  varchar(255),
  serie_name                varchar(255),
  fablication_year          varchar(255),
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  vehicle_id                bigint,
  constraint pk_series primary key (id))
;

create table spare_part (
  id                        bigint auto_increment not null,
  part_name                 varchar(255),
  description               varchar(255),
  model_number              varchar(255),
  image                     varchar(255),
  manufacturer_price        varchar(255),
  fitting_name              varchar(255),
  originality               varchar(255),
  fablication_year          varchar(255),
  part_type_id              bigint,
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  constraint pk_spare_part primary key (id))
;

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
  constraint pk_user primary key (id))
;

create table vehicle (
  id                        bigint auto_increment not null,
  vehicle_name              varchar(255),
  description               varchar(255),
  image                     varchar(255),
  fablication_year          varchar(255),
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  bland_id                  bigint,
  constraint pk_vehicle primary key (id))
;

alter table part_type add constraint fk_part_type_series_1 foreign key (series_id) references series (id) on delete restrict on update restrict;
create index ix_part_type_series_1 on part_type (series_id);
alter table series add constraint fk_series_vehicle_2 foreign key (vehicle_id) references vehicle (id) on delete restrict on update restrict;
create index ix_series_vehicle_2 on series (vehicle_id);
alter table spare_part add constraint fk_spare_part_partType_3 foreign key (part_type_id) references part_type (id) on delete restrict on update restrict;
create index ix_spare_part_partType_3 on spare_part (part_type_id);
alter table vehicle add constraint fk_vehicle_bland_4 foreign key (bland_id) references bland (id) on delete restrict on update restrict;
create index ix_vehicle_bland_4 on vehicle (bland_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table bland;

drop table part_type;

drop table series;

drop table spare_part;

drop table user;

drop table vehicle;

SET FOREIGN_KEY_CHECKS=1;

