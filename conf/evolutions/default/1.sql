# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table bland (
  id                        bigint auto_increment not null,
  bland_name                varchar(255),
  description               TEXT,
  image                     varchar(255),
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  constraint pk_bland primary key (id))
;

create table part_details (
  id                        bigint auto_increment not null,
  done_by                   varchar(255),
  done_at                   datetime,
  delete_status             tinyint(1) default 0,
  bland_id                  bigint,
  spare_part_id             bigint,
  constraint pk_part_details primary key (id))
;

create table part_type (
  id                        bigint auto_increment not null,
  type_name                 varchar(255),
  image                     varchar(255),
  description               TEXT,
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  vehicle_model_id          bigint,
  constraint pk_part_type primary key (id))
;

create table spare_part (
  id                        bigint auto_increment not null,
  part_name                 varchar(255),
  country                   TEXT,
  manufacturer              varchar(255),
  model_number              varchar(255),
  image                     varchar(255),
  manufacturer_price        varchar(255),
  fitting_name              varchar(255),
  originality               varchar(255),
  fablication_year          varchar(255),
  bland_id                  varchar(255),
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

create table vehicle_model (
  id                        bigint auto_increment not null,
  model_name                varchar(255),
  fab_year                  varchar(255),
  image                     varchar(255),
  description               varchar(255),
  delete_status             tinyint(1) default 0,
  delete_reason             varchar(255),
  done_by                   varchar(255),
  done_at                   datetime,
  bland_id                  bigint,
  constraint pk_vehicle_model primary key (id))
;

alter table part_details add constraint fk_part_details_bland_1 foreign key (bland_id) references bland (id) on delete restrict on update restrict;
create index ix_part_details_bland_1 on part_details (bland_id);
alter table part_details add constraint fk_part_details_sparePart_2 foreign key (spare_part_id) references spare_part (id) on delete restrict on update restrict;
create index ix_part_details_sparePart_2 on part_details (spare_part_id);
alter table part_type add constraint fk_part_type_vehicleModel_3 foreign key (vehicle_model_id) references vehicle_model (id) on delete restrict on update restrict;
create index ix_part_type_vehicleModel_3 on part_type (vehicle_model_id);
alter table spare_part add constraint fk_spare_part_partType_4 foreign key (part_type_id) references part_type (id) on delete restrict on update restrict;
create index ix_spare_part_partType_4 on spare_part (part_type_id);
alter table vehicle_model add constraint fk_vehicle_model_bland_5 foreign key (bland_id) references bland (id) on delete restrict on update restrict;
create index ix_vehicle_model_bland_5 on vehicle_model (bland_id);



# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table bland;

drop table part_details;

drop table part_type;

drop table spare_part;

drop table user;

drop table vehicle_model;

SET FOREIGN_KEY_CHECKS=1;

