(function () {
  "use strict";

  // Gates the reveal styles so content stays visible without JS
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Scroll reveal ----------
  var revealEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("show"); });
  } else {
    // Stagger siblings that enter in the same frame
    var pending = [];
    var flushScheduled = false;
    function flush() {
      pending.forEach(function (el, i) {
        el.style.setProperty("--reveal-delay", (i * 70) + "ms");
        el.classList.add("show");
      });
      pending = [];
      flushScheduled = false;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          pending.push(entry.target);
          io.unobserve(entry.target);
        }
      });
      if (pending.length && !flushScheduled) {
        flushScheduled = true;
        requestAnimationFrame(flush);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ---------- Header border on scroll ----------
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav ----------
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // ---------- Copy email ----------
  var copyBtn = document.getElementById("copy-email");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText("sp3466@rit.edu").then(function () {
        var old = copyBtn.textContent;
        copyBtn.textContent = "Copied ✓";
        setTimeout(function () { copyBtn.textContent = old; }, 1400);
      });
    });
  }

  // ---------- Footer year ----------
  document.getElementById("year").textContent = new Date().getFullYear();
})();
