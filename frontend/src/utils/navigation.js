export function navigateTo(setCurrentPage, page) {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
