---
sidebar_position: 5
---

# Tuning

効果があるかは測定していない

## kernel

```
sudo sysctl -a | grep file-max
```

- net.core.somaxconn = 128
- net.ipv4.tcp_tw_reuse = 0
- net.ipv4.tcp_fin_timeout = 60
- net.ipv4.ip_local_port_range = 32768 6099

```
sudo bash -c 'echo "net.core.somaxconn = 10000" >> /etc/sysctl.conf'
sudo bash -c 'echo "net.ipv4.tcp_tw_reuse = 1" >> /etc/sysctl.conf'
sudo bash -c 'echo "net.ipv4.tcp_fin_timeout = 10" >> /etc/sysctl.conf'
sudo bash -c 'echo -e "net.ipv4.ip_local_port_range = 10000\t60999" >> /etc/sysctl.conf'

sudo sysctl -p
```

## open file limit

```
sudo systemctl status mysql
sudo nano /lib/systemd/system/mysql.service
```

```
[Service]
LimitNOFILE = 65535
```

```
sudo systemctl daemon-reload ; sudo systemctl restart mysql
```
