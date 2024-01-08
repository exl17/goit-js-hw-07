 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

    createButton.addEventListener('click', function() {
      const numberOfBoxes = parseInt(document.querySelector('input').value, 10);

      if (numberOfBoxes >= 1 && numberOfBoxes <= 100) {
        createBoxes(numberOfBoxes);
        document.querySelector('input').value = '';
      } 
    });

    destroyButton.addEventListener('click', destroyBoxes);
  