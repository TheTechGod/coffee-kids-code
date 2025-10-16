// Copy Post Link
function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  alert("Post link copied!");
}