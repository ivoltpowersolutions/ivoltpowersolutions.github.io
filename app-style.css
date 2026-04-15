<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>iVolt Platform — Bot Services Portal</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
/* ── RESET & BASE ─────────────────────────────────────────────── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 16px; }

:root {
  --bg:        #0b0c0f;
  --surface:   #111318;
  --card:      #16191f;
  --border:    rgba(255,255,255,0.07);
  --border-hi: rgba(255,255,255,0.14);
  --accent:    #c8a96e;
  --accent2:   #7b9cff;
  --tg:        #2b9fd9;
  --wa:        #25d366;
  --text:      #e8e9ed;
  --muted:     #7a7f8e;
  --subtle:    #3a3f4e;
  --danger:    #e05c5c;
  --success:   #4caf84;
  --serif:     'DM Serif Display', Georgia, serif;
  --sans:      'DM Sans', system-ui, sans-serif;
  --mono:      'JetBrains Mono', monospace;
  --radius:    6px;
  --radius-lg: 12px;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-size: 0.9375rem;
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
}

a { color: inherit; text-decoration: none; }
button { font-family: var(--sans); cursor: pointer; border: none; background: none; }
input, select, textarea { font-family: var(--sans); }
::placeholder { color: var(--muted); }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--subtle); border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: var(--accent); }

/* ── LAYOUT ───────────────────────────────────────────────────── */
.app-shell { display: flex; flex-direction: column; min-height: 100vh; }

/* ── TOPBAR ───────────────────────────────────────────────────── */
.topbar {
  position: sticky; top: 0; z-index: 100;
  background: rgba(11,12,15,0.9);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  height: 60px;
  display: flex; align-items: center;
  padding: 0 28px;
  gap: 32px;
}
.topbar-brand {
  font-family: var(--serif);
  font-size: 1.25rem;
  color: var(--accent);
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.topbar-brand span { color: var(--text); font-style: italic; }
.topbar-nav {
  display: flex; gap: 4px; flex: 1; align-items: center;
  overflow-x: auto; scrollbar-width: none;
}
.topbar-nav::-webkit-scrollbar { display: none; }
.nav-btn {
  padding: 6px 14px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--muted);
  border-radius: var(--radius);
  white-space: nowrap;
  transition: all 0.15s;
  letter-spacing: 0.01em;
}
.nav-btn:hover { color: var(--text); background: var(--surface); }
.nav-btn.active { color: var(--text); background: var(--surface); border: 1px solid var(--border-hi); }
.topbar-actions { display: flex; gap: 8px; align-items: center; margin-left: auto; }
.user-badge {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.8125rem;
  color: var(--muted);
  cursor: pointer;
  transition: border-color 0.15s;
}
.user-badge:hover { border-color: var(--border-hi); color: var(--text); }
.user-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--muted); }
.user-dot.online { background: var(--success); box-shadow: 0 0 0 2px rgba(76,175,132,0.2); }

/* ── PAGES ────────────────────────────────────────────────────── */
.page { display: none; }
.page.active { display: block; }

/* ── HERO ─────────────────────────────────────────────────────── */
.hero {
  padding: 72px 28px 64px;
  max-width: 900px;
}
.hero-eyebrow {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: flex; align-items: center; gap: 10px;
}
.hero-eyebrow::before {
  content: '';
  display: block; width: 24px; height: 1px;
  background: var(--accent);
}
.hero h1 {
  font-family: var(--serif);
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.15;
  color: var(--text);
  margin-bottom: 20px;
  font-weight: 400;
}
.hero h1 em { color: var(--accent); font-style: italic; }
.hero-sub {
  font-size: 1rem;
  color: var(--muted);
  max-width: 560px;
  margin-bottom: 36px;
  line-height: 1.75;
}
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* ── BUTTONS ──────────────────────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 22px;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: var(--radius);
  transition: all 0.18s;
  letter-spacing: 0.01em;
}
.btn-primary {
  background: var(--accent);
  color: #0b0c0f;
}
.btn-primary:hover { background: #d9bc82; transform: translateY(-1px); }
.btn-secondary {
  background: var(--surface);
  color: var(--text);
  border: 1px solid var(--border-hi);
}
.btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
.btn-tg { background: rgba(43,159,217,0.1); color: var(--tg); border: 1px solid rgba(43,159,217,0.25); }
.btn-tg:hover { background: rgba(43,159,217,0.18); }
.btn-wa { background: rgba(37,211,102,0.1); color: var(--wa); border: 1px solid rgba(37,211,102,0.25); }
.btn-wa:hover { background: rgba(37,211,102,0.18); }
.btn-sm { padding: 7px 14px; font-size: 0.8125rem; }
.btn-full { width: 100%; justify-content: center; }
.btn-danger { background: rgba(224,92,92,0.1); color: var(--danger); border: 1px solid rgba(224,92,92,0.25); }
.btn-danger:hover { background: rgba(224,92,92,0.18); }

/* ── SECTION ──────────────────────────────────────────────────── */
.section { padding: 48px 28px; }
.section-header { margin-bottom: 32px; }
.section-label {
  font-family: var(--mono);
  font-size: 0.7rem;
  color: var(--accent);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.section-title {
  font-family: var(--serif);
  font-size: 1.75rem;
  font-weight: 400;
  color: var(--text);
}
.section-desc { color: var(--muted); font-size: 0.9rem; margin-top: 6px; max-width: 560px; }

/* ── BOT GRID ─────────────────────────────────────────────────── */
.bot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}
.bot-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  transition: border-color 0.2s, transform 0.2s;
  cursor: pointer;
}
.bot-card:hover { border-color: var(--border-hi); transform: translateY(-2px); }
.bot-card.featured { border-color: rgba(200,169,110,0.3); }
.bot-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; }
.bot-icon {
  width: 42px; height: 42px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  font-family: var(--mono);
  font-weight: 500;
  letter-spacing: -0.02em;
}
.bot-icon.gold { background: rgba(200,169,110,0.12); color: var(--accent); border: 1px solid rgba(200,169,110,0.2); }
.bot-icon.blue { background: rgba(123,156,255,0.12); color: var(--accent2); border: 1px solid rgba(123,156,255,0.2); }
.bot-icon.teal { background: rgba(43,159,217,0.12); color: var(--tg); border: 1px solid rgba(43,159,217,0.2); }
.bot-icon.green { background: rgba(76,175,132,0.12); color: var(--success); border: 1px solid rgba(76,175,132,0.2); }
.bot-badge {
  font-size: 0.6875rem;
  font-family: var(--mono);
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: 3px;
  text-transform: uppercase;
}
.bot-badge.active { background: rgba(76,175,132,0.1); color: var(--success); border: 1px solid rgba(76,175,132,0.2); }
.bot-badge.premium { background: rgba(200,169,110,0.1); color: var(--accent); border: 1px solid rgba(200,169,110,0.2); }
.bot-badge.free { background: rgba(123,156,255,0.1); color: var(--accent2); border: 1px solid rgba(123,156,255,0.2); }
.bot-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 6px;
}
.bot-desc {
  font-size: 0.8375rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 16px;
}
.bot-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
.tag {
  font-size: 0.7rem;
  font-family: var(--mono);
  color: var(--muted);
  background: var(--surface);
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid var(--border);
  white-space: nowrap;
}
.bot-card-footer {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
.bot-price { font-size: 0.875rem; }
.bot-price-label { font-size: 0.7rem; color: var(--muted); }
.bot-price-value { font-weight: 600; color: var(--text); font-size: 0.95rem; }
.bot-price-value.free { color: var(--success); }

/* ── PRICING MODAL ────────────────────────────────────────────── */
.modal-overlay {
  position: fixed; inset: 0; z-index: 200;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(6px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.modal-overlay.open { display: flex; }
.modal {
  background: var(--card);
  border: 1px solid var(--border-hi);
  border-radius: var(--radius-lg);
  width: 100%; max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  animation: modalIn 0.2s ease;
}
@keyframes modalIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
.modal-header {
  padding: 24px 24px 0;
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 20px;
}
.modal-title { font-family: var(--serif); font-size: 1.35rem; font-weight: 400; }
.modal-close {
  width: 32px; height: 32px;
  border-radius: var(--radius);
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--muted);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  transition: all 0.15s;
}
.modal-close:hover { color: var(--text); border-color: var(--border-hi); }
.modal-body { padding: 0 24px 24px; }
.plan-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; }
.plan-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
  cursor: pointer;
  transition: border-color 0.15s;
}
.plan-card:hover { border-color: var(--accent); }
.plan-card.selected { border-color: var(--accent); background: rgba(200,169,110,0.04); }
.plan-name { font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin-bottom: 6px; }
.plan-price { font-size: 1.3rem; font-weight: 600; color: var(--text); }
.plan-price span { font-size: 0.75rem; color: var(--muted); font-weight: 400; }
.plan-features { margin-top: 10px; }
.plan-feature { font-size: 0.775rem; color: var(--muted); display: flex; gap: 6px; margin-bottom: 4px; }
.plan-feature::before { content: '+'; color: var(--success); font-weight: 700; flex-shrink: 0; }
.payment-methods { margin-bottom: 20px; }
.pm-label { font-size: 0.8rem; color: var(--muted); margin-bottom: 10px; letter-spacing: 0.04em; }
.pm-tabs { display: flex; gap: 8px; margin-bottom: 16px; }
.pm-tab {
  flex: 1; padding: 9px 14px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--muted);
  background: var(--surface);
  transition: all 0.15s;
  text-align: center;
}
.pm-tab:hover { border-color: var(--border-hi); color: var(--text); }
.pm-tab.active { border-color: var(--accent); color: var(--accent); background: rgba(200,169,110,0.04); }
.pm-info {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  font-size: 0.8375rem;
  color: var(--muted);
  line-height: 1.7;
}
.pm-info strong { color: var(--text); font-weight: 500; }
.pm-info .mono { font-family: var(--mono); color: var(--accent); font-size: 0.8rem; }

