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

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  const hash = link.getAttribute("href");
  const target = hash && hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
  if (!target) return;

  link.addEventListener("click", () => {
    target.setAttribute("tabindex", "-1");
    window.setTimeout(() => target.focus({ preventScroll: true }), 350);
  });
});
