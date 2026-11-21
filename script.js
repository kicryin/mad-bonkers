// ========== НАСТРОЙКИ ==========
// Вставь сюда ссылку на свою игру в Google Play:
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.example.madbonkers";

// Все кнопки «Скачать» ведут в Google Play
document.querySelectorAll(".js-play").forEach(a => (a.href = PLAY_URL));

// Если картинки в папке assets ещё нет — показываем красивую заглушку
document.querySelectorAll(".js-img").forEach(img => {
  const hide = () => img.remove();
  if (img.complete && img.naturalWidth === 0) hide();
  else img.addEventListener("error", hide);
});

// Год в подвале
document.getElementById("year").textContent = new Date().getFullYear();

// Шапка становится плотной при прокрутке
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Мобильное меню
const burger = document.getElementById("burger");
const links = document.getElementById("navLinks");
const setMenu = open => {
  burger.setAttribute("aria-expanded", open);
  links.classList.toggle("is-open", open);
};
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

// Плавное появление блоков
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  io.observe(el);
});

// Стрелки галереи скриншотов
const gallery = document.getElementById("gallery");
const step = () => gallery.querySelector(".shot").offsetWidth + 20;
document.querySelector(".gallery__btn.prev").addEventListener("click", () => gallery.scrollBy({ left: -step() }));
document.querySelector(".gallery__btn.next").addEventListener("click", () => gallery.scrollBy({ left: step() }));