/* ── AUTH ─────────────────────────────────────────────────────── */
.auth-wrap {
  min-height: calc(100vh - 60px);
  display: flex; align-items: center; justify-content: center;
  padding: 32px 20px;
}
.auth-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
  width: 100%; max-width: 400px;
}
.auth-title {
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 6px;
}
.auth-sub { font-size: 0.85rem; color: var(--muted); margin-bottom: 28px; }
.auth-tabs { display: flex; gap: 0; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; margin-bottom: 24px; }
.auth-tab {
  flex: 1; padding: 9px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--muted);
  background: none;
  transition: all 0.15s;
  text-align: center;
}
.auth-tab.active { background: var(--surface); color: var(--text); }
.form-group { margin-bottom: 16px; }
.form-label { display: block; font-size: 0.8rem; color: var(--muted); margin-bottom: 6px; letter-spacing: 0.03em; }
.form-input {
  width: 100%; padding: 10px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-size: 0.875rem;
  transition: border-color 0.15s;
  outline: none;
}
.form-input:focus { border-color: var(--accent); }
.form-input.mono { font-family: var(--mono); font-size: 0.8125rem; }
.form-hint { font-size: 0.75rem; color: var(--muted); margin-top: 5px; }
.form-divider { display: flex; align-items: center; gap: 12px; margin: 16px 0; }
.form-divider::before, .form-divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
.form-divider span { font-size: 0.75rem; color: var(--muted); }
.auth-footer { margin-top: 16px; text-align: center; font-size: 0.8rem; color: var(--muted); }
.auth-footer a { color: var(--accent); cursor: pointer; }
.recover-link { font-size: 0.8rem; color: var(--accent); cursor: pointer; float: right; }

/* ── DASHBOARD ────────────────────────────────────────────────── */
.dash-grid {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 0;
  min-height: calc(100vh - 60px);
}
.dash-sidebar {
  background: var(--surface);
  border-right: 1px solid var(--border);
  padding: 28px 0;
}
.dash-sidebar-user {
  padding: 0 20px 20px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 12px;
}
.dash-user-id {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--accent);
  margin-bottom: 2px;
}
.dash-user-name { font-size: 0.9rem; font-weight: 500; }
.dash-user-plan { font-size: 0.75rem; color: var(--muted); }
.dash-nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 20px;
  font-size: 0.8375rem;
  color: var(--muted);
  cursor: pointer;
  transition: all 0.12s;
  border-left: 2px solid transparent;
}
.dash-nav-item:hover { color: var(--text); background: rgba(255,255,255,0.03); }
.dash-nav-item.active { color: var(--text); border-left-color: var(--accent); background: rgba(200,169,110,0.04); }
.dash-nav-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--border-hi); flex-shrink: 0; }
.dash-nav-dot.pulse { background: var(--success); animation: pulse 2s infinite; }
@keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(76,175,132,0.4)} 50%{opacity:0.8;box-shadow:0 0 0 4px rgba(76,175,132,0)} }
.dash-main { padding: 32px; overflow-y: auto; }
.dash-section { display: none; }
.dash-section.active { display: block; }

/* ── STAT CARDS ───────────────────────────────────────────────── */
.stat-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-bottom: 28px; }
.stat-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px;
}
.stat-label { font-size: 0.75rem; color: var(--muted); letter-spacing: 0.04em; margin-bottom: 8px; }
.stat-value { font-size: 1.5rem; font-weight: 600; color: var(--text); font-family: var(--mono); }
.stat-value.accent { color: var(--accent); }
.stat-sub { font-size: 0.75rem; color: var(--muted); margin-top: 4px; }

/* ── ORDER TABLE ──────────────────────────────────────────────── */
.order-table { width: 100%; border-collapse: collapse; }
.order-table th {
  text-align: left;
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 10px 14px;
  border-bottom: 1px solid var(--border);
}
.order-table td {
  padding: 12px 14px;
  font-size: 0.85rem;
  border-bottom: 1px solid var(--border);
  vertical-align: middle;
}
.order-table tr:last-child td { border-bottom: none; }
.order-table tr:hover td { background: rgba(255,255,255,0.015); }
.status-pill {
  display: inline-flex; align-items: center; gap: 5px;
  font-size: 0.7rem;
  font-family: var(--mono);
  padding: 3px 9px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.status-pill.pending { background: rgba(245,166,35,0.1); color: #f5a623; border: 1px solid rgba(245,166,35,0.2); }
.status-pill.active { background: rgba(76,175,132,0.1); color: var(--success); border: 1px solid rgba(76,175,132,0.2); }
.status-pill.expired { background: rgba(122,127,142,0.1); color: var(--muted); border: 1px solid var(--border); }
.status-pill.cancelled { background: rgba(224,92,92,0.1); color: var(--danger); border: 1px solid rgba(224,92,92,0.2); }
.status-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }

/* ── ORDER TRACKING ───────────────────────────────────────────── */
.track-form { max-width: 480px; display: flex; gap: 10px; margin-bottom: 24px; }
.track-result {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  max-width: 640px;
}
.track-timeline { margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border); }
.timeline-item { display: flex; gap: 16px; margin-bottom: 16px; }
.timeline-icon { width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--border); background: var(--surface); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.65rem; font-family: var(--mono); color: var(--muted); }
.timeline-icon.done { border-color: rgba(76,175,132,0.4); background: rgba(76,175,132,0.08); color: var(--success); }
.timeline-icon.current { border-color: var(--accent); background: rgba(200,169,110,0.08); color: var(--accent); }
.timeline-text { font-size: 0.85rem; }
.timeline-text strong { display: block; color: var(--text); margin-bottom: 2px; }
.timeline-text span { color: var(--muted); font-size: 0.78rem; }

/* ── CONTACT SECTION ──────────────────────────────────────────── */
.contact-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.contact-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: border-color 0.2s;
}
.contact-card:hover { border-color: var(--border-hi); }
.contact-platform { font-family: var(--mono); font-size: 0.7rem; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; margin-bottom: 10px; }
.contact-purpose { font-size: 0.95rem; font-weight: 500; color: var(--text); margin-bottom: 6px; }
.contact-desc { font-size: 0.8375rem; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }
.contact-response { font-size: 0.75rem; color: var(--muted); margin-top: 10px; }
.contact-response strong { color: var(--text); }

