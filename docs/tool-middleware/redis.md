---
sidebar_position: 3
---

# Redis

<https://redis.io/>

## Install on ubuntu

```
sudo add-apt-repository -y ppa:chris-lea/redis-server ; sudo apt install -y redis-server
```
```
redis-server -v
```

```
sudo nano /etc/redis/redis.conf
```

`bind ~` 以下をコメントアウトしてlocalhost以外からも繋げるようにする

```
sudo systemctl restart redis-server
```

## Command

サービス起動 start/stop/reload
```
$ sudo systemctl start redis-server
```
サービス自動起動 enable/disable
```
$ sudo systemctl enable redis-server
```
サービスステータス表示
```
$ sudo systemctl status redis-server
```
ログ表示
```
$ sudo journalctl -u redis-server
```

## Library - Golang

<https://github.com/go-redis/redis>

```
go get github.com/go-redis/redis/v8
```
