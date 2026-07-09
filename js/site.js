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

document.querySelectorAll(".gallery-wall").forEach((wall) => {
  const originalItems = Array.from(wall.children).filter((item) =>
    item.matches("figure, .gallery-block"),
  );
  const fillColors = ["yellow-block", "green-block", "blue-block", "coral-block"];
  let resizeTimer;

  const resetGallery = () => {
    wall.classList.remove("is-balanced");
    wall.replaceChildren(...originalItems);
  };

  const columnCount = () => {
    if (window.matchMedia("(max-width: 820px)").matches) return 1;
    if (window.matchMedia("(max-width: 1180px)").matches) return 2;
    return 3;
  };

  const closestColumn = (left, columnLefts) =>
    columnLefts.reduce((best, current, index) => {
      const bestDistance = Math.abs(left - columnLefts[best]);
      const currentDistance = Math.abs(left - current);
      return currentDistance < bestDistance ? index : best;
    }, 0);

  const balanceGallery = () => {
    const count = columnCount();
    resetGallery();

    if (count === 1 || originalItems.length === 0) return;

    const itemRects = originalItems.map((item) => ({
      item,
      left: item.getBoundingClientRect().left,
    }));
    const columnLefts = [...new Set(itemRects.map(({ left }) => Math.round(left)))]
      .sort((a, b) => a - b)
      .slice(0, count);

    if (columnLefts.length < count) return;

    const columns = Array.from({ length: count }, () => []);
    itemRects.forEach(({ item, left }) => {
      columns[closestColumn(Math.round(left), columnLefts)].push(item);
    });

    wall.classList.add("is-balanced");
    wall.replaceChildren();

    columns.forEach((items, index) => {
      const column = document.createElement("div");
      column.className = "gallery-column";
      const filler = document.createElement("div");
      filler.className = `gallery-column-fill ${fillColors[index % fillColors.length]}`;
      filler.setAttribute("aria-hidden", "true");

      if (items.length > 1) {
        column.append(...items.slice(0, -1), filler, items[items.length - 1]);
      } else {
        column.append(filler, ...items);
      }

      wall.append(column);
    });
  };

  const scheduleBalance = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      window.requestAnimationFrame(balanceGallery);
    }, 120);
  };

  window.addEventListener("load", scheduleBalance);
  window.addEventListener("resize", scheduleBalance);
  scheduleBalance();
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
