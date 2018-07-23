USE wishes_db;

CREATE TABLE wishes (
id int(20) auto_increment not null,
wishcntry varchar(90) not null,
wishcenter varchar(100) not null DEFAULT "STARSHIP Enterprise",
wishadmin varchar(60) not null DEFAULT "ADMIN Placeholder",
wishto varchar(60) not null DEFAULT "RECIPIENT Placeholder",
pkgtype varchar(100) not null  DEFAULT "PKG Placeholder",
request_At date DEFAULT 29991231,
carrier varchar(100) DEFAULT "NOT a STARFLEET Vessel",
shipped_At date DEFAULT 0,
delivery_At date DEFAULT 0,
wishtostatus varchar(10) not null DEFAULT "Active",
remarks varchar(180) not null,
primary key(id)
);
