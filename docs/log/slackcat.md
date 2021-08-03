---
sidebar_position: 1
---

# slackcat

<https://github.com/bcicen/slackcat>

<https://github.com/bcicen/slackcat/releases>

## Install

```
curl -Lo slackcat https://github.com/bcicen/slackcat/releases/download/1.7.2/slackcat-1.7.2-$(uname -s)-amd64
```
```
sudo mv slackcat /usr/local/bin/ ; sudo chmod +x /usr/local/bin/slackcat
```
```
slackcat --configure
```

## Command

Pipe command output as a text snippet:
```bash
$ echo -e "hi\nthere" | slackcat --channel general --filename hello
*slackcat* file hello uploaded to general
```

Post an existing file:
```bash
$ slackcat --channel general /home/user/bot.png
*slackcat* file bot.png uploaded to general
```

Stream input continuously:
```bash
$ tail -F -n0 /path/to/log | slackcat --channel general --stream
*slackcat* posted 5 message lines to general
*slackcat* posted 2 message lines to general
...
```