/* ── ALERT ────────────────────────────────────────────────────── */
.alert {
  padding: 12px 16px;
  border-radius: var(--radius);
  font-size: 0.8375rem;
  margin-bottom: 16px;
  display: flex; gap: 10px; align-items: flex-start;
}
.alert-info { background: rgba(123,156,255,0.08); border: 1px solid rgba(123,156,255,0.2); color: var(--accent2); }
.alert-success { background: rgba(76,175,132,0.08); border: 1px solid rgba(76,175,132,0.2); color: var(--success); }
.alert-warn { background: rgba(245,166,35,0.08); border: 1px solid rgba(245,166,35,0.2); color: #f5a623; }
.alert-icon { font-size: 0.8rem; margin-top: 1px; flex-shrink: 0; }
.alert-text { color: var(--text); }
.alert-text p { margin-bottom: 4px; }
.alert-text p:last-child { margin-bottom: 0; }
.alert-text strong { font-weight: 600; }

/* ── DIVIDER ──────────────────────────────────────────────────── */
.divider { height: 1px; background: var(--border); margin: 0; }

/* ── FOOTER ───────────────────────────────────────────────────── */
.footer {
  padding: 28px;
  border-top: 1px solid var(--border);
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
}
.footer-brand { font-family: var(--serif); font-size: 1rem; color: var(--accent); }
.footer-links { display: flex; gap: 20px; }
.footer-link { font-size: 0.8rem; color: var(--muted); transition: color 0.15s; cursor: pointer; }
.footer-link:hover { color: var(--text); }
.footer-copy { font-size: 0.75rem; color: var(--muted); width: 100%; }

/* ── PREORDER SECTION ─────────────────────────────────────────── */
.preorder-box {
  background: linear-gradient(135deg, rgba(200,169,110,0.06) 0%, rgba(123,156,255,0.04) 100%);
  border: 1px solid rgba(200,169,110,0.2);
  border-radius: var(--radius-lg);
  padding: 36px;
  max-width: 700px;
  margin-bottom: 28px;
}
.preorder-title { font-family: var(--serif); font-size: 1.4rem; font-weight: 400; margin-bottom: 8px; }
.preorder-desc { font-size: 0.875rem; color: var(--muted); line-height: 1.7; margin-bottom: 24px; max-width: 500px; }
.preorder-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* ── NOTICE ───────────────────────────────────────────────────── */
.notice-bar {
  background: rgba(200,169,110,0.06);
  border-bottom: 1px solid rgba(200,169,110,0.15);
  padding: 8px 28px;
  display: flex; align-items: center; gap: 10px;
  font-size: 0.8rem; color: var(--muted);
}
.notice-bar strong { color: var(--accent); }

/* ── RESPONSIVE ───────────────────────────────────────────────── */
@media (max-width: 768px) {
  .topbar { padding: 0 16px; gap: 16px; }
  .hero { padding: 40px 16px 40px; }
  .section { padding: 32px 16px; }
  .bot-grid { grid-template-columns: 1fr; }
  .plan-grid { grid-template-columns: 1fr; }
  .dash-grid { grid-template-columns: 1fr; }
  .dash-sidebar { border-right: none; border-bottom: 1px solid var(--border); padding: 12px 0; }
  .dash-main { padding: 20px 16px; }
  .contact-grid { grid-template-columns: 1fr; }
  .auth-card { padding: 28px 20px; }
  .footer { flex-direction: column; }
  .track-form { flex-direction: column; }
  .nav-btn { display: none; }
  .nav-btn.priority { display: block; }
}
</style>
</head>
<body>
<div class="app-shell" id="app">

<!-- ── TOPBAR ── -->
<header class="topbar">
  <div class="topbar-brand">iVolt <span>Platform</span></div>
  <nav class="topbar-nav" id="mainNav">
    <button class="nav-btn priority active" onclick="showPage('home')">Overview</button>
    <button class="nav-btn priority" onclick="showPage('bots')">Bot Services</button>
    <button class="nav-btn" onclick="showPage('pricing')">Pricing</button>
    <button class="nav-btn" onclick="showPage('track')">Track Order</button>
    <button class="nav-btn" onclick="showPage('contact')">Contact</button>
  </nav>
  <div class="topbar-actions" id="topbarActions">
    <button class="btn btn-secondary btn-sm" onclick="showPage('auth')">Sign In</button>
    <button class="btn btn-primary btn-sm" onclick="showAuthTab('register')">Create Account</button>
  </div>
</header>

<!-- ── NOTICE BAR ── -->
<div class="notice-bar" id="noticeBar">
  <strong>Service Notice:</strong> Manual payment processing is available Mon–Sat, 8 AM–8 PM WAT. Automatic payments are available 24/7.
</div>

<!-- ═══════════ PAGE: HOME ═══════════ -->
<div class="page active" id="page-home">
  <div class="hero">
    <div class="hero-eyebrow">iVolt Bot Services Portal</div>
    <h1>Automate. Monitor.<br><em>Stay informed.</em></h1>
    <p class="hero-sub">
      Access a suite of specialised Telegram bots for power equipment trading, market intelligence, financial signals, and project management — each with its own capabilities and subscription options.
    </p>
    <div class="hero-actions">
      <button class="btn btn-primary" onclick="showPage('bots')">Explore Bot Services</button>
      <button class="btn btn-secondary" onclick="showPage('auth')">Sign In to Dashboard</button>
    </div>
  </div>
  <div class="divider"></div>

  <!-- Quick stats -->
  <div class="section">
    <div class="stat-row" style="max-width:860px;">
      <div class="stat-card">
        <div class="stat-label">Active Bots</div>
        <div class="stat-value accent">5</div>
        <div class="stat-sub">Live and operational</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Payment Methods</div>
        <div class="stat-value accent">2</div>
        <div class="stat-sub">Manual & Automatic</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Plan Tiers</div>
        <div class="stat-value accent">3</div>
        <div class="stat-sub">Free, Standard, Premium</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Coverage</div>
        <div class="stat-value accent">NG</div>
        <div class="stat-sub">Nigeria + International</div>
      </div>
    </div>

    <div class="section-header" style="margin-top:20px;">
      <div class="section-label">Featured Services</div>
      <div class="section-title">What the bots do</div>
      <div class="section-desc">Each bot is purpose-built and independently managed. Select any service below to see plans and subscribe.</div>
    </div>
    <div class="bot-grid" style="max-width:1000px;">
      <div class="bot-card featured" onclick="openBotModal('shop')">
        <div class="bot-card-top">
          <div class="bot-icon gold">01</div>
          <div class="bot-badge premium">Premium</div>
        </div>
        <div class="bot-name">iVolt Shop Bot</div>
        <div class="bot-desc">Mercury-catalogue power equipment store with live NGN/USD pricing, stock alerts, flash sales, bulk discounts, and landed cost calculations.</div>
        <div class="bot-tags">
          <span class="tag">Shop</span><span class="tag">Live Prices</span><span class="tag">Order Tracking</span><span class="tag">Alerts</span>
        </div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">Free</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('signals')">
        <div class="bot-card-top">
          <div class="bot-icon blue">02</div>
          <div class="bot-badge active">Active</div>
        </div>
        <div class="bot-name">Market Signals Bot</div>
        <div class="bot-desc">Real-time financial signals, FX rates, commodity prices, and stock data. Broadcast delivery to subscribers by plan tier.</div>
        <div class="bot-tags">
          <span class="tag">FX</span><span class="tag">Commodities</span><span class="tag">Stocks</span><span class="tag">Signals</span>
        </div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">NGN 2,500 / mo</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('intel')">
        <div class="bot-card-top">
          <div class="bot-icon teal">03</div>
          <div class="bot-badge active">Active</div>
        </div>
        <div class="bot-name">Market Intelligence Bot</div>
        <div class="bot-desc">Deep market analysis, project cost calculators, transformer oil database, and trade cost breakdowns for power sector professionals.</div>
        <div class="bot-tags">
          <span class="tag">Analysis</span><span class="tag">Calculator</span><span class="tag">Oil Database</span>
        </div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">NGN 5,000 / mo</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('articles')">
        <div class="bot-card-top">
          <div class="bot-icon green">04</div>
          <div class="bot-badge free">Free</div>
        </div>
        <div class="bot-name">Articles & News Bot</div>
        <div class="bot-desc">Curated industry articles, power sector news, regulatory updates, and technical guides — delivered to your Telegram inbox.</div>
        <div class="bot-tags">
          <span class="tag">News</span><span class="tag">Articles</span><span class="tag">Guides</span>
        </div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value free">Free</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('admin')">
        <div class="bot-card-top">
          <div class="bot-icon gold">05</div>
          <div class="bot-badge premium">Admin</div>
        </div>
        <div class="bot-name">Premium Index Bot</div>
        <div class="bot-desc">Exclusive premium index updates, advanced wiring diagrams, schematic references, and priority broadcast delivery for premium subscribers.</div>
        <div class="bot-tags">
          <span class="tag">Index</span><span class="tag">Schematics</span><span class="tag">Priority</span>
        </div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">NGN 8,000 / mo</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
    </div>
  </div>

  <div class="divider"></div>

  <!-- Pre-order section -->
  <div class="section">
    <div class="section-header">
      <div class="section-label">Pre-Order</div>
      <div class="section-title">Interested in a service?</div>
      <div class="section-desc">Reach out directly on WhatsApp or Telegram to pre-order equipment, discuss bulk pricing, or get a custom quote before committing to a plan.</div>
    </div>
    <div class="preorder-box">
      <div class="preorder-title">Start a Pre-Order</div>
      <div class="preorder-desc">
        Contact us on WhatsApp or Telegram to pre-order any power equipment, request a custom configuration, or enquire about bulk availability. Our team responds within business hours.
      </div>
      <div class="preorder-actions">
        <a href="https://wa.me/2348000000000?text=Pre-order%20enquiry%20from%20iVolt%20Platform" class="btn btn-wa" target="_blank">
          WhatsApp Pre-Order
        </a>
        <a href="https://t.me/iVoltAdmin" class="btn btn-tg" target="_blank">
          Telegram Pre-Order
        </a>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ PAGE: BOTS ═══════════ -->
<div class="page" id="page-bots">
  <div class="section">
    <div class="section-header">
      <div class="section-label">Bot Directory</div>
      <div class="section-title">All Bot Services</div>
      <div class="section-desc">Each bot operates independently with its own Telegram channel or group. Click any bot to view plans, join links, and subscription options.</div>
    </div>
    <div class="alert alert-info" style="max-width:700px;">
      <div class="alert-icon">i</div>
      <div class="alert-text"><p><strong>How it works:</strong> Select a bot, choose a plan, and complete payment. Your Telegram chat ID will be used to link your subscription. Create an account to manage all subscriptions from one dashboard.</p></div>
    </div>
    <div class="bot-grid" style="max-width:1100px;">
      <div class="bot-card featured" onclick="openBotModal('shop')">
        <div class="bot-card-top"><div class="bot-icon gold">01</div><div class="bot-badge premium">Premium</div></div>
        <div class="bot-name">iVolt Shop Bot</div>
        <div class="bot-desc">Full-featured power equipment shop: Mercury catalogue, live NGN + USD prices updated with Brent crude and FX data, flash sales, and wiring diagrams.</div>
        <div class="bot-tags"><span class="tag">Shop</span><span class="tag">Live Prices</span><span class="tag">Alerts</span><span class="tag">WhatsApp Bridge</span></div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">Free</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('signals')">
        <div class="bot-card-top"><div class="bot-icon blue">02</div><div class="bot-badge active">Active</div></div>
        <div class="bot-name">Market Signals Bot</div>
        <div class="bot-desc">Automated delivery of FX rates, commodity prices (Brent crude, gold, copper), and equity signals. Delivered to your Telegram based on your plan tier.</div>
        <div class="bot-tags"><span class="tag">FX</span><span class="tag">Commodities</span><span class="tag">Stocks</span><span class="tag">Broadcast</span></div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">NGN 2,500 / mo</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('intel')">
        <div class="bot-card-top"><div class="bot-icon teal">03</div><div class="bot-badge active">Active</div></div>
        <div class="bot-name">Market Intelligence Bot</div>
        <div class="bot-desc">Advanced analytics for power industry professionals. Includes project cost modelling, transformer oil specs, import duty calculations, and VAT/FX breakdowns.</div>
        <div class="bot-tags"><span class="tag">Analysis</span><span class="tag">Calculator</span><span class="tag">Duty & Tax</span></div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">NGN 5,000 / mo</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('articles')">
        <div class="bot-card-top"><div class="bot-icon green">04</div><div class="bot-badge free">Free</div></div>
        <div class="bot-name">Articles & News Bot</div>
        <div class="bot-desc">Industry news, power sector regulations, technical how-to guides, and curated articles from verified sources — automatically distributed to members.</div>
        <div class="bot-tags"><span class="tag">News</span><span class="tag">Guides</span><span class="tag">Regulations</span></div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value free">Free</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
      <div class="bot-card" onclick="openBotModal('admin')">
        <div class="bot-card-top"><div class="bot-icon gold">05</div><div class="bot-badge premium">Premium</div></div>
        <div class="bot-name">Premium Index Bot</div>
        <div class="bot-desc">Exclusive premium index data, comprehensive wiring schematics, live diagrams linked to shop items, and priority signal distribution for top-tier subscribers.</div>
        <div class="bot-tags"><span class="tag">Index</span><span class="tag">Schematics</span><span class="tag">Priority Access</span></div>
        <div class="bot-card-footer">
          <div class="bot-price"><div class="bot-price-label">Starting from</div><div class="bot-price-value">NGN 8,000 / mo</div></div>
          <button class="btn btn-secondary btn-sm">View Plans</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ PAGE: PRICING ═══════════ -->
<div class="page" id="page-pricing">
  <div class="section">
    <div class="section-header">
      <div class="section-label">Pricing</div>
      <div class="section-title">Plans & Payment</div>
      <div class="section-desc">All plans are billed monthly. Two payment methods are available: manual bank transfer or automatic payment via Paystack. Subscriptions are linked to your Telegram chat ID.</div>
    </div>

    <div class="alert alert-warn" style="max-width:700px;">
      <div class="alert-icon">!</div>
      <div class="alert-text"><p><strong>Manual Payment:</strong> Available Mon–Sat, 8 AM–8 PM WAT. After payment, send proof to our WhatsApp or Telegram within 2 hours. Activation occurs within 1 business hour of confirmation.</p></div>
    </div>

    <!-- Pricing table per bot -->
    <div style="max-width:860px;">
      <div id="pricing-tables">

        <div style="margin-bottom:32px;">
          <div style="font-size:0.8rem;color:var(--muted);font-family:var(--mono);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">Bot 01 — iVolt Shop Bot</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">
            <div class="plan-card">
              <div class="plan-name">Free</div>
              <div class="plan-price">NGN 0 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">Browse live catalogue</div>
                <div class="plan-feature">View public prices</div>
                <div class="plan-feature">Basic stock checks</div>
              </div>
              <button class="btn btn-secondary btn-sm btn-full" style="margin-top:14px;" onclick="showPage('auth')">Get Started</button>
            </div>
            <div class="plan-card selected">
              <div class="plan-name">Standard</div>
              <div class="plan-price">NGN 3,500 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">All Free features</div>
                <div class="plan-feature">Price-drop alerts</div>
                <div class="plan-feature">Back-in-stock alerts</div>
                <div class="plan-feature">Wiring diagrams</div>
              </div>
              <button class="btn btn-primary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('shop')">Subscribe</button>
            </div>
            <div class="plan-card">
              <div class="plan-name">Premium</div>
              <div class="plan-price">NGN 7,500 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">All Standard features</div>
                <div class="plan-feature">Bulk discount access</div>
                <div class="plan-feature">Trade cost calculator</div>
                <div class="plan-feature">Priority order processing</div>
              </div>
              <button class="btn btn-secondary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('shop')">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="divider" style="margin-bottom:32px;"></div>

        <div style="margin-bottom:32px;">
          <div style="font-size:0.8rem;color:var(--muted);font-family:var(--mono);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">Bot 02 — Market Signals Bot</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">
            <div class="plan-card">
              <div class="plan-name">Basic</div>
              <div class="plan-price">NGN 2,500 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">Daily FX summary</div>
                <div class="plan-feature">Brent crude updates</div>
                <div class="plan-feature">Telegram group access</div>
              </div>
              <button class="btn btn-secondary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('signals')">Subscribe</button>
            </div>
            <div class="plan-card">
              <div class="plan-name">Standard</div>
              <div class="plan-price">NGN 5,000 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">All Basic features</div>
                <div class="plan-feature">Real-time commodity signals</div>
                <div class="plan-feature">Equity alerts</div>
                <div class="plan-feature">Intraday updates</div>
              </div>
              <button class="btn btn-primary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('signals')">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="divider" style="margin-bottom:32px;"></div>

        <div style="margin-bottom:32px;">
          <div style="font-size:0.8rem;color:var(--muted);font-family:var(--mono);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">Bot 03 — Market Intelligence Bot</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">
            <div class="plan-card">
              <div class="plan-name">Professional</div>
              <div class="plan-price">NGN 5,000 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">Market reports</div>
                <div class="plan-feature">Duty & VAT calculators</div>
                <div class="plan-feature">Industry analysis</div>
              </div>
              <button class="btn btn-secondary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('intel')">Subscribe</button>
            </div>
            <div class="plan-card">
              <div class="plan-name">Enterprise</div>
              <div class="plan-price">NGN 10,000 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">All Professional features</div>
                <div class="plan-feature">Transformer oil database</div>
                <div class="plan-feature">Project cost modelling</div>
                <div class="plan-feature">Priority support</div>
              </div>
              <button class="btn btn-primary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('intel')">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="divider" style="margin-bottom:32px;"></div>

        <div style="margin-bottom:32px;">
          <div style="font-size:0.8rem;color:var(--muted);font-family:var(--mono);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">Bot 04 — Articles & News Bot</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">
            <div class="plan-card selected">
              <div class="plan-name">Free</div>
              <div class="plan-price">NGN 0 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">Daily news digest</div>
                <div class="plan-feature">Public articles</div>
                <div class="plan-feature">Telegram group membership</div>
              </div>
              <button class="btn btn-primary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('articles')">Join Free</button>
            </div>
            <div class="plan-card">
              <div class="plan-name">Subscriber</div>
              <div class="plan-price">NGN 1,500 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">All Free content</div>
                <div class="plan-feature">Premium deep-dives</div>
                <div class="plan-feature">Regulatory updates</div>
                <div class="plan-feature">Technical guides library</div>
              </div>
              <button class="btn btn-secondary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('articles')">Subscribe</button>
            </div>
          </div>
        </div>

        <div class="divider" style="margin-bottom:32px;"></div>

        <div>
          <div style="font-size:0.8rem;color:var(--muted);font-family:var(--mono);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:14px;">Bot 05 — Premium Index Bot</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;">
            <div class="plan-card">
              <div class="plan-name">Premium</div>
              <div class="plan-price">NGN 8,000 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">Premium index data</div>
                <div class="plan-feature">Live wiring schematics</div>
                <div class="plan-feature">Diagram library access</div>
              </div>
              <button class="btn btn-secondary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('admin')">Subscribe</button>
            </div>
            <div class="plan-card">
              <div class="plan-name">Elite</div>
              <div class="plan-price">NGN 15,000 <span>/ mo</span></div>
              <div class="plan-features">
                <div class="plan-feature">All Premium features</div>
                <div class="plan-feature">Priority broadcast delivery</div>
                <div class="plan-feature">Custom alert setup</div>
                <div class="plan-feature">Direct admin support</div>
              </div>
              <button class="btn btn-primary btn-sm btn-full" style="margin-top:14px;" onclick="openBotModal('admin')">Subscribe</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- ═══════════ PAGE: TRACK ═══════════ -->
<div class="page" id="page-track">
  <div class="section">
    <div class="section-header">
      <div class="section-label">Order Management</div>
      <div class="section-title">Track Your Order</div>
      <div class="section-desc">Enter your order reference number or Telegram chat ID to check the current status of any order or subscription.</div>
    </div>

    <div class="track-form">
      <input class="form-input mono" id="trackInput" placeholder="Order ref. e.g. IVT-2024-0041" style="flex:1;">
      <button class="btn btn-primary" onclick="doTrack()">Track</button>
    </div>

    <div id="trackResult" style="display:none;">
      <div class="track-result">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
          <div>
            <div style="font-family:var(--mono);font-size:0.75rem;color:var(--muted);margin-bottom:4px;">Order Reference</div>
            <div style="font-family:var(--mono);font-size:1rem;color:var(--accent);" id="trackRefDisplay">—</div>
          </div>
          <div id="trackStatusBadge"></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;margin-top:20px;" id="trackMeta"></div>
        <div class="track-timeline" id="trackTimeline"></div>
      </div>
    </div>

    <div id="trackNotFound" style="display:none;margin-top:16px;">
      <div class="alert alert-warn" style="max-width:480px;">
        <div class="alert-icon">!</div>
        <div class="alert-text"><p>No order found with that reference. Double-check the reference number or <span style="color:var(--accent);cursor:pointer;" onclick="showPage('contact')">contact support</span>.</p></div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ PAGE: CONTACT ═══════════ -->
<div class="page" id="page-contact">
  <div class="section">
    <div class="section-header">
      <div class="section-label">Contact & Support</div>
      <div class="section-title">Get in touch</div>
      <div class="section-desc">For pre-orders, subscription queries, payment confirmation, or technical support, reach us through the channels below.</div>
    </div>
    <div class="contact-grid" style="max-width:900px;">
      <div class="contact-card">
        <div class="contact-platform">WhatsApp</div>
        <div class="contact-purpose">Pre-Orders & Payment Confirmation</div>
        <div class="contact-desc">Send payment receipts, place pre-orders, or enquire about product availability. Attach your Telegram chat ID in the first message to expedite processing.</div>
        <a href="https://wa.me/2348000000000?text=Hello%2C%20I%20am%20reaching%20out%20from%20the%20iVolt%20Platform." target="_blank" class="btn btn-wa btn-sm">Open WhatsApp</a>
        <div class="contact-response">Typical response: <strong>within 2 hours</strong> (Mon–Sat, 8 AM–8 PM WAT)</div>
      </div>
      <div class="contact-card">
        <div class="contact-platform">Telegram</div>
        <div class="contact-purpose">General Enquiries & Pre-Orders</div>
        <div class="contact-desc">Message our admin account on Telegram for subscription queries, bot access issues, pre-order requests, or general questions about the platform.</div>
        <a href="https://t.me/iVoltAdmin" target="_blank" class="btn btn-tg btn-sm">Open Telegram</a>
        <div class="contact-response">Typical response: <strong>within 4 hours</strong> (Mon–Sat)</div>
      </div>
      <div class="contact-card">
        <div class="contact-platform">Order Tracking</div>
        <div class="contact-purpose">Track Active Orders</div>
        <div class="contact-desc">Use the order tracking page to check the status of any active or past subscription order. You will need your order reference number.</div>
        <button class="btn btn-secondary btn-sm" onclick="showPage('track')">Go to Tracker</button>
        <div class="contact-response">Available: <strong>24/7, automated</strong></div>
      </div>
      <div class="contact-card">
        <div class="contact-platform">Support Hours</div>
        <div class="contact-purpose">Business Hours</div>
        <div class="contact-desc">Our support team is available Monday through Saturday. Automated systems (order tracking, bot delivery) operate continuously without interruption.</div>
        <div style="margin-top:16px;">
          <div style="font-size:0.8rem;color:var(--muted);margin-bottom:4px;">Manual Support</div>
          <div style="font-size:0.875rem;color:var(--text);">Monday – Saturday, 8:00 AM – 8:00 PM WAT</div>
          <div style="font-size:0.8rem;color:var(--muted);margin-top:10px;margin-bottom:4px;">Automated Systems</div>
          <div style="font-size:0.875rem;color:var(--text);">24 hours, 7 days a week</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ═══════════ PAGE: AUTH ═══════════ -->
<div class="page" id="page-auth">
  <div class="auth-wrap">
    <div class="auth-card">
      <div class="auth-title" id="authTitle">Welcome back</div>
      <div class="auth-sub" id="authSub">Sign in with your Telegram chat ID and password to manage your subscriptions.</div>

      <div class="auth-tabs">
        <button class="auth-tab active" id="tab-login" onclick="showAuthTab('login')">Sign In</button>
        <button class="auth-tab" id="tab-register" onclick="showAuthTab('register')">Create Account</button>
        <button class="auth-tab" id="tab-recover" onclick="showAuthTab('recover')">Recover</button>
      </div>

      <!-- LOGIN FORM -->
      <div id="form-login">
        <div class="form-group">
          <label class="form-label">TELEGRAM CHAT ID</label>
          <input class="form-input mono" id="loginId" type="text" placeholder="e.g. 123456789">
          <div class="form-hint">Your numeric Telegram chat ID — not your username.</div>
        </div>
        <div class="form-group">
          <label class="form-label">PASSWORD <span class="recover-link" onclick="showAuthTab('recover')">Forgot password?</span></label>
          <input class="form-input" id="loginPass" type="password" placeholder="Enter your password">
        </div>
        <div id="loginError" class="alert alert-warn" style="display:none;">
          <div class="alert-icon">!</div>
          <div class="alert-text"><p id="loginErrorMsg">Invalid credentials. Please try again.</p></div>
        </div>
        <button class="btn btn-primary btn-full" onclick="doLogin()">Sign In</button>
        <div class="form-divider"><span>or</span></div>
        <div class="auth-footer">Do not have an account? <a onclick="showAuthTab('register')">Create one</a></div>
      </div>

      <!-- REGISTER FORM -->
      <div id="form-register" style="display:none;">
        <div class="form-group">
          <label class="form-label">TELEGRAM CHAT ID</label>
          <input class="form-input mono" id="regId" type="text" placeholder="e.g. 123456789">
          <div class="form-hint">Open Telegram, message @userinfobot, and it will return your chat ID.</div>
        </div>
        <div class="form-group">
          <label class="form-label">FULL NAME</label>
          <input class="form-input" id="regName" type="text" placeholder="Your name">
        </div>
        <div class="form-group">
          <label class="form-label">CREATE PASSWORD</label>
          <input class="form-input" id="regPass" type="password" placeholder="Minimum 8 characters">
        </div>
        <div class="form-group">
          <label class="form-label">CONFIRM PASSWORD</label>
          <input class="form-input" id="regPass2" type="password" placeholder="Re-enter password">
        </div>
        <div id="regError" class="alert alert-warn" style="display:none;">
          <div class="alert-icon">!</div>
          <div class="alert-text"><p id="regErrorMsg"></p></div>
        </div>
        <div id="regSuccess" class="alert alert-success" style="display:none;">
          <div class="alert-icon">+</div>
          <div class="alert-text"><p id="regSuccessMsg">Account created. You can now sign in.</p></div>
        </div>
        <button class="btn btn-primary btn-full" onclick="doRegister()">Create Account</button>
        <div class="auth-footer">Already have an account? <a onclick="showAuthTab('login')">Sign in</a></div>
      </div>

      <!-- RECOVER FORM -->
      <div id="form-recover" style="display:none;">
        <div class="alert alert-info" style="margin-bottom:16px;">
          <div class="alert-icon">i</div>
          <div class="alert-text"><p>Enter your Telegram chat ID. If an account exists, a password reset link will be sent via Telegram bot message.</p></div>
        </div>
        <div class="form-group">
          <label class="form-label">TELEGRAM CHAT ID</label>
          <input class="form-input mono" id="recId" type="text" placeholder="e.g. 123456789">
        </div>
        <div id="recoverSuccess" class="alert alert-success" style="display:none;">
          <div class="alert-icon">+</div>
          <div class="alert-text"><p>If an account with that ID exists, you will receive a Telegram message with a reset link shortly.</p></div>
        </div>
        <button class="btn btn-primary btn-full" onclick="doRecover()">Send Reset Link</button>
        <div class="form-divider"><span>or</span></div>
        <div class="auth-footer"><a onclick="showPage('contact')">Contact support</a> if you cannot access Telegram.</div>
      </div>

    </div>
  </div>
</div>

<!-- ═══════════ PAGE: DASHBOARD ═══════════ -->
<div class="page" id="page-dashboard">
  <div class="dash-grid">
    <aside class="dash-sidebar">
      <div class="dash-sidebar-user">
        <div class="dash-user-id" id="dashUserId">—</div>
        <div class="dash-user-name" id="dashUserName">—</div>
        <div class="dash-user-plan" id="dashUserPlan">No active subscriptions</div>
      </div>
      <div class="dash-nav-item active" onclick="showDashSection('overview')">
        <div class="dash-nav-dot pulse"></div> Overview
      </div>
      <div class="dash-nav-item" onclick="showDashSection('subscriptions')">
        <div class="dash-nav-dot"></div> Subscriptions
      </div>
      <div class="dash-nav-item" onclick="showDashSection('orders')">
        <div class="dash-nav-dot"></div> Orders
      </div>
      <div class="dash-nav-item" onclick="showDashSection('account')">
        <div class="dash-nav-dot"></div> Account Settings
      </div>
      <div style="flex:1;"></div>
      <div class="dash-nav-item" onclick="doLogout()" style="margin-top:auto;color:var(--danger);">
        <div class="dash-nav-dot" style="background:var(--danger);opacity:0.4;"></div> Sign Out
      </div>
    </aside>
    <main class="dash-main">

      <!-- Overview -->
      <div class="dash-section active" id="dsec-overview">
        <div class="section-header">
          <div class="section-label">Dashboard</div>
          <div class="section-title">Overview</div>
        </div>
        <div class="stat-row">
          <div class="stat-card">
            <div class="stat-label">Active Subscriptions</div>
            <div class="stat-value accent" id="dStatSubs">0</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Total Orders</div>
            <div class="stat-value accent" id="dStatOrders">0</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Pending Payments</div>
            <div class="stat-value" id="dStatPending">0</div>
          </div>
        </div>
        <div class="alert alert-info">
          <div class="alert-icon">i</div>
          <div class="alert-text"><p><strong>Your Telegram chat ID is your account identifier.</strong> Subscriptions are delivered directly to your Telegram. Ensure your chat ID on file is correct in Account Settings.</p></div>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;">
          <button class="btn btn-primary btn-sm" onclick="showPage('bots')">Add Subscription</button>
          <a href="https://wa.me/2348000000000" class="btn btn-wa btn-sm" target="_blank">Contact Support</a>
        </div>
      </div>

      <!-- Subscriptions -->
      <div class="dash-section" id="dsec-subscriptions">
        <div class="section-header">
          <div class="section-label">Subscriptions</div>
          <div class="section-title">Active Bots</div>
        </div>
        <div id="subList">
          <div style="color:var(--muted);font-size:0.875rem;padding:24px 0;">No active subscriptions found. <span style="color:var(--accent);cursor:pointer;" onclick="showPage('bots')">Browse bot services.</span></div>
        </div>
      </div>

      <!-- Orders -->
      <div class="dash-section" id="dsec-orders">
        <div class="section-header">
          <div class="section-label">Order History</div>
          <div class="section-title">All Orders</div>
        </div>
        <div style="overflow-x:auto;">
          <table class="order-table" id="orderTable">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Service</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody id="orderTableBody">
              <tr><td colspan="7" style="color:var(--muted);text-align:center;padding:28px;">No orders on record.</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Account -->
      <div class="dash-section" id="dsec-account">
        <div class="section-header">
          <div class="section-label">Account</div>
          <div class="section-title">Account Settings</div>
        </div>
        <div style="max-width:480px;">
          <div class="form-group">
            <label class="form-label">TELEGRAM CHAT ID</label>
            <input class="form-input mono" id="accChatId" readonly style="opacity:0.6;">
          </div>
          <div class="form-group">
            <label class="form-label">FULL NAME</label>
            <input class="form-input" id="accName" type="text">
          </div>
          <div class="form-group">
            <label class="form-label">NEW PASSWORD (leave blank to keep current)</label>
            <input class="form-input" id="accPass" type="password" placeholder="New password">
          </div>
          <div class="form-group">
            <label class="form-label">CONFIRM NEW PASSWORD</label>
            <input class="form-input" id="accPass2" type="password" placeholder="Repeat new password">
          </div>
          <div id="accMsg" style="display:none;" class="alert alert-success">
            <div class="alert-icon">+</div>
            <div class="alert-text"><p>Account details updated.</p></div>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button class="btn btn-primary btn-sm" onclick="saveAccount()">Save Changes</button>
            <button class="btn btn-danger btn-sm" onclick="doLogout()">Sign Out</button>
          </div>
        </div>
      </div>

    </main>
  </div>
</div>

<!-- ── FOOTER ── -->
<footer class="footer" id="mainFooter">
  <div class="footer-brand">iVolt Platform</div>
  <div class="footer-links">
    <span class="footer-link" onclick="showPage('home')">Home</span>
    <span class="footer-link" onclick="showPage('bots')">Bots</span>
    <span class="footer-link" onclick="showPage('pricing')">Pricing</span>
    <span class="footer-link" onclick="showPage('contact')">Contact</span>
    <span class="footer-link" onclick="showPage('track')">Track Order</span>
  </div>
  <div class="footer-copy">iVolt Power Solutions &mdash; Nigeria Power Equipment & Bot Services. All subscriptions are subject to our payment and refund policy.</div>
</footer>

</div><!-- /app-shell -->

<!-- ═══════════ BOT PLAN MODAL ═══════════ -->
<div class="modal-overlay" id="botModal">
  <div class="modal">
    <div class="modal-header">
      <div>
        <div style="font-size:0.7rem;font-family:var(--mono);color:var(--muted);letter-spacing:0.08em;text-transform:uppercase;margin-bottom:4px;" id="modalBotLabel">Bot Service</div>
        <div class="modal-title" id="modalBotName">Bot Name</div>
      </div>
      <button class="modal-close" onclick="closeModal()">&#215;</button>
    </div>
    <div class="modal-body">
      <div id="modalPlans" class="plan-grid"></div>

      <div class="payment-methods">
        <div class="pm-label">PAYMENT METHOD</div>
        <div class="pm-tabs">
          <button class="pm-tab active" onclick="setPmTab('auto', this)">Automatic</button>
          <button class="pm-tab" onclick="setPmTab('manual', this)">Manual Transfer</button>
        </div>
        <div class="pm-info" id="pmInfo">
          <strong>Automatic Payment via Paystack</strong><br>
          Pay securely with card, bank transfer, or USSD. Your subscription is activated immediately upon successful payment. No manual confirmation required.<br><br>
          <span class="mono">Supported: Verve, Mastercard, Visa, Bank Transfer, USSD</span>
        </div>
      </div>

      <div id="modalTgLink" style="margin-bottom:16px;display:none;">
        <div class="pm-label">BOT LINK</div>
        <div class="pm-info">
          <strong>Join on Telegram</strong><br>
          After payment, you will receive an invite link via Telegram message to the relevant bot or group. Make sure your Telegram chat ID is registered on this platform.<br><br>
          <span class="mono" id="modalTgHandle">@iVolt_Bot</span>
        </div>
      </div>

      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="proceedPayment()">Proceed to Payment</button>
        <button class="btn btn-secondary" onclick="closeModal()">Cancel</button>
      </div>
    </div>
  </div>
</div>

<script>
// ── STATE ──────────────────────────────────────────────────────────
const STATE = {
  currentPage: 'home',
  currentUser: null,
  users: JSON.parse(localStorage.getItem('ivolt_users') || '{}'),
  orders: JSON.parse(localStorage.getItem('ivolt_orders') || '{}'),
  selectedBot: null,
  selectedPlan: null,
  pmMethod: 'auto',
};

const BOT_DATA = {
  shop: {
    label: 'Bot 01 — iVolt Shop Bot',
    name: 'iVolt Shop Bot',
    tgHandle: '@iVolt_ShopBot',
    plans: [
      { id: 'free',     name: 'Free',     price: 'NGN 0',     period: '/ mo', features: ['Browse live catalogue','View public prices','Basic stock checks'] },
      { id: 'standard', name: 'Standard', price: 'NGN 3,500', period: '/ mo', features: ['All Free features','Price-drop alerts','Back-in-stock alerts','Wiring diagrams'] },
      { id: 'premium',  name: 'Premium',  price: 'NGN 7,500', period: '/ mo', features: ['All Standard features','Bulk discount access','Trade cost calculator','Priority orders'] },
    ]
  },
  signals: {
    label: 'Bot 02 — Market Signals Bot',
    name: 'Market Signals Bot',
    tgHandle: '@iVolt_Signals',
    plans: [
      { id: 'basic',    name: 'Basic',    price: 'NGN 2,500', period: '/ mo', features: ['Daily FX summary','Brent crude updates','Telegram group access'] },
      { id: 'standard', name: 'Standard', price: 'NGN 5,000', period: '/ mo', features: ['All Basic features','Real-time commodity signals','Equity alerts','Intraday updates'] },
    ]
  },
  intel: {
    label: 'Bot 03 — Market Intelligence',
    name: 'Market Intelligence Bot',
    tgHandle: '@iVolt_Intel',
    plans: [
      { id: 'pro',      name: 'Professional', price: 'NGN 5,000',  period: '/ mo', features: ['Market reports','Duty & VAT calculators','Industry analysis'] },
      { id: 'ent',      name: 'Enterprise',   price: 'NGN 10,000', period: '/ mo', features: ['All Professional features','Transformer oil database','Project cost modelling','Priority support'] },
    ]
  },
  articles: {
    label: 'Bot 04 — Articles & News Bot',
    name: 'Articles & News Bot',
    tgHandle: '@iVolt_News',
    plans: [
      { id: 'free',    name: 'Free',       price: 'NGN 0',     period: '/ mo', features: ['Daily news digest','Public articles','Group membership'] },
      { id: 'subscriber', name: 'Subscriber', price: 'NGN 1,500', period: '/ mo', features: ['All Free content','Premium deep-dives','Regulatory updates','Technical guides'] },
    ]
  },
  admin: {
    label: 'Bot 05 — Premium Index Bot',
    name: 'Premium Index Bot',
    tgHandle: '@iVolt_PremiumIndex',
    plans: [
      { id: 'premium', name: 'Premium', price: 'NGN 8,000',  period: '/ mo', features: ['Premium index data','Live schematics','Diagram library'] },
      { id: 'elite',   name: 'Elite',   price: 'NGN 15,000', period: '/ mo', features: ['All Premium features','Priority broadcast','Custom alert setup','Admin support'] },
    ]
  },
};

// ── NAVIGATION ──────────────────────────────────────────────────────
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) el.classList.add('active');

  // Activate nav button
  const navMap = { home:'Overview', bots:'Bot Services', pricing:'Pricing', track:'Track Order', contact:'Contact' };
  document.querySelectorAll('.nav-btn').forEach(b => {
    if (b.textContent.trim() === (navMap[page] || '')) b.classList.add('active');
  });

  // Hide footer on dashboard
  const footer = document.getElementById('mainFooter');
  if (footer) footer.style.display = page === 'dashboard' ? 'none' : '';

  STATE.currentPage = page;
  window.scrollTo(0,0);
}

