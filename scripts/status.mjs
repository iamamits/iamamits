// Pings the live sites, keeps a rolling history, and renders dist/status.svg
import fs from "node:fs";

const SITES = [
  { name: "EduSaarthi", url: "https://edusaarthi.app" },
  { name: "Dhanwala", url: "https://dhanwala.in" },
];
const MAX = 336; // 7 days at 30-min checks
const BARS = 48;

fs.mkdirSync("dist", { recursive: true });
let data = {};
try { data = JSON.parse(fs.readFileSync("status.json", "utf8")); } catch {}

async function once(url) {
  const t = Date.now();
  try {
    const r = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(10000),
      headers: { "user-agent": "amit-status-bot" },
    });
    return { ok: r.status < 400, ms: Date.now() - t, code: r.status, t };
  } catch {
    return { ok: false, ms: Date.now() - t, code: 0, t };
  }
}
async function check(url) {
  const a = await once(url);
  if (a.ok) return a;
  await new Promise((r) => setTimeout(r, 3000)); // retry once to avoid false alarms
  return once(url);
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const results = [];
for (const s of SITES) {
  const res = await check(s.url);
  const hist = (data[s.name] || []).concat(res).slice(-MAX);
  data[s.name] = hist;
  const up = hist.filter((h) => h.ok).length;
  results.push({ ...s, res, hist, uptime: ((up / hist.length) * 100).toFixed(1) });
}
fs.writeFileSync("dist/status.json", JSON.stringify(data));

const BG = "#0d1117", PANEL = "#161b22", BORDER = "#30363d", TX = "#c9d1d9", MU = "#8b949e";
const GREEN = "#00ff9c", AMBER = "#d29922", RED = "#f85149";
const W = 1000, ROW = 92, H = 56 + ROW * results.length + 34;
const font = "Consolas,Menlo,'Courier New',monospace";
const sans = "Segoe UI,Helvetica,Arial,sans-serif";

let rows = "";
results.forEach((r, i) => {
  const y0 = 56 + i * ROW;
  const slow = r.res.ok && r.res.ms > 2500;
  const col = !r.res.ok ? RED : slow ? AMBER : GREEN;
  const label = !r.res.ok ? "DOWN" : slow ? "SLOW" : "ONLINE";
  const bars = r.hist.slice(-BARS).map((h, j, arr) => {
    const x = 760 + j * 4.2;
    const ht = !h.ok ? 40 : Math.max(6, Math.min(40, (h.ms / 1500) * 40));
    const c = !h.ok ? RED : h.ms > 2500 ? AMBER : GREEN;
    return `<rect x="${x.toFixed(1)}" y="${y0 + 60 - ht}" width="3" height="${ht.toFixed(1)}" rx="1" fill="${c}" opacity="${(0.35 + 0.65 * (j + 1) / arr.length).toFixed(2)}"/>`;
  }).join("");
  rows += `
<line x1="24" y1="${y0 - 8}" x2="976" y2="${y0 - 8}" stroke="${BORDER}"/>
<circle cx="44" cy="${y0 + 28}" r="7" fill="${col}"/>
<circle cx="44" cy="${y0 + 28}" r="7" fill="none" stroke="${col}" stroke-width="2"><animate attributeName="r" values="7;18" dur="2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;0" dur="2s" repeatCount="indefinite"/></circle>
<text x="70" y="${y0 + 30}" font-size="22" font-weight="700" fill="#f0f6fc" font-family="${sans}">${esc(r.name)}</text>
<text x="70" y="${y0 + 52}" font-size="13" fill="${MU}" font-family="${font}">${esc(r.url.replace("https://", ""))}</text>
<text x="330" y="${y0 + 32}" font-size="16" font-weight="700" fill="${col}" font-family="${font}">${label}</text>
<text x="470" y="${y0 + 20}" font-size="11" fill="${MU}" font-family="${sans}" letter-spacing="1">RESPONSE</text>
<text x="470" y="${y0 + 48}" font-size="24" fill="${TX}" font-family="${font}">${r.res.ok ? r.res.ms + " ms" : "--"}</text>
<text x="620" y="${y0 + 20}" font-size="11" fill="${MU}" font-family="${sans}" letter-spacing="1">UPTIME (7D)</text>
<text x="620" y="${y0 + 48}" font-size="24" fill="${TX}" font-family="${font}">${r.uptime}%</text>
${bars}`;
});

const stamp = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Live production status">
<rect width="${W}" height="${H}" rx="12" fill="${BG}" stroke="${BORDER}"/>
<rect x="1" y="1" width="${W - 2}" height="38" rx="11" fill="${PANEL}"/>
<text x="24" y="26" font-size="13" font-weight="700" letter-spacing="2" fill="${MU}" font-family="${sans}">LIVE PRODUCTION STATUS</text>
<circle cx="214" cy="21" r="4" fill="${GREEN}"><animate attributeName="opacity" values="1;.2;1" dur="1.2s" repeatCount="indefinite"/></circle>
<text x="976" y="26" font-size="12" text-anchor="end" fill="${MU}" font-family="${font}">last check ${stamp}</text>
${rows}
<text x="24" y="${H - 12}" font-size="11" fill="${MU}" font-family="${font}">pinged every 30 min by GitHub Actions - real data, no mock</text>
</svg>`;
fs.writeFileSync("dist/status.svg", svg);
console.log(results.map((r) => `${r.name}: ${r.res.ok ? "up" : "down"} ${r.res.ms}ms ${r.uptime}%`).join("\n"));
