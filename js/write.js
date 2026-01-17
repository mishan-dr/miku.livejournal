function generate() {
  const date = document.getElementById("date").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!date || !content) {
    alert("Date and content required.");
    return;
  }

  const html = `
<article class="entry">
  <h2>${date}</h2>
  <p>
    ${content.replace(/\n/g, "<br>")}
  </p>
</article>
  `.trim();

  document.getElementById("output").textContent = html;
}