// ── AUTH TABS ───────────────────────────────────────────────────────
function showAuthTab(tab) {
  ['login','register','recover'].forEach(t => {
    document.getElementById('form-' + t).style.display = 'none';
    document.getElementById('tab-' + t).classList.remove('active');
  });
  document.getElementById('form-' + tab).style.display = 'block';
  document.getElementById('tab-' + tab).classList.add('active');
  const titles = { login: ['Welcome back','Sign in with your Telegram chat ID and password.'], register: ['Create account','Register with your Telegram chat ID to manage subscriptions.'], recover: ['Recover access','Reset your password via Telegram.'] };
  document.getElementById('authTitle').textContent = titles[tab][0];
  document.getElementById('authSub').textContent = titles[tab][1];
  showPage('auth');
}

// ── LOGIN ───────────────────────────────────────────────────────────
function doLogin() {
  const id = document.getElementById('loginId').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');
  const errMsg = document.getElementById('loginErrorMsg');
  errEl.style.display = 'none';

  if (!id || !pass) { errMsg.textContent = 'Please enter your chat ID and password.'; errEl.style.display='flex'; return; }
  const user = STATE.users[id];
  if (!user || user.password !== btoa(pass)) {
    errMsg.textContent = 'Incorrect chat ID or password. Please try again.';
    errEl.style.display = 'flex'; return;
  }
  STATE.currentUser = user;
  loadDashboard(user);
  showPage('dashboard');
  updateTopbar(true, user);
}

