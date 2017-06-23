-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2017 at 09:39 PM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `spareapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `bland`
--

CREATE TABLE IF NOT EXISTS `bland` (
`id` bigint(20) NOT NULL,
  `bland_name` varchar(255) DEFAULT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `delete_status` tinyint(1) DEFAULT '0',
  `delete_reason` varchar(255) DEFAULT NULL,
  `done_by` varchar(255) DEFAULT NULL,
  `done_at` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bland`
--

INSERT INTO `bland` (`id`, `bland_name`, `description`, `image`, `delete_status`, `delete_reason`, `done_by`, `done_at`) VALUES
(1, 'TOYOTA', 'Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan.', '1497726223671TOOYOTA.png', 0, '', 'admin', '2017-06-17 12:03:48'),
(2, 'LAND ROVER', 'Land Rover is a car brand that specialises in four-wheel-drive vehicles, owned by British multinational car manufacturer Jaguar Land Rover, which has been owned by India''s Tata Motors since 2008.', '1497726294913LAND LOVER.png', 0, '', 'admin', '2017-06-17 12:05:42'),
(3, 'HYUNDAI', 'The Hyundai Motor Company is a South Korean multinational automotive manufacturer headquartered in Seoul, South Korea.', '1497726369635HYUNDAI.png', 0, '', 'admin', '2017-06-17 12:06:54'),
(4, 'NISSAN', 'Nissan Motor Company Ltd usually shortened to Nissan is a Japanese multinational automobile manufacturer headquartered in Nishi-ku, Yokohama.', '1497726539804Nissan-logo.svg.png', 0, '', 'admin', '2017-06-17 12:10:04'),
(5, 'MISTUBISH', 'The Mitsubishi Group is a group of autonomous Japanese multinational companies in a variety of industries.', '1497726620307MISTUBISHA.png', 0, '', 'admin', '2017-06-17 12:10:54'),
(6, 'MERCEDES-BENZ', 'Mercedes-Benz is a global automobile manufacturer and a division of the German company Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks.', '1497726679374BENZ.png', 0, '', 'admin', '2017-06-17 12:13:06');

-- --------------------------------------------------------

--
-- Table structure for table `part_details`
--

