// Dynamically load shared header and footer
async function loadPart(elementId, filePath) {
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await res.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (err) {
    console.error(err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPart("header", "/partials/header.html");
  loadPart("footer", "/partials/footer.html");
});