// ── REGISTER ────────────────────────────────────────────────────────
function doRegister() {
  const id = document.getElementById('regId').value.trim();
  const name = document.getElementById('regName').value.trim();
  const pass = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  const errEl = document.getElementById('regError');
  const errMsg = document.getElementById('regErrorMsg');
  const succEl = document.getElementById('regSuccess');
  errEl.style.display = 'none'; succEl.style.display = 'none';

  if (!id || !name || !pass) { errMsg.textContent = 'All fields are required.'; errEl.style.display='flex'; return; }
  if (!/^\d{5,15}$/.test(id)) { errMsg.textContent = 'Chat ID must be a numeric value (5–15 digits).'; errEl.style.display='flex'; return; }
  if (pass.length < 8) { errMsg.textContent = 'Password must be at least 8 characters.'; errEl.style.display='flex'; return; }
  if (pass !== pass2) { errMsg.textContent = 'Passwords do not match.'; errEl.style.display='flex'; return; }
  if (STATE.users[id]) { errMsg.textContent = 'An account with this chat ID already exists.'; errEl.style.display='flex'; return; }

  const user = { id, name, password: btoa(pass), joined: new Date().toISOString(), orders: [] };
  STATE.users[id] = user;
  localStorage.setItem('ivolt_users', JSON.stringify(STATE.users));
  succEl.style.display = 'flex';
  document.getElementById('regSuccessMsg').textContent = 'Account created. Signing you in…';
  setTimeout(() => { STATE.currentUser = user; loadDashboard(user); showPage('dashboard'); updateTopbar(true, user); }, 1200);
}

