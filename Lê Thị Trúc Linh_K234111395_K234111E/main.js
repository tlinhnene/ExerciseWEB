
const C = document.getElementById('C');

async function loadIntoC(href) {
  try {
    const html = await fetch(href, { cache: "no-cache" }).then(r => r.text());
    C.innerHTML = html;

    [...C.querySelectorAll("script")].forEach(old => {
      const s = document.createElement("script");
      if (old.type) s.type = old.type;
      if (old.src) s.src = old.src;
      else s.textContent = old.textContent;
      old.replaceWith(s);
    });

    markActive(href);
  } catch (e) {
    C.innerHTML = `<div class="page"><h2>Lỗi tải trang</h2><p>${e}</p></div>`;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadIntoC('pages/about.html');
  startFooterClock();
});

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-page]');
  if (!btn) return;
  const href = btn.getAttribute('data-page');
  loadIntoC(href);
});

function startFooterClock() {
  const el = document.getElementById('designedBy');
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  function tick() {
    const now = new Date();
    const day = days[now.getDay()];
    const date = now.toLocaleDateString('vi-VN');
    const time = now.toLocaleTimeString('vi-VN');
    el.textContent = `Designed by Student Lê Thị Trúc Linh – Today is ${day}, ${date} – ${time}`;
  }

  tick();
  setInterval(tick, 1000);
}

function markActive(href) {
  document.querySelectorAll('[data-page]').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`[data-page="${href}"]`);
  if (btn) btn.classList.add('active');
}
const KEY_LOGIN = 'bw04_login';
export function isLoggedIn() { return localStorage.getItem(KEY_LOGIN) === '1'; }
export function login() { localStorage.setItem(KEY_LOGIN, '1'); }
export function logout() { localStorage.removeItem(KEY_LOGIN); }


window.BW04 = { isLoggedIn, login, logout, loadIntoC };
