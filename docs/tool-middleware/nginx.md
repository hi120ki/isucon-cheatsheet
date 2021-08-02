---
sidebar_position: 2
---

# Nginx

<https://nginx.org/en/>

## Install on ubuntu

<https://nginx.org/en/linux_packages.html#Ubuntu>

```
sudo apt install -y curl gnupg2 ca-certificates lsb-release
```
```
echo "deb http://nginx.org/packages/mainline/ubuntu `lsb_release -cs` nginx" | sudo tee /etc/apt/sources.list.d/nginx.list
```
```
curl -fsSL https://nginx.org/keys/nginx_signing.key | sudo apt-key add -
```
```
sudo apt update ; sudo apt install -y nginx
```

## Command

サービス起動 `start` `stop` `reload` `restart`
```
sudo systemctl start nginx
```
サービス自動起動 `enable` `disable`
```
sudo systemctl enable nginx
```
サービスステータス表示
```
sudo systemctl status nginx
```
ログ表示
```
sudo journalctl -u nginx
```

## File

### Default

```conf title="/etc/nginx/nginx.conf"
user  nginx;
worker_processes  auto;

error_log  /var/log/nginx/error.log notice;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
```

```conf title="/etc/nginx/conf.d/default.conf"
server {
    listen       80;
    server_name  localhost;

    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

### Basic

```
    server_tokens off;
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    types_hash_max_size 2048;
    open_file_cache max=100000 inactive=20s;

    keepalive_timeout 65;
    keepalive_requests 500;

    gzip_static on;
    # gzip  on;
    # gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript application/json;
```

### LTSV

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

    # access_log off;
    access_log  /var/log/nginx/access.log  ltsv;
```

### Proxy

```
    upstream app {
        server 127.0.0.1:8080;
    }

    upstream login {
        server 127.0.0.1:8080 weight=4;
        server 192.168.0.213:8080 weight=6;
    }

    server {
        listen       8000;
        server_name  localhost;

        root   /home/vagrant/isucon9-qualify/webapp/public;

        location /static/ {
            add_header Cache-Control "public max-age=86400";
        }
        location /upload/ {
            add_header Cache-Control "public max-age=86400";
        }

        location / {
            proxy_pass http://app;
            proxy_set_header Host $host;
        }

        location /login {
            proxy_pass http://login;
            proxy_set_header Host $host;
        }

    }
```
