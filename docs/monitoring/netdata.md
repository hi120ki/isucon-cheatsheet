---
sidebar_position: 1
---

# Netdata

<https://www.netdata.cloud/>

## Install

```
bash <(curl -Ss https://my-netdata.io/kickstart.sh) --non-interactive
sudo sed -i.bk -e 's/bind to = localhost/bind to = 0.0.0.0/g' /etc/netdata/netdata.conf
```

<http://localhost:19999/>

## Command

サービス起動 `start` `stop` `reload` `restart`
```
sudo systemctl start netdata
```
サービス自動起動 `enable` `disable`
```
sudo systemctl enable netdata
```
サービスステータス表示
```
sudo systemctl status netdata
```