CREATE TABLE IF NOT EXISTS `part_details` (
`id` bigint(20) NOT NULL,
  `done_by` varchar(255) DEFAULT NULL,
  `done_at` datetime DEFAULT NULL,
  `delete_status` tinyint(1) DEFAULT '0',
  `bland_id` bigint(20) DEFAULT NULL,
  `spare_part_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `part_type`
--

CREATE TABLE IF NOT EXISTS `part_type` (
`id` bigint(20) NOT NULL,
  `type_name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text,
  `delete_status` tinyint(1) DEFAULT '0',
  `delete_reason` varchar(255) DEFAULT NULL,
  `done_by` varchar(255) DEFAULT NULL,
  `done_at` datetime DEFAULT NULL,
  `vehicle_model_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `part_type`
--

INSERT INTO `part_type` (`id`, `type_name`, `image`, `description`, `delete_status`, `delete_reason`, `done_by`, `done_at`, `vehicle_model_id`) VALUES
(1, 'Oil Filters', '1497728684544Often Oil Filter.jpg', 'An oil filter is a filter designed to remove contaminants from engine oil, transmission oil, lubricating oil, or hydraulic oil.', 0, '', 'admin', '2017-06-17 12:44:51', 1),
(2, 'Air Filters', '1497728808422Injen-Ea-Nanofiber-Air-Filters.jpg', 'A particulate air filter is a device composed of fibrous materials which removes solid particulates such as dust, pollen, mould, and bacteria from the air.', 0, '', 'admin', '2017-06-17 12:47:24', 1),
(3, 'Transmission Filters', '149773029365183-112.jpg', 'The transmission plays a hugely important role in how your vehicle functions. It''s connected to the rear portion of your engine and transfers power from the engine to the wheels.', 0, '', 'admin', '2017-06-17 13:11:38', 1),
(4, 'Cabin Air Filters', '1497730418522VF1010.jpg', 'The cabin air filter is typically a pleated-paper filter that is placed in the outside-air intake for the vehicle''s passenger compartment.', 0, '', 'admin', '2017-06-17 13:15:58', 1),
(5, 'Oil Filters', '1497739928857download.jpg', 'An oil filter is a filter designed to remove contaminants from engine oil, transmission oil, lubricating oil, or hydraulic oil. Oil filters are used in many different types of hydraulic machinery', 0, '', 'admin', '2017-06-17 15:52:12', 9),
(6, 'Brake Pads', '149777017798919.jpg', 'Brake pads are a component of disc brakes used in automotive and other applications.', 0, '', 'admin', '2017-06-18 00:16:33', 1),
(7, 'Brake Shoes', '149777033844920.jpg', 'A brake shoe is the part of a braking system which carries the brake lining in the drum brakes used on automobiles, or the brake block in train brakes and bicycle brakes.', 0, '', 'admin', '2017-06-18 00:19:31', 1),
(8, 'Brake Rotors', '149777078941421.jpg', 'The brake rotor (or disc) is the rotating part of a wheel''s disc brake assembly, against which the brake pads are applied.', 0, '', 'admin', '2017-06-18 00:26:34', 1),
(9, 'Brake Calipers', '149777096362022.jpg', 'The brake caliper is the assembly which houses the brake pads and pistons.', 0, '', 'admin', '2017-06-18 00:29:33', 1),
(10, 'Air Filters', '149777270724430.jpg', 'A particulate air filter is a device composed of fibrous materials which removes solid particulates such as dust, pollen, mould, and bacteria from the air.', 0, '', 'admin', '2017-06-18 00:58:31', 9),
(11, 'Fuel Filters', '149777281618331.jpg', 'A fuel filter is a filter in the fuel line that screens out dirt and rust particles from the fuel, normally made into cartridges containing a filter paper.', 0, '', 'admin', '2017-06-18 01:00:32', 9),
(12, 'Transmission Filters', '149777303391132.jpg', 'An oil filter is a filter designed to remove contaminants from engine oil, transmission oil, lubricating oil, or hydraulic oil.', 0, '', 'admin', '2017-06-18 01:03:57', 9),
(13, 'Cabin Air Filters', '149777321370633.jpg', 'The cabin air filter is typically a pleated-paper filter that is placed in the outside-air intake for the vehicle''s passenger compartment.', 0, '', 'admin', '2017-06-18 01:08:31', 9);

-- --------------------------------------------------------

--
-- Table structure for table `play_evolutions`
--

CREATE TABLE IF NOT EXISTS `play_evolutions` (
  `id` int(11) NOT NULL,
  `hash` varchar(255) NOT NULL,
  `applied_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `apply_script` text,
  `revert_script` text,
  `state` varchar(255) DEFAULT NULL,
  `last_problem` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `play_evolutions`
--

INSERT INTO `play_evolutions` (`id`, `hash`, `applied_at`, `apply_script`, `revert_script`, `state`, `last_problem`) VALUES
(1, 'b9de068959945c1e05f8b25f2849fc27973dccf6', '2017-06-17 17:18:08', 'create table bland (\nid                        bigint auto_increment not null,\nbland_name                varchar(255),\ndescription               TEXT,\nimage                     varchar(255),\ndelete_status             tinyint(1) default 0,\ndelete_reason             varchar(255),\ndone_by                   varchar(255),\ndone_at                   datetime,\nconstraint pk_bland primary key (id))\n;\n\ncreate table part_details (\nid                        bigint auto_increment not null,\ndone_by                   varchar(255),\ndone_at                   datetime,\ndelete_status             tinyint(1) default 0,\nbland_id                  bigint,\nspare_part_id             bigint,\nconstraint pk_part_details primary key (id))\n;\n\ncreate table part_type (\nid                        bigint auto_increment not null,\ntype_name                 varchar(255),\nimage                     varchar(255),\ndescription               TEXT,\ndelete_status             tinyint(1) default 0,\ndelete_reason             varchar(255),\ndone_by                   varchar(255),\ndone_at                   datetime,\nvehicle_model_id          bigint,\nconstraint pk_part_type primary key (id))\n;\n\ncreate table spare_part (\nid                        bigint auto_increment not null,\npart_name                 varchar(255),\ncountry                   TEXT,\nmanufacturer              varchar(255),\nmodel_number              varchar(255),\nimage                     varchar(255),\nmanufacturer_price        varchar(255),\nfitting_name              varchar(255),\noriginality               varchar(255),\nfablication_year          varchar(255),\nbland_id                  varchar(255),\npart_type_id              bigint,\ndelete_status             tinyint(1) default 0,\ndelete_reason             varchar(255),\ndone_by                   varchar(255),\ndone_at                   datetime,\nconstraint pk_spare_part primary key (id))\n;\n\ncreate table user (\nid                        bigint auto_increment not null,\nfirst_name                varchar(255),\nlast_name                 varchar(255),\nrole                      varchar(255),\nphone                     varchar(255),\nemail                     varchar(255),\nphoto                     varchar(255),\nusername                  varchar(255),\npassword                  varchar(255),\nactive                    tinyint(1) default 0,\ndelete_status             tinyint(1) default 0,\ndelete_reason             varchar(255),\ndone_by                   varchar(255),\ndone_at                   datetime,\nconstraint pk_user primary key (id))\n;\n\ncreate table vehicle_model (\nid                        bigint auto_increment not null,\nmodel_name                varchar(255),\nfab_year                  varchar(255),\ndescription               varchar(255),\ndelete_status             tinyint(1) default 0,\ndelete_reason             varchar(255),\ndone_by                   varchar(255),\ndone_at                   datetime,\nbland_id                  bigint,\nconstraint pk_vehicle_model primary key (id))\n;\n\nalter table part_details add constraint fk_part_details_bland_1 foreign key (bland_id) references bland (id) on delete restrict on update restrict;\ncreate index ix_part_details_bland_1 on part_details (bland_id);\nalter table part_details add constraint fk_part_details_sparePart_2 foreign key (spare_part_id) references spare_part (id) on delete restrict on update restrict;\ncreate index ix_part_details_sparePart_2 on part_details (spare_part_id);\nalter table part_type add constraint fk_part_type_vehicleModel_3 foreign key (vehicle_model_id) references vehicle_model (id) on delete restrict on update restrict;\ncreate index ix_part_type_vehicleModel_3 on part_type (vehicle_model_id);\nalter table spare_part add constraint fk_spare_part_partType_4 foreign key (part_type_id) references part_type (id) on delete restrict on update restrict;\ncreate index ix_spare_part_partType_4 on spare_part (part_type_id);\nalter table vehicle_model add constraint fk_vehicle_model_bland_5 foreign key (bland_id) references bland (id) on delete restrict on update restrict;\ncreate index ix_vehicle_model_bland_5 on vehicle_model (bland_id);', 'SET FOREIGN_KEY_CHECKS=0;\n\ndrop table bland;\n\ndrop table part_details;\n\ndrop table part_type;\n\ndrop table spare_part;\n\ndrop table user;\n\ndrop table vehicle_model;\n\nSET FOREIGN_KEY_CHECKS=1;', 'applied', '');

-- --------------------------------------------------------

--
-- Table structure for table `spare_part`
--

CREATE TABLE IF NOT EXISTS `spare_part` (
`id` bigint(20) NOT NULL,
  `part_name` varchar(255) DEFAULT NULL,
  `country` text,
  `manufacturer` varchar(255) DEFAULT NULL,
  `model_number` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `manufacturer_price` varchar(255) DEFAULT NULL,
  `fitting_name` varchar(255) DEFAULT NULL,
  `originality` varchar(255) DEFAULT NULL,
  `fablication_year` varchar(255) DEFAULT NULL,
  `bland_id` varchar(255) DEFAULT NULL,
  `part_type_id` bigint(20) DEFAULT NULL,
  `delete_status` tinyint(1) DEFAULT '0',
  `delete_reason` varchar(255) DEFAULT NULL,
  `done_by` varchar(255) DEFAULT NULL,
  `done_at` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `spare_part`
--

INSERT INTO `spare_part` (`id`, `part_name`, `country`, `manufacturer`, `model_number`, `image`, `manufacturer_price`, `fitting_name`, `originality`, `fablication_year`, `bland_id`, `part_type_id`, `delete_status`, `delete_reason`, `done_by`, `done_at`) VALUES
(1, 'Ultra Premium Oil Filter', 'None', 'FRAM', 'XG9972', '149773082753231kpMAiFjqL._AC_US160_.jpg', '8$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 13:20:56'),
(2, 'Cartridge Lube', 'None', 'WIX Filter', '57047', '149773106403631ND5s3P36L._AC_US160_.jpg', '8$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 13:24:33'),
(3, 'Extended Performance Oil Filter (Pack of 2)', 'None', 'Mobil  1', 'M1C-251', '149773151111451mPpNQIpAL._AC_US160_.jpg', '35', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 13:32:00'),
(4, 'Cartridge Lube Metal Free Filter, Pack of 1', 'None', 'WIX Filters', '57047XP XP', '149773168184341KL+8+bJBL._AC_US160_.jpg', '14$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 13:34:56'),
(5, 'Oil Filter', 'None', 'Mobil1', '57047XP', '149773197812151mPpNQIpAL._AC_US160_.jpg', '22$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 13:39:42'),
(6, 'Oil Filter', 'None', 'Ecogard', 'X5608', '149773277005541KFsjs42cL._AC_US240_FMwebp_.jpg', '3$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 13:52:54'),
(7, 'Purolator Oil Filter', 'None', 'Purolator', 'L25608', '149773370504251n6xPb9U3L._AC_US240_FMwebp_QL65_.jpg', '8$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:09:57'),
(8, 'oil filter', 'None', 'APSG', '04152-YZZA1', '149773411720151Z3k2NUUSL._AC_US240_FMwebp_QL65_.jpg', '59$', '', 'Genuine', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:15:22'),
(9, 'Oil Filter Housing Cap', 'none', 'APSG', '15620-31060', '149773439996251Z3k2NUUSL._AC_US240_FMwebp_QL65_.jpg', '59$', '', 'Genuine', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:20:56'),
(10, 'Cap Plug includes APSG Wrench', 'none', 'APSG', '15643-31050', '149773456789551Z3k2NUUSL._AC_US240_FMwebp_QL65_ (1)ghjk.jpg', '59', '', 'Genuine', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:22:52'),
(11, 'PurolatorONE Oil Filter', 'none', 'Purolator', 'PL25608', '14977346859581.jpg', '12$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:24:49'),
(12, 'Professional Engine Oil Filter', 'none', 'ACDelco', 'PF2259', '14977348200182.jpg', '5$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:27:03'),
(13, 'Extended Performance, High Efficiency, High Capacity Oil Filter', '16$', 'Mobil 1', '(M1C251A)', '14977349060793.jpg', 'none', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:28:42'),
(14, 'Oil Filter Cartridge', 'none', 'Champion', 'COC9972', '14977349914494.jpg', '11$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:29:55'),
(15, 'EXtended Performance Oil Filter', 'none', 'Premium Guard', 'PG5608EX', '14977351175685.jpg', '11$', '', 'counterfeit', '20117', '', 1, 0, '', 'admin', '2017-06-17 14:32:02'),
(16, 'Oil Filter', 'none', 'Motorcraft', 'FL2060', '14977351934516.jpg', '6$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:33:17'),
(17, 'Synthetic Cartridge Oil Filter', 'none', 'Purolator', 'PSL25608', '14977352738077.jpg', '14', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:34:37'),
(18, 'Synthetic+ Oil Filter', 'none', 'Ecogard', 'S5608', '14977353684678.jpg', '10$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:36:12'),
(19, 'Lube Oil Filter Element', 'none', 'Hastings', 'LF607', '14977354414339.jpg', '4$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:37:25'),
(20, 'Oil Filter', 'none', 'Premium Guard', 'PG5608', '149773552283810.jpg', '7', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:38:46'),
(21, 'Oil Filter Blister Pack', 'none', 'Part Master Filters', '67047bp', '149773567267911.jpg', '23$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:41:16'),
(22, 'Oil Filter', 'none', 'Baldwin', 'P7398', '149773574361212.jpg', '10$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:42:27'),
(23, 'Oil Filter', 'none', 'Parts Master', '67047', '149773583510513.jpg', '8$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:43:58'),
(24, 'Cartridge Oil Filter', 'none', 'Part Master Filters', '67047', '149773593471114.jpg', '8$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:45:38'),
(25, 'Oil Filter', 'none', 'Pro-Tec', '146MP', '149773605551615.jpg', '36', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:47:45'),
(26, 'Oil Filter', 'none', 'Service Pro', 'M5608', '149773614230416.jpg', '3', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:49:06'),
(27, 'Regular Spin-on Oil Filter', 'none', 'Pennzoil', 'PZ-161', '149773625442517.jpg', '14$', '', 'counterfeit', '2017', '', 1, 0, '', 'admin', '2017-06-17 14:50:58'),
(28, 'Fresh Breeze Cabin Air Filter with Arm & Hammer', 'none', 'FRAM', 'CF10285', NULL, '13$', '', 'counterfeit', '2017', '', 2, 0, '', 'admin', '2017-06-17 14:54:00'),
(29, 'Extra Guard Panel Air Filter by Fram', 'none', 'FRAM', 'CA10755', '149773670294319.jpg', '14$', '', 'counterfeit', '2017', '', 2, 0, '', 'admin', '2017-06-17 14:58:27'),
(30, 'Extra Guard Panel Air Filter', 'none', 'FRAM', 'CA10677', '149773687191920.jpg', '10', '', 'counterfeit', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:01:15'),
(31, 'Extra Guard Panel Air Filter', 'none', 'FRAM', 'CA10171', '149773696209021.jpg', '9$', '', 'counterfeit', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:02:47'),
(32, 'Air Filter Element', 'none', 'Toyota arts', '17801-YZZ02', '149773706665722.jpg', '14$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:04:51'),
(33, 'Air Filter Element', 'none', 'Toyota', '(17801-0P051)', '149773720883323.jpg', '18$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:06:53'),
(34, 'High Performance Replacement Air Filter', 'none', 'K&N', '33-2443', '149773811771341qcR0qhErL._AC_US240_FMwebp_QL65_.jpg', '67$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:22:01'),
(35, 'High Performance Replacement Air Filter', 'none', 'K&N', '33-2370', '14977381949021.jpg', '41$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:23:17'),
(36, 'Air Filter Element', 'none', 'Toyota', '(17801-0V020)', '14977382904522.jpg', '19', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:24:54'),
(37, 'High Performance Replacement Air Filter', 'none', 'K&N', '33-2381', '14977393846243.jpg', '54$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:43:07'),
(38, 'Universal Air Filter', 'none', 'K&N', 'RF-1048', '14977398999124.jpg', '53$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:51:42'),
(39, 'Air Filter', 'none', 'Wix', '49430', '14977399877195.jpg', '21$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 15:53:11'),
(40, 'High Mileage Oil Filter', 'none', 'FRAM', 'HM4967', '14977401940411.jpg', '$6', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 15:56:37'),
(41, 'Air Filter Panel, Pack of 1', 'none', 'WIX Filters', '49223', '14977403520426.jpg', '15', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:00:19'),
(42, 'Oil Filter', 'none', 'Toyota', '90915-YZZF2', '14977404850022.jpg', '$5', '', 'Genuine', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:01:36'),
(43, 'Universal Rubber Filter', 'none', 'K&N', 'RU-4990', '14977405331797.jpg', '47', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:02:16'),
(44, 'Air Filter', 'none', 'K&N', '33-2443', '14977407443458.jpg', '54$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:05:46'),
(45, 'Professional Air Filter', 'none', 'ACDelco', 'A3118C', '14977408301969.jpg', '17$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:07:13'),
(46, 'Extended Performance Oil Filter', 'none', 'Mobil', '1 M1-103', '14977408382763.jpg', '$9', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:07:21'),
(47, 'Replacement Drop in Air Filter', 'none', 'DNA Motoring', 'AFPN-010-RD', '149774092238710.jpg', '18$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:08:44'),
(48, 'Panel Air Filter Element', 'noe', 'Hastings Filters', 'AF1414', '149774104080511.jpg', '21$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:10:43'),
(49, 'Spin-On Lube Filter, Pack of 1', 'none', 'WIX Filters', '51394', '14977410619774.jpg', '$6', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:11:06'),
(50, 'Air Filter', 'none', 'Spectre Performance', 'HPR10171', '149774111004812.jpg', '24$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:11:52'),
(51, 'PurolatorONE Air Filter', 'none', 'Purolator', 'A36116', '149774118486613.jpg', '39', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:13:08'),
(52, 'Tough Guard Oil Filter', 'none', 'FRAM', 'TG10358', '14977412418595.jpg', '$8', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:14:04'),
(53, 'PurolatorONE Air Filter', 'none', 'Purolator', 'A35649', '149774125615814.jpg', '14$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:14:18'),
(54, 'Engine Air Filter', 'none', 'Champion', 'CAP10677', '149774135961715.jpg', '15$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:16:02'),
(55, 'Extended Performance Oil Filter', 'none', 'Mobil 1', 'M1C-154', '14977414100066.jpg', '$15', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:16:57'),
(56, 'Panel Air Filter Element', 'none', 'Hastings Filters', 'AF1453', '149774143828716.jpg', '21', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:17:21'),
(57, 'Dryflow Air Filter by AEM', 'none', 'AEM', '28-20370', '149774151008317.jpg', '40$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:18:44'),
(58, 'Oil Filter', 'none', 'Royal Purple', '10-2840', '14977415515807.jpg', '$14', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:19:14'),
(59, 'Engine Air Filter', 'none', 'Champion', 'CAP10171', '149774160704518.jpg', '11$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:20:10'),
(60, 'PurolatorONE Oil Filter', 'none', 'Purolator', 'PL14476', '14977416370548.jpg', '$6', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:20:39'),
(61, 'Cartridge Lube Metal Free, Pack of 1', 'none', 'WIX Filters', '57064', '14977417761349.jpg', '$7', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:22:59'),
(62, 'Pro-Series Oil Filter Fit For Toyota Prius Corolla Matrix Scion iM xD', 'none', 'K&N PS', '7021', '14977420312761.jpg', '$4', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:27:13'),
(63, 'Oil Filter', 'none', 'Ecogard', 'X4476', '14977421272362.jpg', '$1', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:28:50'),
(64, 'Professional Engine Oil Filter', 'none', 'ACDelco', 'PF1233', '', 'none', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:30:22'),
(65, 'Universal Rubber Filter', 'none', 'K&N', 'RU-4960', '149774246797319.jpg', '40$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:34:30'),
(66, 'Purolator Oil Filter', 'none', 'Purolator', 'L14476', '14977424981124.jpg', '$4', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:35:00'),
(67, 'Black Air Filter Wrap', 'none', 'K&N', 'RX-4990DK', '149774254703420.jpg', '20$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:35:49'),
(68, 'YZZF2 Oil Filter 1/2 Case (QTY 5)', 'none', 'Toyota Genuine Parts', '90915', '14977426301305.jpg', '$28', '', 'Genuine', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:37:13'),
(69, 'High Performance Replacement Air Filter', 'none', 'K&N', 'E-2993', '149774263929821.jpg', '57$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:37:22'),
(70, 'Spin-On Lube Filter, Pack of 1', 'none', 'WIX Filters', '51394XP Xp', '14977427746626.jpg', '$11', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:39:42'),
(71, 'Cartridge Lube Metal Filter, Pack of 1', 'none', 'WIX Filters', '57064XP Xp', '14977429212127.jpg', '$14', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:42:04'),
(72, 'Replacement Drop In Air Filter', 'none', 'DNA motoring', 'AFPN-069-RD', '149774296699522.jpg', '22$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:42:49'),
(73, 'Lube Spin-On Filter', 'none', 'Baldwin', 'B33', '14977430631328.jpg', '$10', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:44:26'),
(74, 'Air Filter', 'none', 'Ecogard', 'XA6116', '149774306434523.jpg', '10$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:44:26'),
(75, 'Air Filter', 'none', 'K&N FILTERS', 'RF-1048', '149774315296024.jpg', '54$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:45:55'),
(76, 'Oil Filter 1 Case (QTY 10)', 'none', 'Toyota', '90915-YZZF2', '14977431755099.jpg', '$42', '', 'Genuine', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:46:17'),
(77, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-069-BL', '149774323263925.jpg', '22$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:47:15'),
(78, 'Extended Performance Oil Filter (Pack of 2)', 'none', 'Mobil', '1 M1-103', '149774326775310.jpg', '$28', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:47:50'),
(79, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-010-BK', '149774333970926.jpg', '18$', '', 'Genuine', '20117', '', 2, 0, '', 'admin', '2017-06-17 16:49:02'),
(80, 'Classic Oil Filter', 'none', 'Purolator', 'L16311', '149774339744511.jpg', '$7', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:50:00'),
(81, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-010-SL', '149774344206927.jpg', '18$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:50:44'),
(82, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-069-GN', '149774355451828.jpg', '22$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:52:38'),
(83, 'Oil Filter, Pack of 1;', 'Made in USA', 'Purolator Classic', 'L14476', '149774361327812.jpg', '$13', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:53:36'),
(84, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-010-GN', '149774362985629.jpg', '18$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:53:53'),
(85, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-010-BL', '149774372212630.jpg', '18$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:55:45'),
(86, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-069-SL', '149774383468131.jpg', '22', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:57:35'),
(87, 'Professional Engine Oil Filter', 'none', 'ACDelco', 'PF1768', '149774385654013.jpg', '$5', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 16:57:52'),
(88, 'Replacement Drop In Air Filter', 'none', 'DNA Motoring', 'AFPN-069-BK', '149774393339532.jpg', '22$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 16:58:56'),
(89, 'Extra Guard Passenger Car Spin-On Oil Filter (Pack of 2)', 'none', 'Fram', 'PH4967', '149774403531314.jpg', '$15', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:00:37'),
(90, 'Air Filter', 'none', 'Premium Guard', 'PA5649', '149774412797533.jpg', '13$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:02:28'),
(91, 'Panel Air Filter Element', 'none', 'Hastings', 'AF1308', '149774426273934.jpg', '14$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:04:26'),
(92, 'PurolatorONE Oil Filter', 'none', 'Purolator', 'PL16311', '', '$22', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:05:00'),
(93, 'Air Filter', 'none', 'Premium Guard', 'PA6116', '149774435264235.jpg', '10$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:05:55'),
(94, 'Air Filter', 'none', 'Premium Guard', 'PA5649', '149774445860236.jpg', '18$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:07:41'),
(95, 'Air Filter', 'none', 'Premium Guard', 'PA5786', '', '14$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:08:46'),
(96, 'Replaceable Oil Filter Element by Toyota', 'none', 'Toyota Genuine Parts', '04152-YZZA6', '149774466092616.jpg', '$5', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:11:03'),
(97, 'Air Filter', 'none', 'Premium Guard', 'PA5786', '149774467005837.jpg', '14$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:11:13'),
(98, 'Air Filter', 'none', 'Premium Guard', 'PA6116', '149774475643238.jpg', '17$', '', 'counterfeit', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:12:39'),
(99, 'YZZA6 by Toyota', 'none', 'Genuine Toyota', '04152', '149774482124217.jpg', '$15', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:13:51'),
(100, 'Workshop Engine Air Filter', 'none', 'Bosch', '5375WS / F00E164798', '149774485231139.jpg', '17$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:14:15'),
(101, 'Air Filter', 'none', 'Parts Master', '69310', '149774499895540.jpg', '15$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:16:42'),
(102, 'air filter', 'none', 'AC DELCO', 'PF2259', '149774511347041.jpg', '9$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:18:37'),
(103, 'Air Filter', 'none', 'Parts Master', '69223', '149774523700442.jpg', '9$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:20:40'),
(104, 'Oil Filter', 'none', 'Parts Master', '61394', '149774525468018.jpg', '$7', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:20:57'),
(105, 'Replacement Air Filter - LEXUS', 'none', 'K&N', 'LS460', '149774538962043.jpg', '54$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:23:12'),
(106, 'Oil Filter Element', 'none', 'Hastings Filters', 'LF640', '149774540202919.jpg', '$8', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:23:24'),
(107, 'Replacement Air Filter - LEXUS', 'none', 'K&N', 'RX350', '149774548551444.jpg', '54$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:24:49'),
(108, 'Synthetic+ Oil Filter', 'none', 'Ecogard', 'S4476', '149774549196320.jpg', '$8', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:25:05'),
(109, 'Air Filter', 'none', 'Pro-Tec', '448', '149774556624245.jpg', '14$', '', 'Genuine', '2017', '', 2, 0, '', 'admin', '2017-06-17 17:26:08'),
(110, 'Automatic Transmission Filter, Pack of 1', 'none', 'WIX Filters', '58324', '149774568368621.jpg', '$16', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:28:06'),
(111, 'Synthetic Spin-On Oil Filter', 'none', 'Purolator', 'PSL14476', '149774576273222.jpg', '$6', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:29:26'),
(112, 'Auto Trans Filter', 'none', 'Toyota', '35330-73010', '149774589968446.jpg', '41$', '', 'Genuine', '2017', '', 3, 0, '', 'admin', '2017-06-17 17:31:43'),
(113, '1 Extended Performance, High Efficiency, High Capacity Oil Filter ()', 'none', 'Mobil', 'M1-103A', '149774590421523.jpg', '$13', '', 'Genuine', '2017', '', 5, 0, '', 'admin', '2017-06-17 17:31:47'),
(114, 'Automatic Transmission Filter Kit', 'none', 'Premium Guard', 'PT1303', '149774598194747.jpg', '19$', '', 'Genuine', '2017', '', 3, 0, '', 'admin', '2017-06-17 17:33:11'),
(115, 'Auto Trans Filter', 'none', 'Toyota', '35330-48020', '149774611044649.jpg', '103', '', 'Genuine', '2017', '', 3, 0, '', 'admin', '2017-06-17 17:35:13'),
(116, 'Fresh Breeze Cabin Air Filter with Arm & Hammer', 'none', 'FRAM', 'CF10285', '149776726213150.jpg', '13$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:27:46'),
(117, 'Washable Cabin Air Filter - Cleans and Freshens Incoming Air for Toyota, Subaru, Lexus', 'none', 'K&N', 'VF2000', '149776736601451.jpg', '40', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:29:30'),
(118, 'Cabin Air Panel, Pack of 1', 'none', 'WIX Filters', '24483', '14977674784081.jpg', '15$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:31:21'),
(119, 'Compatible Cabin Air Filter - Toyota / Lexus / Scion / Subaru Compatible Premium Cabin Air Filter', 'none', 'Fette Filter', 'CF10285', '14977680501602.jpg', '18$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:40:56'),
(120, 'Cabin Air Filter', 'none', 'Toyota', '87139-07020', '14977681325343.jpg', '21$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:42:15'),
(121, 'Cabin Air Filter', 'none', 'Toyota', '87139-50100', '14977681933544.jpg', '42$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:43:16'),
(122, 'BreatheEASY Cabin Air Filter (Pack of 2)', 'none', 'Purolator', 'C35667', '14977683052305.jpg', '24$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:45:08'),
(123, 'PurolatorONE Cabin Air Filter', 'none', 'Purolator', 'C35667', '14977683732296.jpg', '18$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:46:16'),
(124, 'Activated Carbon Replacement Cabin Air Filter', 'none', 'Champion Filters', 'CCF1816', '14977684470927.jpg', '13$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:47:43'),
(125, 'Cabin Air Filter', 'none', 'Premium Guard', 'PC5667C', '14977685583938.jpg', '9$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:49:21'),
(126, 'Oil Filter', 'none', 'Motorcraft', 'FL2063', '149776865241424.jpg', '$7', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 23:50:56'),
(127, 'Cabin Air Filter', 'none', 'Power Train Components', 'PTC 3686C', '14977686568869.jpg', '12$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:51:00'),
(128, 'Cabin Air Filter', 'none', 'Luber-finer', 'CAF1816C', '149776873577610.jpg', '18$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:52:19'),
(129, 'Spin-On Lube Filter - Case of 6 by Wix', 'none', 'Wix', '51394XP WIX XP', '149776878081025.jpg', '$84', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 23:53:05'),
(130, 'Professional Cabin Air Filter', 'none', 'ACDelco', 'CF173', '149776879801711.jpg', '17$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:53:21'),
(131, 'Cabin Air Filter', 'none', 'Luber-finer', 'CAF1816P', '149776887544912.jpg', '17$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:54:40'),
(132, 'Oil Filter', 'None', 'Valvoline', 'VO40', '149776889342026.jpg', '$12', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-17 23:54:56'),
(133, 'Toyota, Lexus and Subaru Cabin Air Filter', 'none', 'EcoGard', 'XC25851', '149776897711113.jpg', '13$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:56:20'),
(134, 'Cabin Air Filter Element', 'none', 'Hastings Filters', 'AFC1352', '149776905708114.jpg', '10', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:57:40'),
(135, 'Cabin Air Filter', 'none', 'Power Train Components', 'PTC 3684', '149776916683715.jpg', '9$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-17 23:59:30'),
(136, 'Air Filter', 'none', 'Fram', 'CF10285', '149776924229916.jpg', '35$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-18 00:00:45'),
(137, 'Cabin Air Filter Lot of 2', 'none', 'Hastings', 'Afc1352', '149776932286217.jpg', '42$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-18 00:02:07'),
(138, 'Cabin Air Filter - Case of 6', 'none', 'Wix', '24483', '149776941748418.jpg', '117$', '', 'Genuine', '2017', '', 4, 0, '', 'admin', '2017-06-18 00:03:40'),
(139, 'MADE IN USA Fits Chevrolet Daihatsu Geo Lexus Lotus Nissan Pontiac Scion Suzuki Toyota', 'none', '( Lot of 6 )Engine Oil Filter Group', '7 V4476', '149777008599527.jpg', '$11.94', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-18 00:15:02'),
(140, 'Oil Filter Cartridge', 'none', 'Champion', 'COC10358', '149777064370028.jpg', '$11', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-18 00:24:07'),
(141, 'Tough Guard Passenger Car Spin-On Oil Filter (Pack of 2)', 'none', 'Fram', 'TG4967', '149777085043529.jpg', '$30', '', 'counterfeit', '2017', '', 5, 0, '', 'admin', '2017-06-18 00:27:33'),
(142, 'Oil Filter Cartridge', 'none', 'Champion', 'COC10358', '149777340796728.jpg', '11$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:10:11'),
(143, 'Tough Guard Passenger Car Spin-On Oil Filter (Pack of 2)', 'none', 'Fram', 'TG4967', '149777348701329.jpg', '30$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:11:30'),
(144, 'Engine Oil Filter', 'USA', 'Purolator', 'V4476', '149777388097934.jpg', '35$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:18:15'),
(145, 'Oil Filter', 'none', 'Fram', 'PH4967', '149777397493335.jpg', '24$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:19:38'),
(146, 'Extended Guard Passenger Car Spin-On Oil Filter (Pack of 2)', 'none', 'Fram', 'XG4967', '149777407652636.jpg', '37', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:21:21'),
(147, 'Engine Oil Filter', 'USA', 'Purolator', 'V4476', '149777424366337.jpg', '125$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:24:06'),
(148, 'Oil Filter', 'USA', 'Purolator', 'V4476', '149777435102738.jpg', '3', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:26:05'),
(149, 'Performance Oil Filter', 'none', 'Premium Guard', 'PG6311EX EXtended', '149777443703039.jpg', '11$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:27:19'),
(150, 'Spin-On Lube Filter - Case of 12', 'none', 'Wix', '51394', '149777450717440.jpg', '110$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:28:30'),
(151, 'Oil Filter', 'none', 'Parts Master', '67064', '149777458384541.jpg', '9$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:29:46'),
(152, 'Oil Filter', 'none', 'Parts Master', '61394BP', '149777473160818.jpg', '8$', '', 'Genuine', '2017', '', 10, 0, '', 'admin', '2017-06-18 01:32:16'),
(153, 'QuickStop Ceramic Disc Pad Set Includes Pad Installation Hardware, Front', 'none', 'Wagner', 'ZD1293', '149778371624144.jpg', '29$', '', 'Genuine', '2017', '', 6, 0, '', 'admin', '2017-06-18 04:02:04'),
(154, 'QuickStop  Ceramic Disc Pad Set Includes Pad Installation Hardware, Rear', 'none', 'Wagner', 'ZD1212', '149778383203545.jpg', '26$', '', 'Genuine', '2017', '', 6, 0, '', 'admin', '2017-06-18 04:03:56'),
(155, 'ThermoQuiet  Ceramic Disc Pad Set With Installation Hardware, Rear', 'none', 'Wagner', 'QC1212', '149778395258046.jpg', '34$', '', 'Genuine', '2017', '', 6, 0, '', 'admin', '2017-06-18 04:05:55'),
(156, 'Brake Pad Kit', 'none', 'Toyota', '04465-07010', '149778570187847.jpg', '76$', '', 'Genuine', '2017', '', 6, 0, '', 'admin', '2017-06-18 04:35:53');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id` bigint(20) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  `delete_status` tinyint(1) DEFAULT '0',
  `delete_reason` varchar(255) DEFAULT NULL,
  `done_by` varchar(255) DEFAULT NULL,
  `done_at` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `role`, `phone`, `email`, `photo`, `username`, `password`, `active`, `delete_status`, `delete_reason`, `done_by`, `done_at`) VALUES
(1, 'NKUNDIMANA', 'Evalist', 'admin', '0788885368', 'nkundimana@gmail.com', '', 'admin', 'admin', 1, 0, '', 'default', '2017-06-17 10:18:11');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_model`
--

CREATE TABLE IF NOT EXISTS `vehicle_model` (
`id` bigint(20) NOT NULL,
  `model_name` varchar(255) DEFAULT NULL,
  `fab_year` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `delete_status` tinyint(1) DEFAULT '0',
  `delete_reason` varchar(255) DEFAULT NULL,
  `done_by` varchar(255) DEFAULT NULL,
  `done_at` datetime DEFAULT NULL,
  `bland_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vehicle_model`
--

INSERT INTO `vehicle_model` (`id`, `model_name`, `fab_year`, `image`, `description`, `delete_status`, `delete_reason`, `done_by`, `done_at`, `bland_id`) VALUES
(1, 'CAMRY 2017', '2015', '1497823879982USC60TOC021A021001.jpg', 'The Toyota Camry is an automobile sold internationally by the Japanese manufacturer Toyota since 1982, spanning multiple generations.', 0, '', 'admin', '2017-06-17 12:17:18', 1),
(2, 'CARINA', '2000', '14978240026681280px-1998-2001_Toyota_Carina_rear.jpg', 'The Toyota Carina line of large family cars was introduced in Japan in 1970.', 0, '', 'admin', '2017-06-17 12:19:38', 1),
(3, '2000GT', '', '1497824054013stanced-toyota-2000gt-is-a-cool-diecast_2.jpg', 'The Toyota 2000GT is a limited-production, front-engine, rear-wheel drive, two-seat, hardtop coupé grand tourer designed by Toyota in collaboration with Yamaha.', 0, '', 'admin', '2017-06-17 12:28:02', 1),
(4, '4 RUNNER', '', '1497824103272USC70TOS071A021001.jpg', 'The Toyota 4Runner is a compact, later mid-size sport utility vehicle produced by the Japanese manufacturer Toyota and sold throughout the world from 1984 to present', 0, '', 'admin', '2017-06-17 12:29:15', 1),
(5, 'AGYA', '', '1497824154961agya6.png', 'The Toyota Agya is a ceety caur bi Toyota, designed bi Daihatsu an manufactured bi Astra Daihatsu in Indonesie.', 0, '', 'admin', '2017-06-17 12:31:17', 1),
(6, 'ALLION', '', '1497824389242download.jpg', 'The Toyota Allion and similar Toyota Premio are sedans sold in Japan since 2001 by Toyota.', 0, '', 'admin', '2017-06-17 12:33:29', 1),
(7, 'ALPHARD / VELLFIRE', '', '1497824435328Toyota_Alphard_L_1.jpg', 'The Toyota Alphard is a full-size luxury MPV (minivan) produced by the Japanese automaker Toyota since 2002.', 0, '', 'admin', '2017-06-17 12:35:52', 1),
(8, 'ALTEZZA', '', '1497824521363maxresdefault.jpg', 'Toyota Altezza RS200, known as the Lexus IS200 outside Japan', 0, '', 'admin', '2017-06-17 12:39:44', 1),
(9, 'COROLLA  2017', '', '1497824571114download (1).jpg', 'The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then.', 0, '', 'admin', '2017-06-17 15:31:13', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bland`
--
ALTER TABLE `bland`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `part_details`
--
ALTER TABLE `part_details`
 ADD PRIMARY KEY (`id`), ADD KEY `ix_part_details_bland_1` (`bland_id`), ADD KEY `ix_part_details_sparePart_2` (`spare_part_id`);

--
-- Indexes for table `part_type`
--
ALTER TABLE `part_type`
 ADD PRIMARY KEY (`id`), ADD KEY `ix_part_type_vehicleModel_3` (`vehicle_model_id`);

--
-- Indexes for table `play_evolutions`
--
ALTER TABLE `play_evolutions`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `spare_part`
--
ALTER TABLE `spare_part`
 ADD PRIMARY KEY (`id`), ADD KEY `ix_spare_part_partType_4` (`part_type_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vehicle_model`
--
ALTER TABLE `vehicle_model`
 ADD PRIMARY KEY (`id`), ADD KEY `ix_vehicle_model_bland_5` (`bland_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bland`
--
ALTER TABLE `bland`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `part_details`
--
ALTER TABLE `part_details`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `part_type`
--
ALTER TABLE `part_type`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `spare_part`
--
ALTER TABLE `spare_part`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=157;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `vehicle_model`
--
ALTER TABLE `vehicle_model`
MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `part_details`
--
ALTER TABLE `part_details`
ADD CONSTRAINT `fk_part_details_bland_1` FOREIGN KEY (`bland_id`) REFERENCES `bland` (`id`),
ADD CONSTRAINT `fk_part_details_sparePart_2` FOREIGN KEY (`spare_part_id`) REFERENCES `spare_part` (`id`);

--
-- Constraints for table `part_type`
--
ALTER TABLE `part_type`
ADD CONSTRAINT `fk_part_type_vehicleModel_3` FOREIGN KEY (`vehicle_model_id`) REFERENCES `vehicle_model` (`id`);

--
-- Constraints for table `spare_part`
--
ALTER TABLE `spare_part`
ADD CONSTRAINT `fk_spare_part_partType_4` FOREIGN KEY (`part_type_id`) REFERENCES `part_type` (`id`);

--
-- Constraints for table `vehicle_model`
--
ALTER TABLE `vehicle_model`
ADD CONSTRAINT `fk_vehicle_model_bland_5` FOREIGN KEY (`bland_id`) REFERENCES `bland` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
