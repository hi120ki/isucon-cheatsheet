---
sidebar_position: 3
---

# Query

## pt-query-digest

<https://github.com/percona/percona-toolkit>

```
sudo apt install -y percona-toolkit
```

Analyze top queries
```
sudo pt-query-digest /tmp/slow-query.log
```
Analyze all queries
```
sudo pt-query-digest --limit 100% /tmp/slow-query.log
```
Delete log
```
sudo rm /tmp/slow-query.log
```
