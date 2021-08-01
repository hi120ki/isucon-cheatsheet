---
sidebar_position: 2
---

# pprof

<https://github.com/google/pprof>

## Install

```
sudo apt install -y graphviz
```

```go
import (
  _ "net/http/pprof"
)

func main() {
	go func() {
		log.Println(http.ListenAndServe("0.0.0.0:6060", nil))
	}()
}
```
