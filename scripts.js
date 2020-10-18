import './sass/styles.scss';

const greenLights = document.querySelectorAll('.green-light');
greenLights.forEach((greenLight) => {
  greenLight.addEventListener('click', () => {
    let wrapper = greenLight.closest('article');
    let statement = wrapper.querySelector('p');
    statement.setAttribute('class', '');
    statement.classList.add('green');
  });
});

const yellowLights = document.querySelectorAll('.yellow-light');
yellowLights.forEach((yellowLight) => {
  yellowLight.addEventListener('click', () => {
    let wrapper = yellowLight.closest('article');
    let statement = wrapper.querySelector('p');
    statement.setAttribute('class', '');
    statement.classList.add('yellow');
  });
});

const redLights = document.querySelectorAll('.red-light');
redLights.forEach((redLight) => {
  redLight.addEventListener('click', () => {
    let wrapper = redLight.closest('article');
    let statement = wrapper.querySelector('p');
    statement.setAttribute('class', '');
    statement.classList.add('red');
  });
});

const downloadButton = document.querySelector('.downloadPDF');
downloadButton.addEventListener('click', () => window.print());
