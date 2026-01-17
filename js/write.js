function generate() {
  const date = document.getElementById("date").value.trim();
  const content = document.getElementById("content").value.trim();
  const imagesRaw = document.getElementById("images").value.trim();

  if (!date || !content) {
    alert("Date and content required.");
    return;
  }

  const now = new Date();
let hours = now.getHours();
const minutes = now.getMinutes().toString().padStart(2, "0");
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;

const time = `${hours}:${minutes} ${ampm}`;

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
