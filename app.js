const DATA_URL = "../output/market_summary.json";

const formatNumber = (value, digits = 2) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "--";
  return Number(value).toLocaleString("en-US", {
    maximumFractionDigits: digits,
  });
};

const formatMoney = (value) => {
  if (!Number.isFinite(Number(value))) return "--";
  const num = Number(value);
  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
  return `$${formatNumber(num, 0)}`;
};

const formatPct = (value) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "--";
  const num = Number(value);
  const sign = num > 0 ? "+" : "";
  return `${sign}${num.toFixed(2)}%`;
};

const changeClass = (value) => {
  if (value > 0) return "up";
  if (value < 0) return "down";
  return "flat";
};

const byId = (id) => document.getElementById(id);

function setTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      byId(`view-${button.dataset.view}`).classList.add("active");
    });
  });
}

function renderOverview(data) {
  const overview = data.overview;
  byId("sentimentScore").textContent = overview.sentimentScore ?? "--";
  byId("sentimentStatus").textContent = overview.sentimentStatus ?? "等待数据";
  byId("marketSummary").textContent = overview.summary ?? "暂无市场摘要。";
  byId("assetCount").textContent = formatNumber(overview.assetCount, 0);
  byId("totalVolume").textContent = formatMoney(overview.totalQuoteVolume);
  byId("risingRatio").textContent = `${overview.risingRatioPct ?? "--"}%`;
  byId("top5Ratio").textContent = `${overview.top5VolumeRatioPct ?? "--"}%`;
  byId("updateTime").textContent = data.generatedAt ?? "--";
  byId("dataStatus").textContent = "已更新";

  const degree = Math.max(0, Math.min(10, Number(overview.sentimentScore || 0))) * 36;
  byId("scoreGauge").style.background = `conic-gradient(var(--green) ${degree}deg, rgba(255,255,255,.18) 0deg)`;
}

function renderCoreAssets(assets) {
  byId("coreAssets").innerHTML = assets
    .map(
      (asset) => `
        <article class="asset-row">
          <div>
            <div class="asset-name">${asset.asset}</div>
            <div class="asset-symbol">${asset.symbol}</div>
          </div>
          <div>
            <div class="meta">${asset.trend}</div>
            <div class="meta">RSI ${asset.rsi14 ?? "--"} · EMA60 ${asset.aboveEma60 ? "上方" : "下方"} · EMA120 ${asset.aboveEma120 ? "上方" : "下方"}</div>
          </div>
          <div class="price">
            <div>${formatNumber(asset.price, 8)}</div>
            <span class="change ${changeClass(asset.change24hPct)}">${formatPct(asset.change24hPct)}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFactors(factors) {
  byId("sentimentFactors").innerHTML = factors
    .map((factor) => {
      const width = factor.unit === "%" ? Math.max(0, Math.min(100, factor.value || 0)) : 50;
      return `
        <article class="factor-row">
          <div class="row-title">
            <span>${factor.label}</span>
            <span>${factor.value ?? "--"}${factor.unit ?? ""}</span>
          </div>
          <div class="bar"><span style="width:${width}%"></span></div>
          <p class="description">${factor.interpretation}</p>
        </article>
      `;
    })
    .join("");
}

function renderSectors(sectors) {
  const maxVolume = Math.max(...sectors.map((sector) => sector.quoteVolume), 1);
  byId("sectors").innerHTML = sectors
    .map((sector) => {
      const width = Math.max(6, (sector.quoteVolume / maxVolume) * 100);
      return `
        <article class="sector-row">
          <div class="row-title">
            <span>${sector.name}</span>
            <span class="${changeClass(sector.avgChange24hPct)} change">${formatPct(sector.avgChange24hPct)}</span>
          </div>
          <div class="bar"><span style="width:${width}%"></span></div>
          <p class="description">${sector.assetCount} 个资产 · 成交额 ${formatMoney(sector.quoteVolume)} · 上涨占比 ${sector.risingRatioPct}%</p>
        </article>
      `;
    })
    .join("");
}

function renderRanking(targetId, rows) {
  byId(targetId).innerHTML = rows
    .map(
      (asset, index) => `
        <article class="ranking-row">
          <div>
            <div class="asset-name">${index + 1}. ${asset.asset}</div>
            <div class="asset-symbol">${asset.sector}</div>
          </div>
          <div>
            <div class="meta">${asset.symbol}</div>
            <div class="meta">成交额 ${formatMoney(asset.quoteVolume)}</div>
          </div>
          <div class="price">
            <div>${formatNumber(asset.price, 8)}</div>
            <span class="change ${changeClass(asset.change24hPct)}">${formatPct(asset.change24hPct)}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSignals(targetId, signals) {
  byId(targetId).innerHTML = signals
    .map(
      (signal) => `
        <article class="signal-row risk-${signal.level || "medium"}">
          <div class="row-title">
            <span>${signal.title}</span>
          </div>
          <p class="description">${signal.description}</p>
        </article>
      `,
    )
    .join("");
}

function render(data) {
  renderOverview(data);
  renderCoreAssets(data.coreAssets || []);
  renderFactors(data.sentiment?.factors || []);
  renderSectors(data.sectors || []);
  renderRanking("topGainers", data.rankings?.topGainers || []);
  renderRanking("topLosers", data.rankings?.topLosers || []);
  renderRanking("mostActive", data.rankings?.mostActive || []);
  renderSignals("riskSignals", data.signals?.risk || []);
  renderSignals("watchlist", data.signals?.watchlist || []);
}

async function loadData() {
  if (window.MARKET_DATA) {
    render(window.MARKET_DATA);
    return;
  }

  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    render(data);
  } catch (error) {
    byId("dataStatus").textContent = "读取失败";
    byId("marketSummary").textContent = `无法读取 ${DATA_URL}，请通过本地服务器打开演示页。`;
    console.error(error);
  }
}

setTabs();
loadData();
