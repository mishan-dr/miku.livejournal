function generate() {
  const date = document.getElementById("date").value.trim();
  const content = document.getElementById("content").value.trim();
  const imagesRaw = document.getElementById("images").value.trim();

  if (!date || !content) {
    alert("Date and content required.");
    return;
  }

  let imagesHTML = "";

  if (imagesRaw) {
    const images = imagesRaw.split(",").map(i => i.trim());
    images.forEach(src => {
      imagesHTML += `\n  <img src="${src}" alt="">\n`;
    });
  }

  const html = `
<article class="entry">
  <h2>${date}</h2>
  ${imagesHTML}
  <p>
    ${content.replace(/\n/g, "<br>")}
  </p>
</article>
`.trim();

  document.getElementById("output").textContent = html;
}
