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

create table service (
service_id int primary key generated always as identity,DROP TABLE IF EXISTS users, service, category, sub_service, checkout, order_summary, promotion, payment CASCADE; 

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

create table service (
service_id int primary key generated always as identity,
user_id int references users(user_id) on delete cascade,
category_id int references category(category_id) on delete cascade,
service_name text,
service_photo json not null,
service_created_date timestamptz not null,
service_edited_date timestamptz not null
);

create table sub_service (
sub_service_id int primary key generated always as identity,
sub_service_name text not null,
service_id int references service(service_id) on delete cascade,
unit text not null,
price_per_unit decimal (7,2) not null,
sub_service_quantity int not null, 
total_price decimal (7,2) not null
);

create table checkout (
checkout_id int primary key generated always as identity,
payment_id int not null,
service_date int not null,
service_time int not null,
address text not null,
sub_district text not null,
district text not null,
province text not null,
note text);

create table order_summary (
sub_service_id int references sub_service(sub_service_id),
checkout_id int references checkout(checkout_id)
);

create table promotion (
promotion_id int primary key generated always as identity,
promotion_code text not null,
promotion_types text not null,
promotion_quota int not null,
promotion_expiry_date_time timestamptz not null,
promotion_discount_amount int not null,
promotion_created_date timestamptz not null,
promotion_edited_date timestamptz not null
);

create table payment (
payment_id int primary key generated always as identity,
promotion_id int references promotion(promotion_id),
credit_card_number int not null,
expiry_date date not null,
CVC_CVV_code int not null
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

insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (1, 2, 'ล้างแอร์', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336332/spkorn/homeServices/%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C_jsl1bo.png", "publicId": "123"}', '2021-08-15T04:00:55Z', '2021-10-07T11:42:31Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (2, 2, 'ติดตั้งแอร์', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336332/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C_oapxxz.png", "publicId": "123"}', '2021-07-11T13:19:59Z', '2022-03-05T18:16:13Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (3, 2, 'ซ่อมแอร์', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%8B%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C_lr9z2u.png", "publicId": "123"}', '2022-04-06T20:54:35Z', '2022-02-04T00:55:15Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (4, 2, 'ทำความสะอาดทั่วไป', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336333/spkorn/homeServices/%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B_qtt23u.png", "publicId": "123"}', '2021-12-13T23:58:56Z', '2021-10-29T16:02:29Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (5, 2, 'ซ่อมเครื่องซักผ้า', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%8B%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%8B%E0%B8%B1%E0%B8%81%E0%B8%9C%E0%B9%89%E0%B8%B2_c14kc4.png", "publicId": "123"}', '2021-08-31T03:24:17Z', '2021-07-17T00:17:44Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (6, 1, 'ติดตั้งเตาแก๊ส', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B9%8A%E0%B8%AA_vuoq3j.png", "publicId": "123"}', '2021-09-16T17:06:46Z', '2021-07-04T14:13:47Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (7, 1, 'ติดตั้งเครื่องดูดควัน', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B9%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B1%E0%B8%99_rkmulw.png", "publicId": "123"}', '2021-06-14T20:09:15Z', '2021-07-03T12:23:32Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (8, 3, 'ติดตั้งชักโครก', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B1%E0%B8%81%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%81_yuwb5l.png", "publicId": "123"}', '2021-11-29T17:24:14Z', '2022-05-06T13:27:44Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (9, 3, 'ติดตั้งเครื่องทำน้ำอุ่น', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336330/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AD%E0%B8%B8%E0%B9%88%E0%B8%99_bcawvs.png", "publicId": "123"}', '2021-12-15T08:16:47Z', '2021-07-18T04:15:58Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (10, 1,'ติดตั้งตู้เย็น', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652329234/spkorn/homeServices/cong-wang-RqEEq4uF6jo-unsplash_v0uhsn.jpg", "publicId": "123"}', '2022-03-16T23:24:20Z', '2021-12-10T07:02:21Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (1, 2,'เป็นรูปที่มีทุกบ้าน', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652344130/spkorn/homeServices/king10_xpvarm.jpg", "publicId": "123"}', '2022-03-16T23:24:20Z', '2021-12-10T07:02:21Z');

insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 12000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 800.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 12000 - 15000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 1000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 15000 - 18000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 18000 - 20000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 2500.02, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 12000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 1500.02, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 12000 - 15000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 15000 - 18000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 3000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 18000 - 20000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 3500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 12000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 1500.02, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 12000 - 15000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 15000 - 18000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 2500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 18000 - 20000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 3000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('กวาดพื้น', 4, 'ชั่วโมง', 250.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ถูพื้น', 4, 'ชั่วโมง', 300.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เครื่องซักผ้าฝาหน้า', 5, 'เครื่อง', 500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เครื่องซักผ้าฝาบน', 5, 'เครื่อง', 300.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาถ่าน', 6, 'เตา', 200.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาแก๊ส', 6, 'ถัง', 500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาไฟฟ้าแบบผนัง', 6, 'ชุด', 20000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ดูดเทอร์โบ', 7, 'ชุด', 20000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบหลุม', 8, 'อัน', 500.50, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบกด', 8, 'อัน', 1000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบไฟฟ้า', 8, 'อัน', 3000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบกำลังไฟต่ำกว่า 3500 วัตต์', 9, 'เครื่อง', 1000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบกำลังไฟสูงกว่า 3500 วัตต์', 9, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบขนาดเล็กกว่า 10 คิว', 10, 'เครื่อง', 1500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบขนาดใหญ่กว่า 10 คิว', 10, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ทรงพระเจริญ', 11, 'หมื่นๆปี', 112.00, 0, 0);


-- select *
-- from service
-- inner join category
-- on category.category_id = service.category_id



user_id int references users(user_id) on delete cascade,
category_id int references category(category_id) on delete cascade,
service_name text,
service_photo json not null,
service_created_date timestamptz not null,
service_edited_date timestamptz not null
);

create table sub_service (
sub_service_id int primary key generated always as identity,
sub_service_name text not null,
service_id int references service(service_id) on delete cascade,
unit text not null,
price_per_unit decimal (7,2) not null,
sub_service_quantity int not null, 
total_price decimal (7,2) not null
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

insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (1, 2, 'ล้างแอร์', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336332/spkorn/homeServices/%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C_jsl1bo.png", "publicId": "123"}', '2021-08-15T04:00:55Z', '2021-10-07T11:42:31Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (2, 2, 'ติดตั้งแอร์', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336332/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C_oapxxz.png", "publicId": "123"}', '2021-07-11T13:19:59Z', '2022-03-05T18:16:13Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (3, 2, 'ซ่อมแอร์', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%8B%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B9%81%E0%B8%AD%E0%B8%A3%E0%B9%8C_lr9z2u.png", "publicId": "123"}', '2022-04-06T20:54:35Z', '2022-02-04T00:55:15Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (4, 2, 'ทำความสะอาดทั่วไป', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336333/spkorn/homeServices/%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%94%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B_qtt23u.png", "publicId": "123"}', '2021-12-13T23:58:56Z', '2021-10-29T16:02:29Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (5, 2, 'ซ่อมเครื่องซักผ้า', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%8B%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%8B%E0%B8%B1%E0%B8%81%E0%B8%9C%E0%B9%89%E0%B8%B2_c14kc4.png", "publicId": "123"}', '2021-08-31T03:24:17Z', '2021-07-17T00:17:44Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (6, 1, 'ติดตั้งเตาแก๊ส', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B9%8A%E0%B8%AA_vuoq3j.png", "publicId": "123"}', '2021-09-16T17:06:46Z', '2021-07-04T14:13:47Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (7, 1, 'ติดตั้งเครื่องดูดควัน', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B9%E0%B8%94%E0%B8%84%E0%B8%A7%E0%B8%B1%E0%B8%99_rkmulw.png", "publicId": "123"}', '2021-06-14T20:09:15Z', '2021-07-03T12:23:32Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (8, 3, 'ติดตั้งชักโครก', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336331/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B1%E0%B8%81%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%81_yuwb5l.png", "publicId": "123"}', '2021-11-29T17:24:14Z', '2022-05-06T13:27:44Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (9, 3, 'ติดตั้งเครื่องทำน้ำอุ่น', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652336330/spkorn/homeServices/%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B3%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%AD%E0%B8%B8%E0%B9%88%E0%B8%99_bcawvs.png", "publicId": "123"}', '2021-12-15T08:16:47Z', '2021-07-18T04:15:58Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (10, 1,'ติดตั้งตู้เย็น', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652329234/spkorn/homeServices/cong-wang-RqEEq4uF6jo-unsplash_v0uhsn.jpg", "publicId": "123"}', '2022-03-16T23:24:20Z', '2021-12-10T07:02:21Z');
insert into service (user_id, category_id, service_name, service_photo, service_created_date, service_edited_date) values (1, 2,'เป็นรูปที่มีทุกบ้าน', '{"url": "https://res.cloudinary.com/spkorn/image/upload/v1652344130/spkorn/homeServices/king10_xpvarm.jpg", "publicId": "123"}', '2022-03-16T23:24:20Z', '2021-12-10T07:02:21Z');

insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 12000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 800.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 12000 - 15000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 1000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 15000 - 18000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 18000 - 20000 บีทียู แบบติดผนัง', 1, 'เครื่อง', 2500.02, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 12000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 1500.02, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 12000 - 15000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 15000 - 18000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 3000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 18000 - 20000 บีทียู แบบติดผนัง', 2, 'เครื่อง', 3500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 9000 - 12000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 1500.02, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 12000 - 15000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 15000 - 18000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 2500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แอร์ขนาด 18000 - 20000 บีทียู แบบติดผนัง', 3, 'เครื่อง', 3000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('กวาดพื้น', 4, 'ชั่วโมง', 250.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ถูพื้น', 4, 'ชั่วโมง', 300.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เครื่องซักผ้าฝาหน้า', 5, 'เครื่อง', 500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เครื่องซักผ้าฝาบน', 5, 'เครื่อง', 300.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาถ่าน', 6, 'เตา', 200.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาแก๊ส', 6, 'ถัง', 500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('เตาไฟฟ้าแบบผนัง', 6, 'ชุด', 20000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ดูดเทอร์โบ', 7, 'ชุด', 20000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบหลุม', 8, 'อัน', 500.50, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบกด', 8, 'อัน', 1000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ชักโครกแบบไฟฟ้า', 8, 'อัน', 3000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบกำลังไฟต่ำกว่า 3500 วัตต์', 9, 'เครื่อง', 1000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบกำลังไฟสูงกว่า 3500 วัตต์', 9, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบขนาดเล็กกว่า 10 คิว', 10, 'เครื่อง', 1500.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('แบบขนาดใหญ่กว่า 10 คิว', 10, 'เครื่อง', 2000.00, 0, 0);
insert into sub_service (sub_service_name, service_id, unit, price_per_unit, sub_service_quantity, total_price) values ('ทรงพระเจริญ', 11, 'หมื่นๆปี', 112.00, 0, 0);


-- select *
-- from service
-- inner join category
-- on category.category_id = service.category_id


