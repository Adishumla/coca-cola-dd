const products = document.querySelector(".products-container");

//create array of products
const productsArray = ["Classic", "Zero", "Light", "Vanilla"];

//foreach product in array, add print to page
productsArray.forEach((product) => {
  products.innerHTML += `
        <div class="product">
          <img
            src="Coca-Cola-bilder/Coca-Cola ${product}.png"
            alt="Coca-Cola ${product}"
          />
          <h3>Coca-Cola ${product}</h3>
          <p>
            Coca-Cola är en kolsyrad läskedryck med colasmak som tillverkas av
            The Coca-Cola Company, grundat 1886 i Atlanta, Georgia, USA.
          </p>
        </div>
  `;
});

const history_header = ["Founder", "Production", "Today"];
const history_text = [
  "John Stith Pemberton (July 8, 1831 – August 16, 1888) was an American pharmacist and Confederate States Army veteran who is best known as the inventor of Coca-Cola. In May 1886, he developed an early version of a beverage that would later become Coca-Cola, but sold his rights to the drink shortly before his death.",
  "Sustainability is not something new at The Coca-Cola Company. Since 1917, our efforts have covered a wide range of topics including: water sustainability, women empowerment, community well-being, sustainable packaging, climate protection, human and workplace rights, and sustainable agriculture.",
  "In February 2021, as a plan to combat plastic waste, Coca-Cola said that it would start selling its sodas in bottles made from 100% recycled plastic material in the United States, and by 2030 planned to recycle one bottle or can for each one it sold. Coca-Cola started by selling 2000 paper bottles to see if they held up due to the risk of safety and of changing the taste of the drink.",
];
const history_img = [
  "Coca-Cola-bilder/pemberton-coke-is-delicious 1",
  "Coca-Cola-bilder/coca-cola-history-bottler-small 1",
  "Coca-Cola-bilder/vending-machine",
];

const history = document.querySelector(".history-container");

history_header.forEach((header, index) => {
  history.innerHTML += `
    <div class="history-item ${header}">
      <img src="${history_img[index]}.png" alt="${header}" />
      <div class="history-text">
      <h3>${header}</h3>
      <p>${history_text[index]}</p>
      </div>
    </div>
  `;
});

const coke_pros = document.querySelector(".coke-pros-container");

const pros = [
  "<strong>Caffeine and bubbles </strong>improve mood and activate a person. It improves both mental and physical performance.",
  "<strong>Coca-Cola is perfect</strong> if you feel overworked and have a bad memory. The drink stimulates the neurons of the brain and improves all functions for a short time.",
  "<strong>Coca-Cola is useful</strong> to drink with overwork and poor memory. The drink stimulates the neurons of the brain and improves all functions for a short time.",
];

coke_pros.innerHTML += `
<ol>
${pros.map((pro) => `<li>${pro}</li>`).join("")}
</ol>
`;