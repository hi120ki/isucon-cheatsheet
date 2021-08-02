---
sidebar_position: 4
---

# Command

## scp

<https://qiita.com/katsukii/items/225cd3de6d3d06a9abcb>

リモートからローカルにコピー

```
scp ユーザ名@リモートのホスト名:コピーしたいリモートのファイル ローカルのコピー先
```
```
scp user@remoteHost:/home/user/test.txt /local/path
```

ローカルからリモートにコピー

```
scp コピーしたいローカルのファイルパス ユーザ名@リモートのホスト名:保存したいパス
```
```
scp /local/test.txt user@remoteHost:/home/user/tmp/
```

ディレクトリごとコピー

```
scp -r user@remoteHost:/remote/dir /local/dir
```

## Delete journal log

```
sudo journalctl --rotate ; sudo journalctl --vacuum-time=1s
```

## Initial configuration

```
git config --global user.name "isucon" ; git config --global user.email "isucon@example.com"
```
```
curl https://github.com/hi120ki.keys >> ~/.ssh/authorized_keys
```
```
ssh-keygen -t ed25519 -N "" -f ~/.ssh/id_ed25519 1>/dev/null ; cat ~/.ssh/id_ed25519.pub
```

## Systemctl

サービス一覧
```
sudo systemctl list-unit-files --type=service
```
設定ファイルの再読み込み
```
sudo systemctl daemon-reload
```
