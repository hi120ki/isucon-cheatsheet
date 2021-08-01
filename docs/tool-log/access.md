---
sidebar_position: 2
---

# Access

## alp

<https://github.com/tkuchiki/alp>

```
wget https://github.com/tkuchiki/alp/releases/download/v1.0.3/alp_linux_amd64.zip
```
```
unzip alp_linux_amd64.zip ; sudo mv alp /usr/local/bin/alp ; rm alp_linux_amd64.zip
```

- --sort=count (default)
- --sort=max
- --sort=sum
- --sort=avg
- -m "/items/.+,/upload/.+,/transactions/.+,/users/.+"

```
sudo cat /var/log/nginx/access.log |\
  alp -r -m "/items/.+,/upload/.+,/transactions/.+,/users/.+,/new_items/.+,/static/.+" ltsv
```
