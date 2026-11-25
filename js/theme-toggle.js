
/* FELMOR — alternância de tema */
(() => {
  const root = document.documentElement;
  const button = document.getElementById("themeToggle");
  const meta = document.getElementById("themeColorMeta");
  if (!button) return;

  const getSavedTheme = () => {
    try { return localStorage.getItem("felmor-theme"); }
    catch (_) { return null; }
  };

  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    root.setAttribute("data-theme", isDark ? "dark" : "light");
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
    button.title = isDark ? "Alternar para modo claro" : "Alternar para modo escuro";
    button.innerHTML = isDark
      ? '<i class="fa-solid fa-sun" aria-hidden="true"></i><span class="theme-toggle-label">Modo claro</span>'
      : '<i class="fa-solid fa-moon" aria-hidden="true"></i><span class="theme-toggle-label">Modo escuro</span>';
    if (meta) meta.setAttribute("content", isDark ? "#0B111B" : "#F3F6FA");
  };

  // FELMOR inicia sempre em modo claro, salvo preferência explícita anterior.
  const saved = getSavedTheme();
  applyTheme(saved === "dark" ? "dark" : "light");

  button.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("felmor-theme", next); } catch (_) {}
  });
})();
