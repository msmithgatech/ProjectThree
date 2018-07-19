USE wishes_db;

CREATE TABLE wishes (
id int(20) auto_increment not null,
wishcenter varchar(100) not null,
wishfrom varchar(60) not null,
wishto varchar(60) not null,
pkgtype varchar(100) not null,
requestdt date DEFAULT 29990131,
carrier varchar(100) DEFAULT "ENTER NAME WHEN PACKAGE IS BOOKED",
shipdt date DEFAULT 20990331,
deliverdt date DEFAULT 20991231,
wishtostatus varchar(10) not null DEFAULT "Active",
remarks varchar(180) not null,
primary key(id)
);