// ── RECOVER ─────────────────────────────────────────────────────────
function doRecover() {
  const id = document.getElementById('recId').value.trim();
  document.getElementById('recoverSuccess').style.display = 'flex';
  // In production this would trigger a bot message
}

// ── LOGOUT ──────────────────────────────────────────────────────────
function doLogout() {
  STATE.currentUser = null;
  updateTopbar(false, null);
  showPage('home');
}

// ── TOPBAR UPDATE ────────────────────────────────────────────────────
function updateTopbar(loggedIn, user) {
  const actions = document.getElementById('topbarActions');
  if (loggedIn && user) {
    actions.innerHTML = `
      <div class="user-badge" onclick="showPage('dashboard')">
        <div class="user-dot online"></div>
        <span style="font-family:var(--mono);font-size:0.7rem;color:var(--accent);">${user.id}</span>
        <span>${user.name}</span>
      </div>`;
  } else {
    actions.innerHTML = `
      <button class="btn btn-secondary btn-sm" onclick="showPage('auth')">Sign In</button>
      <button class="btn btn-primary btn-sm" onclick="showAuthTab('register')">Create Account</button>`;
  }
}

// ── DASHBOARD ────────────────────────────────────────────────────────
function loadDashboard(user) {
  document.getElementById('dashUserId').textContent = 'ID: ' + user.id;
  document.getElementById('dashUserName').textContent = user.name;
  document.getElementById('accChatId').value = user.id;
  document.getElementById('accName').value = user.name;
  const orders = STATE.orders[user.id] || [];
  const activeSubs = orders.filter(o => o.status === 'active').length;
  const pending = orders.filter(o => o.status === 'pending').length;
  document.getElementById('dStatSubs').textContent = activeSubs;
  document.getElementById('dStatOrders').textContent = orders.length;
  document.getElementById('dStatPending').textContent = pending;
  document.getElementById('dashUserPlan').textContent = activeSubs > 0 ? activeSubs + ' active subscription' + (activeSubs > 1 ? 's' : '') : 'No active subscriptions';
  renderOrderTable(orders);
  renderSubList(orders);
}

