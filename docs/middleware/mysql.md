---
sidebar_position: 1
---

# MySQL

[mysql.com](https://www.mysql.com/jp/)

## Install on ubuntu

[A Quick Guide to Using the MySQL APT Repository](https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/)

```
wget https://dev.mysql.com/get/mysql-apt-config_0.8.15-1_all.deb
```
```
sudo dpkg -i mysql-apt-config_0.8.15-1_all.deb
```
```
sudo apt update ; sudo apt install -y mysql-server
```
```
rm mysql-apt-config_0.8.15-1_all.deb ; mysql --version
```

## Command

MySQL ログインコマンド
```
mysql -u root -p...
```
サービス起動 `start` `stop` `reload` `restart`
```
sudo systemctl start mysql
```
サービス自動起動 `enable` `disable`
```
sudo systemctl enable mysql
```
サービスステータス表示
```
sudo systemctl status mysql
```
ログ表示
```
sudo journalctl -u mysql
```

## File

<https://qiita.com/stomk/items/6265e9fdfdfb4f104a7e>

<https://gist.github.com/south37/d4a5a8158f49e067237c17d13ecab12a#file-03_mysql-md>

<https://qiita.com/mm-Genqiita/items/3ef91f6df6c15c620ec6>

```
sudo nano /etc/mysql/my.cnf
```
```
sudo systemctl restart mysql
```

> 設定ファイルの場所確認
> ```
> $ mysql --help | grep my.cnf
> /etc/my.cnf /etc/mysql/my.cnf ~/.my.cnf
> ```

## Tuning

```
sudo bash -c 'echo "max_connections = 20000" >> /etc/mysql/mysql.conf.d/mysqld.cnf'
sudo bash -c 'echo "innodb_buffer_pool_size = 1G" >> /etc/mysql/mysql.conf.d/mysqld.cnf'
sudo bash -c 'echo "innodb_flush_log_at_trx_commit = 0" >> /etc/mysql/mysql.conf.d/mysqld.cnf'
sudo bash -c 'echo "innodb_flush_method=O_DIRECT" >> /etc/mysql/mysql.conf.d/mysqld.cnf'
```
```
sudo systemctl restart mysql
```

> 設定値の確認
> ```
> mysql -uroot -p -e 'SHOW variables LIKE "%open_files_limit%";'
> ```
> ```
> mysql -uroot -p -e 'SHOW variables LIKE "%max_connections%";'
> ```

## Slow query log

### File

```js title="/etc/mysql/my.cnf"
[mysqld]
slow_query_log = 1
slow_query_log_file = "/tmp/slow-query.log"
long_query_time = 0
```

### Command

Enable logging
```
mysql -uroot -p -e \
  "set global slow_query_log_file = '/tmp/slow-query.log';\
  set global long_query_time = 0;\
  set global slow_query_log = ON;"
```

Disable logging
```
mysql -uroot -p -e \
  "set global slow_query_log = OFF;"
```
