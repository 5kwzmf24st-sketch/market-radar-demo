window.MARKET_DATA = {
  "schemaVersion": "1.0.0",
  "appName": "云析市场雷达",
  "generatedAt": "2026-05-06 15:27:47 中国标准时间",
  "source": {
    "name": "Binance public API",
    "note": "网络访问失败，已使用本地快照 output/binance_spot_snapshot.json；原始错误：<urlopen error [WinError 10013] 以一种访问权限不允许的方式做了一个访问套接字的尝试。>"
  },
  "disclaimer": "本产品仅用于公开市场数据观察和研究展示，不构成任何投资建议。",
  "overview": {
    "market": "Binance USDT Spot",
    "assetCount": 432,
    "totalQuoteVolume": 7328471512.24,
    "risingCount": 139,
    "fallingCount": 281,
    "flatCount": 12,
    "risingRatioPct": 32.2,
    "top5VolumeRatioPct": 70.7,
    "sentimentScore": 6.1,
    "sentimentStatus": "温和偏强",
    "summary": "当前市场情绪为温和偏强，情绪评分 6.1/10。大盘核心板块平均表现相对靠前。本报告仅用于市场观察，不构成投资建议。"
  },
  "sentiment": {
    "score": 6.1,
    "status": "温和偏强",
    "factors": [
      {
        "label": "24h上涨占比",
        "value": 42.5,
        "unit": "%",
        "interpretation": "衡量市场短线扩散强度"
      },
      {
        "label": "站上EMA60占比",
        "value": 85.0,
        "unit": "%",
        "interpretation": "衡量短中期趋势修复程度"
      },
      {
        "label": "站上EMA120占比",
        "value": 45.0,
        "unit": "%",
        "interpretation": "衡量中期趋势强弱"
      },
      {
        "label": "样本中位涨跌幅",
        "value": -0.01,
        "unit": "%",
        "interpretation": "避免少数极端币种干扰整体判断"
      }
    ]
  },
  "coreAssets": [
    {
      "symbol": "BTCUSDT",
      "asset": "BTC",
      "sector": "大盘核心",
      "price": 80865.77,
      "change24hPct": 0.65,
      "quoteVolume": 1787742843.89,
      "rsi14": 68.6,
      "ema60": 73422.63022778,
      "ema120": 76646.4098751,
      "aboveEma60": true,
      "aboveEma120": true,
      "trend": "多头延续"
    },
    {
      "symbol": "ETHUSDT",
      "asset": "ETH",
      "sector": "大盘核心",
      "price": 2378.18,
      "change24hPct": -0.53,
      "quoteVolume": 870825461.04,
      "rsi14": 56.3,
      "ema60": 2211.82531127,
      "ema120": 2396.3118508,
      "aboveEma60": true,
      "aboveEma120": false,
      "trend": "短线修复"
    },
    {
      "symbol": "SOLUSDT",
      "asset": "SOL",
      "sector": "大盘核心",
      "price": 84.75,
      "change24hPct": -1.2,
      "quoteVolume": 229720964.37,
      "rsi14": 42.7,
      "ema60": 84.78675538,
      "ema120": 96.2630487,
      "aboveEma60": false,
      "aboveEma120": false,
      "trend": "弱势/整理"
    },
    {
      "symbol": "BNBUSDT",
      "asset": "BNB",
      "sector": "大盘核心",
      "price": 626.41,
      "change24hPct": -1.11,
      "quoteVolume": 100461476.1,
      "rsi14": 45.5,
      "ema60": 622.75961642,
      "ema120": 685.59199101,
      "aboveEma60": true,
      "aboveEma120": false,
      "trend": "短线修复"
    }
  ],
  "sectors": [
    {
      "name": "大盘核心",
      "assetCount": 14,
      "quoteVolume": 3465632228.34,
      "avgChange24hPct": 1.07,
      "risingCount": 4,
      "fallingCount": 10,
      "risingRatioPct": 28.6
    },
    {
      "name": "ETH生态/Layer2",
      "assetCount": 15,
      "quoteVolume": 124446556.85,
      "avgChange24hPct": -0.64,
      "risingCount": 5,
      "fallingCount": 10,
      "risingRatioPct": 33.3
    },
    {
      "name": "Layer1/公链",
      "assetCount": 12,
      "quoteVolume": 86340964.38,
      "avgChange24hPct": -1.0,
      "risingCount": 2,
      "fallingCount": 10,
      "risingRatioPct": 16.7
    },
    {
      "name": "MEME",
      "assetCount": 11,
      "quoteVolume": 81319914.24,
      "avgChange24hPct": 0.98,
      "risingCount": 3,
      "fallingCount": 8,
      "risingRatioPct": 27.3
    },
    {
      "name": "AI/数据",
      "assetCount": 9,
      "quoteVolume": 58205791.18,
      "avgChange24hPct": -1.5,
      "risingCount": 0,
      "fallingCount": 9,
      "risingRatioPct": 0.0
    },
    {
      "name": "DeFi",
      "assetCount": 8,
      "quoteVolume": 15638360.1,
      "avgChange24hPct": -0.97,
      "risingCount": 2,
      "fallingCount": 6,
      "risingRatioPct": 25.0
    },
    {
      "name": "GameFi/元宇宙",
      "assetCount": 8,
      "quoteVolume": 10129256.0,
      "avgChange24hPct": -0.5,
      "risingCount": 2,
      "fallingCount": 6,
      "risingRatioPct": 25.0
    }
  ],
  "rankings": {
    "topGainers": [
      {
        "symbol": "DOGSUSDT",
        "asset": "DOGS",
        "sector": "其他",
        "price": 6.39e-05,
        "change24hPct": 90.18,
        "quoteVolume": 26647298.67,
        "rsi14": 88.6,
        "ema60": 3.111e-05,
        "ema120": 3.416e-05,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "TONUSDT",
        "asset": "TON",
        "sector": "大盘核心",
        "price": 1.692,
        "change24hPct": 22.43,
        "quoteVolume": 86568989.39,
        "rsi14": 83.8,
        "ema60": 1.34249783,
        "ema120": 1.4321366,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "TSTUSDT",
        "asset": "TST",
        "sector": "其他",
        "price": 0.02329,
        "change24hPct": 19.74,
        "quoteVolume": 88260135.26,
        "rsi14": 77.9,
        "ema60": 0.01117673,
        "ema120": 0.01208061,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "NOTUSDT",
        "asset": "NOT",
        "sector": "其他",
        "price": 0.000492,
        "change24hPct": 18.84,
        "quoteVolume": 8656072.2,
        "rsi14": 72.9,
        "ema60": 0.00038858,
        "ema120": 0.00043554,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "多头延续"
      },
      {
        "symbol": "CATIUSDT",
        "asset": "CATI",
        "sector": "其他",
        "price": 0.0621,
        "change24hPct": 14.15,
        "quoteVolume": 2277291.65,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "HIVEUSDT",
        "asset": "HIVE",
        "sector": "其他",
        "price": 0.0684,
        "change24hPct": 13.43,
        "quoteVolume": 2522987.74,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "LUNCUSDT",
        "asset": "LUNC",
        "sector": "其他",
        "price": 9.813e-05,
        "change24hPct": 12.03,
        "quoteVolume": 46013191.35,
        "rsi14": 79.0,
        "ema60": 5.226e-05,
        "ema120": 4.698e-05,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "PENDLEUSDT",
        "asset": "PENDLE",
        "sector": "ETH生态/Layer2",
        "price": 1.832,
        "change24hPct": 11.91,
        "quoteVolume": 28898822.73,
        "rsi14": 79.9,
        "ema60": 1.2979146,
        "ema120": 1.47277485,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "HMSTRUSDT",
        "asset": "HMSTR",
        "sector": "其他",
        "price": 0.0001776,
        "change24hPct": 11.63,
        "quoteVolume": 6496458.77,
        "rsi14": 75.8,
        "ema60": 0.00015256,
        "ema120": 0.00017425,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "GIGGLEUSDT",
        "asset": "GIGGLE",
        "sector": "其他",
        "price": 37.92,
        "change24hPct": 11.37,
        "quoteVolume": 41206253.11,
        "rsi14": 51.3,
        "ema60": 31.10625442,
        "ema120": 38.01761894,
        "aboveEma60": true,
        "aboveEma120": false,
        "trend": "短线修复"
      }
    ],
    "topLosers": [
      {
        "symbol": "ORCAUSDT",
        "asset": "ORCA",
        "sector": "其他",
        "price": 1.697,
        "change24hPct": -15.06,
        "quoteVolume": 7466342.3,
        "rsi14": 70.8,
        "ema60": 1.16235419,
        "ema120": 1.10371042,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "多头延续"
      },
      {
        "symbol": "ATUSDT",
        "asset": "AT",
        "sector": "其他",
        "price": 0.1665,
        "change24hPct": -12.37,
        "quoteVolume": 2953257.84,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "SXTUSDT",
        "asset": "SXT",
        "sector": "其他",
        "price": 0.014,
        "change24hPct": -11.78,
        "quoteVolume": 2772074.03,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "MOVRUSDT",
        "asset": "MOVR",
        "sector": "其他",
        "price": 2.2,
        "change24hPct": -10.09,
        "quoteVolume": 2075223.41,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "BIOUSDT",
        "asset": "BIO",
        "sector": "其他",
        "price": 0.0533,
        "change24hPct": -9.51,
        "quoteVolume": 23510787.47,
        "rsi14": 71.8,
        "ema60": 0.02890306,
        "ema120": 0.03169571,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "多头延续"
      },
      {
        "symbol": "BABYUSDT",
        "asset": "BABY",
        "sector": "其他",
        "price": 0.01878,
        "change24hPct": -8.44,
        "quoteVolume": 7290233.93,
        "rsi14": 66.7,
        "ema60": 0.0147856,
        "ema120": 0.01529178,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "多头延续"
      },
      {
        "symbol": "ALLOUSDT",
        "asset": "ALLO",
        "sector": "其他",
        "price": 0.117,
        "change24hPct": -7.07,
        "quoteVolume": 1781452.42,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "DUSKUSDT",
        "asset": "DUSK",
        "sector": "其他",
        "price": 0.133,
        "change24hPct": -7.06,
        "quoteVolume": 827565.19,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "HYPERUSDT",
        "asset": "HYPER",
        "sector": "其他",
        "price": 0.1124,
        "change24hPct": -6.88,
        "quoteVolume": 3833408.05,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      },
      {
        "symbol": "NILUSDT",
        "asset": "NIL",
        "sector": "其他",
        "price": 0.03989,
        "change24hPct": -6.12,
        "quoteVolume": 642291.38,
        "rsi14": null,
        "ema60": null,
        "ema120": null,
        "aboveEma60": null,
        "aboveEma120": null,
        "trend": "弱势/整理"
      }
    ],
    "mostActive": [
      {
        "symbol": "USDCUSDT",
        "asset": "USDC",
        "sector": "其他",
        "price": 1.00001,
        "change24hPct": -0.0,
        "quoteVolume": 2148647289.69,
        "rsi14": 71.6,
        "ema60": 0.99991239,
        "ema120": 1.00009269,
        "aboveEma60": true,
        "aboveEma120": false,
        "trend": "短线修复"
      },
      {
        "symbol": "BTCUSDT",
        "asset": "BTC",
        "sector": "大盘核心",
        "price": 80865.77,
        "change24hPct": 0.65,
        "quoteVolume": 1787742843.89,
        "rsi14": 68.6,
        "ema60": 73422.63022778,
        "ema120": 76646.4098751,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "多头延续"
      },
      {
        "symbol": "ETHUSDT",
        "asset": "ETH",
        "sector": "大盘核心",
        "price": 2378.18,
        "change24hPct": -0.53,
        "quoteVolume": 870825461.04,
        "rsi14": 56.3,
        "ema60": 2211.82531127,
        "ema120": 2396.3118508,
        "aboveEma60": true,
        "aboveEma120": false,
        "trend": "短线修复"
      },
      {
        "symbol": "SOLUSDT",
        "asset": "SOL",
        "sector": "大盘核心",
        "price": 84.75,
        "change24hPct": -1.2,
        "quoteVolume": 229720964.37,
        "rsi14": 42.7,
        "ema60": 84.78675538,
        "ema120": 96.2630487,
        "aboveEma60": false,
        "aboveEma120": false,
        "trend": "弱势/整理"
      },
      {
        "symbol": "ZECUSDT",
        "asset": "ZEC",
        "sector": "其他",
        "price": 427.02,
        "change24hPct": 2.5,
        "quoteVolume": 142117759.9,
        "rsi14": 81.5,
        "ema60": 305.4820977,
        "ema120": 329.31789495,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "DOGEUSDT",
        "asset": "DOGE",
        "sector": "大盘核心",
        "price": 0.11144,
        "change24hPct": -1.51,
        "quoteVolume": 111273627.72,
        "rsi14": 94.9,
        "ema60": 0.09699612,
        "ema120": 0.10661226,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "BNBUSDT",
        "asset": "BNB",
        "sector": "大盘核心",
        "price": 626.41,
        "change24hPct": -1.11,
        "quoteVolume": 100461476.1,
        "rsi14": 45.5,
        "ema60": 622.75961642,
        "ema120": 685.59199101,
        "aboveEma60": true,
        "aboveEma120": false,
        "trend": "短线修复"
      },
      {
        "symbol": "XRPUSDT",
        "asset": "XRP",
        "sector": "大盘核心",
        "price": 1.4004,
        "change24hPct": -1.19,
        "quoteVolume": 93118102.57,
        "rsi14": 38.8,
        "ema60": 1.38657126,
        "ema120": 1.56111202,
        "aboveEma60": true,
        "aboveEma120": false,
        "trend": "短线修复"
      },
      {
        "symbol": "TSTUSDT",
        "asset": "TST",
        "sector": "其他",
        "price": 0.02329,
        "change24hPct": 19.74,
        "quoteVolume": 88260135.26,
        "rsi14": 77.9,
        "ema60": 0.01117673,
        "ema120": 0.01208061,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      },
      {
        "symbol": "TONUSDT",
        "asset": "TON",
        "sector": "大盘核心",
        "price": 1.692,
        "change24hPct": 22.43,
        "quoteVolume": 86568989.39,
        "rsi14": 83.8,
        "ema60": 1.34249783,
        "ema120": 1.4321366,
        "aboveEma60": true,
        "aboveEma120": true,
        "trend": "弱势/整理"
      }
    ]
  },
  "signals": {
    "risk": [
      {
        "level": "medium",
        "title": "下跌数量多于上涨数量",
        "description": "24h下跌 281 个，上涨 139 个，市场扩散偏弱。"
      },
      {
        "level": "high",
        "title": "部分高成交资产处于双线下方",
        "description": "SOL、PAXG、WLFI、NEAR、UNI 等资产位于 EMA60/EMA120 下方，短线波动风险较高。"
      },
      {
        "level": "medium",
        "title": "部分资产 RSI 偏热",
        "description": "ZEC、DOGE、TST、TON、DASH 等资产 RSI14 较高，需关注短线回落风险。"
      }
    ],
    "watchlist": [
      {
        "title": "强势延续",
        "description": "优先观察价格位于 EMA60 与 EMA120 上方、RSI 未极端过热且成交额靠前的资产。"
      },
      {
        "title": "短线修复",
        "description": "观察已站回 EMA60 但仍低于 EMA120 的资产，它们通常处于反弹验证阶段。"
      },
      {
        "title": "风险回避",
        "description": "连续位于 EMA60/EMA120 下方且成交额放大的下跌资产，短线波动风险较高。"
      }
    ]
  },
  "reportSections": [
    {
      "id": "overview",
      "title": "总览统计"
    },
    {
      "id": "coreAssets",
      "title": "大盘核心"
    },
    {
      "id": "sectors",
      "title": "板块表现"
    },
    {
      "id": "rankings",
      "title": "涨跌与成交榜"
    },
    {
      "id": "signals",
      "title": "风险与观察信号"
    }
  ]
};
