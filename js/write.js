function generate() {
  const date = document.getElementById("date").value.trim();
  const content = document.getElementById("content").value.trim();
  const imagesRaw = document.getElementById("images").value.trim();

  if (!date || !content) {
    alert("Date and content required.");
    return;
  }

  const now = new Date();
  const time =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");

  let imagesHTML = "";

  if (imagesRaw) {
    imagesRaw.split(",").map(i => i.trim()).forEach(src => {
      imagesHTML += `\n  <img src="${src}" alt="">\n`;
    });
  }

  const html = `
<article class="entry">
  <h2>${date}</h2>
  <time>${time}</time>
  ${imagesHTML}
  <p>
    ${content.replace(/\n/g, "<br>")}
  </p>
</article>
`.trim();

  document.getElementById("output").textContent = html;
}