function renderOrderTable(orders) {
  const tbody = document.getElementById('orderTableBody');
  if (!orders.length) { tbody.innerHTML = '<tr><td colspan="7" style="color:var(--muted);text-align:center;padding:28px;">No orders on record.</td></tr>'; return; }
  tbody.innerHTML = orders.map(o => `
    <tr>
      <td style="font-family:var(--mono);font-size:0.8rem;color:var(--accent);">${o.ref}</td>
      <td>${o.service}</td>
      <td>${o.plan}</td>
      <td style="font-family:var(--mono);">${o.amount}</td>
      <td style="text-transform:capitalize;">${o.payment}</td>
      <td><span class="status-pill ${o.status}"><span class="status-dot"></span>${o.status}</span></td>
      <td style="color:var(--muted);font-size:0.8rem;">${o.date}</td>
    </tr>`).join('');
}

function renderSubList(orders) {
  const active = orders.filter(o => o.status === 'active');
  const el = document.getElementById('subList');
  if (!active.length) { el.innerHTML = '<div style="color:var(--muted);font-size:0.875rem;padding:24px 0;">No active subscriptions found. <span style="color:var(--accent);cursor:pointer;" onclick="showPage(\'bots\')">Browse bot services.</span></div>'; return; }
  el.innerHTML = active.map(o => `
    <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:18px;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
      <div>
        <div style="font-size:0.85rem;font-weight:600;margin-bottom:2px;">${o.service} — ${o.plan}</div>
        <div style="font-size:0.78rem;color:var(--muted);">Since ${o.date} &middot; Ref: <span style="font-family:var(--mono);color:var(--accent);">${o.ref}</span></div>
      </div>
      <span class="status-pill active"><span class="status-dot"></span>Active</span>
    </div>`).join('');
}

