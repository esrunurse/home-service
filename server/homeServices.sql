DROP TABLE IF EXISTS users, service, category, sub_service CASCADE; 

create table users (
user_id int primary key generated always as identity,
name varchar (100) not null,
phoneNumber int not null,
email varchar (100) not null,
password varchar (100) not null,
role text not null
);

create table category (
category_id int primary key generated always as identity,
category_name text not null,
category_created_date timestamptz not null,
category_edited_date timestamptz not null

);

create table sub_service (
sub_service_id int primary key generated always as identity,
sub_service_name text not null,
unit text not null,
price_per_unit decimal (7,2) not null,
sub_service_quantity int not null, 
total_price decimal (7,2) not null
);

create table service (
service_id int primary key generated always as identity,
user_id int references users(user_id) on delete cascade,
category_id int references category(category_id) on delete cascade,
sub_service_id int references sub_service(sub_service_id) on delete cascade,
service_name text,
price_range_estimate decimal (7,2) not null,
service_photo text not null,
service_created_date timestamptz not null,
service_edited_date timestamptz not null
);

insert into users (name, phoneNumber, email, password, role) values ('Stephan Edmeades', '0879316420', 'sedmeades0@goodreads.com', 'iP4EAxpCF4i', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Fredia Nijs', '0342821343', 'fnijs1@twitpic.com', 'Yuapex', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Tessie Gadeaux', '0228320111', 'tgadeaux2@soundcloud.com', 'JJFYDDIFdQ', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Corrine Revill', '0298476902', 'crevill3@wunderground.com', 'CU6F9kkpdx9H', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Alexi Sword', '0292112304', 'asword4@hibu.com', 'GWlTsOVW', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Bernetta Goatman', '0885067947', 'bgoatman5@creativecommons.org', 'dlCSIq78BU', 'customer');
insert into users (name, phoneNumber, email, password, role) values ('Burnaby Trouel', '0607150189', 'btrouel6@microsoft.com', 'pwRWWe5rC3x', 'admin');
insert into users (name, phoneNumber, email, password, role) values ('Del Kliement', '0165268368', 'dkliement7@360.cn', 'PX6YMnV', 'admin');
insert into users (name, phoneNumber, email, password, role) values ('Supakorn Korn', '0165656658', 'kornpupakorn@gmail.com', 'maiborkmaibork', 'admin');
insert into users (name, phoneNumber, email, password, role) values ('Prayuth Huakuy', '0000222332', 'hahaha@360.cn', 'PArnPards', 'customer');

insert into category (category_name, category_created_date, category_edited_date) values ('บริการห้องครัว', '2021-09-18T02:26:51Z', '2022-02-17T15:15:13Z');
insert into category (category_name, category_created_date, category_edited_date) values ('บริการทั่วไป', '2022-04-22T12:24:24Z', '2022-04-12T04:17:17Z');
insert into category (category_name, category_created_date, category_edited_date) values ('บริการห้องน้ำ', '2021-06-07T09:25:13Z', '2021-08-07T23:23:22Z');

insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 12000 บีทียู แบบติดผนัง', 'เครื่อง', 800.02, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 12000 - 18000 บีทียู แบบติดผนัง', 'เครื่อง', 1000.00, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 18000 บีทียู แบบติดผนัง', 'เครื่อง', 500.02, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 18000 บีทียู แบบติดผนัง', 'เครื่อง', 700.02, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบหลุม', 'อัน', 500.50, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบกด', 'อัน', 1000.00, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบไฟฟ้า', 'อัน', 3000.00, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาถ่าน', 'เตา', 200.00, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาแก๊ส', 'ถัง', 500.00, 0, 0);
insert into sub_service (sub_service_name, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาไฟฟ้าแบบผนัง', 'ชุด', 20000.00, 0, 0);

insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (10, 1, null, 'ติดตั้งเครื่องดูดควัน', 5805.22, 'libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo', '2021-08-15T04:00:55Z', '2021-10-07T11:42:31Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (9, 2, 1, 'ล้างแอร์', 3406.16, 'aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor', '2021-07-11T13:19:59Z', '2022-03-05T18:16:13Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (8, 2, 2, 'ซ่อมแอร์', 2748.54, 'luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis', '2022-04-06T20:54:35Z', '2022-02-04T00:55:15Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (7, 1, null, 'ซ่อมตู้ครัว', 9951.95, 'quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis', '2021-12-13T23:58:56Z', '2021-10-29T16:02:29Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (6, 2, null, 'ซ่อมเครื่องซักผ้า', 1389.99, 'convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam', '2021-08-31T03:24:17Z', '2021-07-17T00:17:44Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (5, 3, 3, 'ติดตั้งชักโครก', 1551.76, 'erat id mauris vulputate elementum nullam varius nulla facilisi cras non', '2021-09-16T17:06:46Z', '2021-07-04T14:13:47Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (4, 1, 4, 'ติดตั้งเตาแก๊ส', 1340.75, 'purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum', '2021-06-14T20:09:15Z', '2021-07-03T12:23:32Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (3, 3, null, 'ติดตั้งเครื่องทำน้ำอุ่น', 5039.39, 'convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in', '2021-11-29T17:24:14Z', '2022-05-06T13:27:44Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (2, 3, 3, 'ติดตั้งชักโครก', 999.59, 'lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi', '2021-12-15T08:16:47Z', '2021-07-18T04:15:58Z');
insert into service (user_id, category_id, sub_service_id, service_name, price_range_estimate, service_photo, service_created_date, service_edited_date) values (1, 1, 4, 'ติดตั้งเตาแก๊ส', 3620.08, 'interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu', '2022-03-16T23:24:20Z', '2021-12-10T07:02:21Z');



-- select *
-- from service
-- inner join category
-- on category.category_id = service.category_id


