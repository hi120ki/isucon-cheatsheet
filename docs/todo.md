---
sidebar_position: 3
---

# ToDo

開始前・開始直後・終了直前にやること

## 開始前

- GitHub レポジトリを作っておく
- slackcat の Key を取っておく <http://slackcat.chat/configure>

## 開始直後

### SSH config

```
Host isucon-bastion
  HostName <指示された踏み台サーバ>
  User <指示されたユーザー名>

Host isucon-server
  ProxyJump isucon-bastion
  HostName <指示されたインスタンスのアドレス>
  LocalForward localhost:10443 localhost:443
```

### Backup

```
~/isucon9-qualify/
/etc/mysql/
/etc/nginx/
/etc/systemd/system/
```

### 自作 Makefile 投入

Makefile の各種変数を編集

セットアップを流す

```
make setup-init
```

表示された公開鍵を GitHub の deploy key に登録(write access 付きで)

### GitHub にコードをアップ

```
touch .gitignore
```

```
git init
git add .
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:hi120ki/isucon9q.git
git push -u origin master
```

### 初回ベンチマーク実行

スコアを Slack に貼る

### nginx.conf 編集

```
sudo cp /etc/nginx/nginx.conf nginx.conf
```

```
    log_format ltsv "time:$time_local"
                    "\thost:$remote_addr"
                    "\tforwardedfor:$http_x_forwarded_for"
                    "\treq:$request"
                    "\tstatus:$status"
                    "\tsize:$body_bytes_sent"
                    "\treferer:$http_referer"
                    "\tua:$http_user_agent"
                    "\treqtime:$request_time"
                    "\tcache:$upstream_http_x_cache"
                    "\truntime:$upstream_http_x_runtime"
                    "\tvhost:$host"
                    "\tmethod:$request_method"
                    "\turi:$request_uri";
```

```
    # access_log off;
    access_log  /var/log/nginx/access.log  ltsv;
```

```
sudo cp nginx.conf /etc/nginx/nginx.conf
```

```
sudo systemctl restart nginx
```

### pprof を main.go に追加

import 内

```go
	"runtime"
	_ "net/http/pprof"
```

main 関数の先頭

```go
	runtime.SetBlockProfileRate(1)
	go func() {
		fmt.Println(http.ListenAndServe("0.0.0.0:6060", nil))
	}()
```

### 解析ツールのインストール・カーネルパラメータ・MySQL 設定の変更

```
make setup-tool
```

```
make setup-kernel
```

```
make setup-db-conf
```

### MySQL の LimitNOFILE 編集

```
sudo systemctl status mysql
```

```
sudo nano /lib/systemd/system/mysql.service
```

```js title="/lib/systemd/system/mysql.service"
[Service];
LimitNOFILE = 65535;
```

```
sudo systemctl daemon-reload ; sudo systemctl restart mysql
```

### 計測

```
make pre
```

ベンチマーク実行

```
make post
```

スコアを git tag に記録する

netdata でどのリソースが専有されているか確認 <http://0.0.0.0:19999>

### deploy.sh の作成

```
sudo systemctl list-unit-files --type=service
```

```bash
#!/bin/bash

# ssh isucon "cd ~/isucon9-qualify ; bash deploy.sh master"

export GOENV_ROOT="$HOME/.goenv"
export PATH="$GOENV_ROOT/bin:$PATH"
eval "$(goenv init -)"

cd ~/isucon9-qualify
git pull
git checkout $1
cd ~/isucon9-qualify/webapp/go
go build -o isucari

sudo systemctl restart isucari
sudo systemctl status isucari

echo "!!!benchmark start!!!"
sudo systemctl stop isu-shipment
sudo systemctl stop isu-payment
cd ~/isucon9-qualify
./bin/benchmarker
echo "!!!benchmark finish!!!"

sudo systemctl start isu-shipment
sudo systemctl start isu-payment
```

## 終了直前

- [ ] `cat /etc/nginx/nginx.conf` logging off

- [ ] `sudo systemctl status nginx` > enabled

- [ ] mysql logging off

- [ ] `sudo systemctl status mysql` > enabled

- [ ] delete ~/logs/

- [ ] `sudo systemctl status netdata` > stop & disable

- [ ] delete pprof

- [ ] main 関数に DB 操作が入っていない

- [ ] MySQL が起動してない状態で API を再起動しても落ちない

- [ ] 再起動で正常動作&ベンチマーク完走