function showDashSection(sec) {
  document.querySelectorAll('.dash-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.dash-nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('dsec-' + sec).classList.add('active');
  event.currentTarget.classList.add('active');
}

function saveAccount() {
  const user = STATE.currentUser;
  const name = document.getElementById('accName').value.trim();
  const pass = document.getElementById('accPass').value;
  const pass2 = document.getElementById('accPass2').value;
  if (!name) return;
  user.name = name;
  if (pass) {
    if (pass.length < 8 || pass !== pass2) return;
    user.password = btoa(pass);
  }
  STATE.users[user.id] = user;
  localStorage.setItem('ivolt_users', JSON.stringify(STATE.users));
  document.getElementById('dashUserName').textContent = user.name;
  updateTopbar(true, user);
  const msg = document.getElementById('accMsg');
  msg.style.display = 'flex';
  setTimeout(() => msg.style.display = 'none', 3000);
}

// ── ORDER TRACKING ───────────────────────────────────────────────────
const DEMO_ORDERS = {
  'IVT-2024-0041': {
    ref: 'IVT-2024-0041', service: 'Market Signals Bot', plan: 'Standard', amount: 'NGN 5,000',
    payment: 'Manual', status: 'active', date: '12 Apr 2025',
    timeline: [
      { label: 'Order Placed', note: '12 Apr 2025, 10:14 AM', done: true },
      { label: 'Payment Received', note: '12 Apr 2025, 11:32 AM — Manual Transfer', done: true },
      { label: 'Subscription Activated', note: '12 Apr 2025, 12:05 PM', done: true, current: false },
      { label: 'Next Renewal', note: '12 May 2025', done: false },
    ]
  },
  'IVT-2024-0038': {
    ref: 'IVT-2024-0038', service: 'iVolt Shop Bot', plan: 'Premium', amount: 'NGN 7,500',
    payment: 'Automatic', status: 'pending', date: '11 Apr 2025',
    timeline: [
      { label: 'Order Placed', note: '11 Apr 2025, 3:50 PM', done: true },
      { label: 'Payment Processing', note: 'Awaiting confirmation', done: false, current: true },
      { label: 'Subscription Activation', note: 'Pending payment', done: false },
    ]
  }
};

function doTrack() {
  const ref = document.getElementById('trackInput').value.trim().toUpperCase();
  document.getElementById('trackResult').style.display = 'none';
  document.getElementById('trackNotFound').style.display = 'none';
  if (!ref) return;

  // Check user's own orders if logged in
  let order = null;
  if (STATE.currentUser) {
    const uOrders = STATE.orders[STATE.currentUser.id] || [];
    order = uOrders.find(o => o.ref.toUpperCase() === ref);
  }
  if (!order) order = DEMO_ORDERS[ref];
  if (!order) { document.getElementById('trackNotFound').style.display = 'block'; return; }

  document.getElementById('trackRefDisplay').textContent = order.ref;
  document.getElementById('trackStatusBadge').innerHTML = `<span class="status-pill ${order.status}"><span class="status-dot"></span>${order.status}</span>`;
  document.getElementById('trackMeta').innerHTML = `
    <div><div style="font-size:0.7rem;color:var(--muted);margin-bottom:3px;">SERVICE</div><div style="font-size:0.85rem;">${order.service}</div></div>
    <div><div style="font-size:0.7rem;color:var(--muted);margin-bottom:3px;">PLAN</div><div style="font-size:0.85rem;">${order.plan}</div></div>
    <div><div style="font-size:0.7rem;color:var(--muted);margin-bottom:3px;">AMOUNT</div><div style="font-size:0.85rem;font-family:var(--mono);">${order.amount}</div></div>
    <div><div style="font-size:0.7rem;color:var(--muted);margin-bottom:3px;">PAYMENT</div><div style="font-size:0.85rem;">${order.payment}</div></div>
  `;
  if (order.timeline) {
    document.getElementById('trackTimeline').innerHTML = order.timeline.map(t => `
      <div class="timeline-item">
        <div class="timeline-icon ${t.done ? 'done' : ''} ${t.current ? 'current' : ''}">${t.done ? '&#10003;' : t.current ? '&#9679;' : '&#9675;'}</div>
        <div class="timeline-text"><strong>${t.label}</strong><span>${t.note}</span></div>
      </div>`).join('');
  }
  document.getElementById('trackResult').style.display = 'block';
}

// ── BOT MODAL ──────────────────────────────────────────────────────
function openBotModal(botId) {
  STATE.selectedBot = botId;
  STATE.selectedPlan = null;
  const bot = BOT_DATA[botId];
  document.getElementById('modalBotLabel').textContent = bot.label;
  document.getElementById('modalBotName').textContent = bot.name;
  document.getElementById('modalTgHandle').textContent = bot.tgHandle;
  document.getElementById('modalTgLink').style.display = 'block';

  document.getElementById('modalPlans').innerHTML = bot.plans.map((p, i) => `
    <div class="plan-card ${i===1?'selected':''}" onclick="selectPlan('${p.id}', this)">
      <div class="plan-name">${p.name}</div>
      <div class="plan-price">${p.price} <span>${p.period}</span></div>
      <div class="plan-features">${p.features.map(f => `<div class="plan-feature">${f}</div>`).join('')}</div>
    </div>`).join('');

  if (bot.plans.length === 1) document.getElementById('modalPlans').style.gridTemplateColumns = '1fr';
  else document.getElementById('modalPlans').style.gridTemplateColumns = '';

  STATE.selectedPlan = bot.plans[Math.min(1, bot.plans.length-1)].id;
  document.getElementById('botModal').classList.add('open');
}

function closeModal() { document.getElementById('botModal').classList.remove('open'); }

function selectPlan(planId, el) {
  document.querySelectorAll('#modalPlans .plan-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  STATE.selectedPlan = planId;
}

function setPmTab(method, el) {
  document.querySelectorAll('.pm-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  STATE.pmMethod = method;
  document.getElementById('pmInfo').innerHTML = method === 'auto'
    ? '<strong>Automatic Payment via Paystack</strong><br>Pay securely with card, bank transfer, or USSD. Subscription activates immediately upon payment.<br><br><span class="mono">Supported: Verve, Mastercard, Visa, Bank Transfer, USSD</span>'
    : '<strong>Manual Bank Transfer</strong><br>Transfer to the account below and send proof of payment on WhatsApp or Telegram.<br><br>Bank: <span class="mono">First Bank of Nigeria</span><br>Account No: <span class="mono">0123456789</span><br>Name: <span class="mono">iVolt Power Solutions Ltd</span><br><br>Include your Telegram chat ID as the payment narration.';
}

function proceedPayment() {
  if (!STATE.currentUser) {
    closeModal();
    showAuthTab('login');
    return;
  }
  const bot = BOT_DATA[STATE.selectedBot];
  const plan = bot.plans.find(p => p.id === STATE.selectedPlan);
  const orderId = 'IVT-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random()*9000)+1000);
  const newOrder = {
    ref: orderId,
    service: bot.name,
    plan: plan.name,
    amount: plan.price,
    payment: STATE.pmMethod === 'auto' ? 'Automatic' : 'Manual',
    status: STATE.pmMethod === 'auto' ? 'active' : 'pending',
    date: new Date().toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' }),
  };
  if (!STATE.orders[STATE.currentUser.id]) STATE.orders[STATE.currentUser.id] = [];
  STATE.orders[STATE.currentUser.id].push(newOrder);
  localStorage.setItem('ivolt_orders', JSON.stringify(STATE.orders));
  loadDashboard(STATE.currentUser);
  closeModal();
  showPage('dashboard');
}

// ── CLOSE MODAL ON OVERLAY CLICK ─────────────────────────────────
document.getElementById('botModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// ── KEYBOARD ──────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
  if (e.key === 'Enter' && STATE.currentPage === 'track') doTrack();
});
</script>
</body>
</html>
