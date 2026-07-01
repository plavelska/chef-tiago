const normalizePage = (href) => {
  const url = new URL(href, window.location.href);
  const file = url.pathname.split("/").filter(Boolean).pop() || "index.html";
  return file === "" ? "index.html" : file;
};

const currentPage = normalizePage(window.location.href);

document.querySelectorAll(".site-nav a[href]").forEach((link) => {
  const href = link.getAttribute("href");
  if (!href || href.startsWith("#")) return;

  if (normalizePage(href) === currentPage) {
    link.setAttribute("aria-current", "page");
  } else if (link.getAttribute("aria-current") === "page") {
    link.removeAttribute("aria-current");
  }
});

document.querySelectorAll(".site-nav").forEach((nav) => {
  const toggle = nav.querySelector(".nav-toggle");
  const menu = nav.querySelector(".site-menu");
  if (!toggle || !menu) return;

  const setOpen = (isOpen) => {
    nav.dataset.navOpen = isOpen ? "true" : "false";
    toggle.setAttribute("aria-expanded", String(isOpen));
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(nav.dataset.navOpen !== "true");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target)) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
});

document.querySelectorAll("[data-accordion]").forEach((accordion) => {
  accordion.querySelectorAll(".skill-toggle").forEach((toggle) => {
    const panelId = toggle.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    const item = toggle.closest(".skill-item");
    if (!panel || !item) return;

    const setOpen = (isOpen) => {
      toggle.setAttribute("aria-expanded", String(isOpen));
      panel.hidden = !isOpen;
      item.classList.toggle("is-open", isOpen);
    };

    setOpen(toggle.getAttribute("aria-expanded") === "true");

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  const hash = link.getAttribute("href");
  const target = hash && hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
  if (!target) return;

  link.addEventListener("click", () => {
    target.setAttribute("tabindex", "-1");
    window.setTimeout(() => target.focus({ preventScroll: true }), 350);
  });
});
