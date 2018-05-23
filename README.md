## بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

express-mysql-login-api

Simple login and register API using Express and Mysql

Additional
- uniqid
- bcrypt
- jsonwebtoken

## Instalasi
```bash
$ git clone https://github.com/qhoirulanwar/express-mysql-login-api.git

$ cd express-mysql-login-api

$ npm install
```
if need the latest package
```bash
$ npm update
```

Configure Mysql connection in dbconnection.js

/* Please Create your Database */
```
CREATE TABLE `user` (
  `user_id` binary(8) NOT NULL,
  `user_nama` varchar(24) NOT NULL,
  `user_email` varchar(24) NOT NULL,
  `password` binary(60) NOT NULL,
  `reg_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
```
