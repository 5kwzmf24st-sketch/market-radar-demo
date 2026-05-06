# 云析市场雷达本地演示版

运行方式：

最简单方式：直接双击打开：

```text
miniprogram-demo/index.html
```

如果需要实时读取 `output/market_summary.json`，再启动本地服务器：

```powershell
cd C:\Users\sxy\Documents\Codex\2026-05-05\https-github-com-shuixinyun15-repository-name\Repository-name-crypto-market-analyzer-main
.\.venv\Scripts\python.exe generate_miniprogram_json.py --output output\market_summary.json --kline-limit 40
.\.venv\Scripts\python.exe -m http.server 5173
```

浏览器打开：

```text
http://127.0.0.1:5173/miniprogram-demo/
```

数据来源：

```text
output/market_summary.json
```
