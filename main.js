/**
 * Portfolio LP - main.js
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = PORTFOLIO_DATA;

  // ========== ページローダー ==========
  const loader = document.querySelector(".page-loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader?.classList.add("hidden"), 400);
  });

  // ========== データ注入 ==========
  injectProfile(data.profile);
  injectStats(data.stats);
  injectWorks(data.works);
  injectSkills(data.skills);

  // ========== ナビゲーション ==========
  initNavbar();
  initMobileMenu();

  // ========== スクロール系 ==========
  initScrollReveal();
  initBackToTop();

  // ========== ワークスフィルター ==========
  initWorksFilter(data.works);

  // ========== モーダル ==========
  initModal();

  // ========== スキルバー ==========
  initSkillBars();

  // ========== フォーム ==========
  initContactForm();
});

// ------------------------------------
// プロフィール情報注入
// ------------------------------------
function injectProfile(profile) {
  // ナビロゴ
  setTextAll(".nav-logo-name", profile.name);

  // ヒーロー
  setText("#hero-name", profile.name);
  setText("#hero-title", profile.title);
  setText("#hero-tagline", profile.tagline);
  setText("#hero-email", profile.email);
  setAttr("#hero-email", "href", `mailto:${profile.email}`);
  setText("#footer-name", profile.name);
  setText("#footer-copy-name", profile.name);

  // アバター
  const avatarImg = document.getElementById("hero-avatar-img");
  const avatarPlaceholder = document.getElementById("hero-avatar-placeholder");
  if (profile.avatar) {
    const img = new Image();
    img.onload = () => {
      if (avatarImg) {
        avatarImg.src = profile.avatar;
        avatarImg.style.display = "block";
        avatarPlaceholder?.style.setProperty("display", "none");
      }
    };
    img.onerror = () => {};
    img.src = profile.avatar;
  }

  // 自己紹介文
  setText("#about-bio", profile.bio);
  setText("#about-email", profile.email);
  setText("#about-location", profile.location);

  // ソーシャルリンク
  const socialContainers = document.querySelectorAll(".hero-social, .footer-social");
  socialContainers.forEach(container => {
    container.innerHTML = profile.socialLinks.map(s => `
      <a href="${s.url}" target="_blank" rel="noopener" class="social-link" aria-label="${s.label}">
        ${getSocialIcon(s.icon)}
      </a>
    `).join("");
  });
}

// ------------------------------------
// 統計数字注入
// ------------------------------------
function injectStats(stats) {
  const grid = document.getElementById("stats-grid");
  if (!grid) return;
  grid.innerHTML = stats.map((s, i) => `
    <div class="stat-item reveal reveal-delay-${i + 1}">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join("");
}

// ------------------------------------
// 実績カード生成
// ------------------------------------
function injectWorks(works) {
  const grid = document.getElementById("works-grid");
  if (!grid) return;

  grid.innerHTML = works.map(work => `
    <div class="work-card reveal" data-id="${work.id}" data-category="${work.category}">
      <div class="work-thumb">
        ${work.image
          ? `<img src="${work.image}" alt="${work.title}" loading="lazy" data-fallback="${getCategoryEmoji(work.category)}">`
          : `<div class="work-thumb-placeholder">${getCategoryEmoji(work.category)}</div>`
        }
        <div class="work-thumb-overlay">
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
            詳細を見る
          </span>
        </div>
      </div>
      <div class="work-body">
        <div class="work-meta">
          <span class="work-category">${work.category}</span>
          <span class="work-date">${work.date}</span>
        </div>
        <h3 class="work-title">${work.title}</h3>
        <p class="work-desc">${work.description}</p>
        <div class="work-tags">
          ${work.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // 画像読み込み失敗時にプレースホルダーへ差し替え
  grid.querySelectorAll("img[data-fallback]").forEach(img => {
    img.addEventListener("error", () => {
      const placeholder = document.createElement("div");
      placeholder.className = "work-thumb-placeholder";
      placeholder.textContent = img.dataset.fallback;
      img.replaceWith(placeholder);
    });
  });
}

// ------------------------------------
// スキルバー生成
// ------------------------------------
function injectSkills(skills) {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = skills.map((s, i) => `
    <div class="skill-item reveal reveal-delay-${(i % 4) + 1}">
      <div class="skill-header">
        <span class="skill-name">${s.name}</span>
        <span class="skill-level-text">${s.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-level="${s.level}" style="width:0"></div>
      </div>
    </div>
  `).join("");
}

// ------------------------------------
// ナビバー スクロール制御
// ------------------------------------
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }, { passive: true });

  // スムーススクロール
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        closeMobileMenu();
      }
    });
  });
}

// ------------------------------------
// モバイルメニュー
// ------------------------------------
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.querySelectorAll("span")[1].style.opacity = isOpen ? "0" : "1";
  });

  document.addEventListener("click", e => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  const links  = document.querySelector(".nav-links");
  const toggle = document.querySelector(".nav-toggle");
  links?.classList.remove("open");
  toggle?.setAttribute("aria-expanded", "false");
  if (toggle) toggle.querySelectorAll("span")[1].style.opacity = "1";
}

// ------------------------------------
// スクロールリビール
// ------------------------------------
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  elements.forEach(el => observer.observe(el));
}

// ------------------------------------
// Back to Top ボタン
// ------------------------------------
function initBackToTop() {
  const btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ------------------------------------
// ワークスフィルター
// ------------------------------------
function initWorksFilter(works) {
  const filterContainer = document.getElementById("works-filter");
  if (!filterContainer) return;

  const categories = ["すべて", ...new Set(works.map(w => w.category))];

  filterContainer.innerHTML = categories.map((cat, i) => `
    <button class="filter-btn${i === 0 ? " active" : ""}" data-cat="${cat}">${cat}</button>
  `).join("");

  filterContainer.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterContainer.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.cat;
    document.querySelectorAll(".work-card").forEach(card => {
      const match = cat === "すべて" || card.dataset.category === cat;
      card.classList.toggle("hidden", !match);
    });
  });
}

// ------------------------------------
// モーダル
// ------------------------------------
function initModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;

  document.getElementById("works-grid")?.addEventListener("click", e => {
    const card = e.target.closest(".work-card");
    if (!card) return;

    const id   = parseInt(card.dataset.id);
    const work = PORTFOLIO_DATA.works.find(w => w.id === id);
    if (!work) return;

    openModal(work, overlay);
  });

  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal(overlay);
  });

  document.getElementById("modal-close")?.addEventListener("click", () => closeModal(overlay));

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal(overlay);
  });
}

function openModal(work, overlay) {
  const el = id => document.getElementById(id);

  // ヘッダー画像
  const headerImg = el("modal-img");
  if (headerImg) {
    if (work.image) {
      headerImg.src  = work.image;
      headerImg.alt  = work.title;
      headerImg.style.display = "block";
    } else {
      headerImg.style.display = "none";
    }
  }

  setText("#modal-category", work.category);
  setText("#modal-title",    work.title);
  setText("#modal-desc",     work.description);

  // タグ
  const tagsEl = el("modal-tags");
  if (tagsEl) tagsEl.innerHTML = work.tags.map(t => `<span class="tag">${t}</span>`).join("");

  // 動画
  const videoEl = el("modal-video");
  if (videoEl) {
    if (work.videoType === "youtube" && work.videoSrc) {
      const videoId = extractYouTubeId(work.videoSrc);
      videoEl.style.display = "block";
      videoEl.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen loading="lazy"></iframe>`;
    } else if (work.videoType === "mp4" && work.videoSrc) {
      videoEl.style.display = "block";
      videoEl.innerHTML = `<video controls><source src="${work.videoSrc}" type="video/mp4">お使いのブラウザは動画再生に対応していません。</video>`;
    } else {
      videoEl.style.display  = "none";
      videoEl.innerHTML = "";
    }
  }

  // 外部リンク
  const linkEl = el("modal-link");
  if (linkEl) {
    if (work.link) {
      linkEl.href = work.link;
      linkEl.style.display = "inline-flex";
    } else {
      linkEl.style.display = "none";
    }
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(overlay) {
  const videoEl = document.getElementById("modal-video");
  if (videoEl) videoEl.innerHTML = "";  // 動画停止
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// ------------------------------------
// スキルバーアニメーション
// ------------------------------------
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.level + "%";
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
}

// ------------------------------------
// お問い合わせフォーム
// ------------------------------------
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();

    const btn    = form.querySelector(".form-submit");
    const status = document.getElementById("form-status");
    const data   = new FormData(form);

    btn.disabled    = true;
    btn.textContent = "送信中...";

    // ===== メール送信実装 =====
    // このフォームを実際に動作させるには、以下のいずれかを使用してください：
    //   1. Formspree (https://formspree.io) - フォームのactionにURLを設定
    //   2. Netlify Forms - フォームに data-netlify="true" を追加
    //   3. EmailJS - 無料でJSからメール送信
    //
    // 例 (Formspree):
    // const res = await fetch("https://formspree.io/f/YOUR_ID", {
    //   method: "POST",
    //   body: data,
    //   headers: { Accept: "application/json" }
    // });
    // if (res.ok) { ... }

    // デモ: 1秒後に成功メッセージ
    await new Promise(r => setTimeout(r, 1000));

    status.className = "form-status success";
    status.textContent = "メッセージを送信しました。ありがとうございます！";
    form.reset();

    btn.disabled    = false;
    btn.textContent = "送信する";

    setTimeout(() => { status.className = "form-status"; }, 6000);
  });
}

// ------------------------------------
// ユーティリティ
// ------------------------------------
function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el && text) el.textContent = text;
}

function setTextAll(selector, text) {
  document.querySelectorAll(selector).forEach(el => {
    if (text) el.textContent = text;
  });
}

function setAttr(selector, attr, value) {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute(attr, value);
}

function extractYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? match[1] : "";
}

function getCategoryEmoji(category) {
  const map = {
    "不動産":       "🏠",
    "建設・測量":   "🏗️",
    "イベント":     "🎉",
    "映像制作":     "🎬",
    "インフラ点検": "🔍",
  };
  return map[category] ?? "🚁";
}

function getSocialIcon(type) {
  const icons = {
    youtube:   `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    twitter:   `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    github:    `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  };
  return icons[type] ?? `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`;
}
