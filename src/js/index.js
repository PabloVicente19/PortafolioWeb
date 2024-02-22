const container = document.querySelector(".skills-container");
const abilitys = skils;

const createCard = (product) => {
  const { image, description } = product;
  return `
    <div class="skill">
      <div class="skill-container-img">
        <img class="skill-img" src="${image}" alt="Html" />
      </div>
      <span class="skill-description">${description}</span>
    </div>
  `;
};

const renderCard = () => {
  container.innerHTML = abilitys.map(createCard).join("");
};

renderCard();
