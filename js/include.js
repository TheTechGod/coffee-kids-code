async function includePartials() {
  const elements = ["header", "footer"];
  
  for (const id of elements) {
    const el = document.getElementById(id);
    if (el) {
      try {
        // We use a root-relative path (starting with /) 
        // so it works from any subfolder level
        const response = await fetch(`/partials/${id}.html`);
        if (response.ok) {
          el.innerHTML = await response.text();
        }
      } catch (err) {
        console.error(`Error loading ${id}:`, err);
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", includePartials);