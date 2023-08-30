const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(`hello world`);
  //   const firstName = document.getElementById('firstName');
  //   const
  const formData = new FormData(document.getElementById('form'));

  for (const [key, value] of formData) {
    if (value === '') {
      const p = document.createElement('p');
      p.innerText = `${key} cannot be empty`;
      //   p.insertAdjacentElement(document.getElementById(`${key}`, p));
      document.getElementById(`${key}`).insertAdjacentElement('afterend', p);
      p.classList.add('error');
      setTimeout(() => {
        removeAllError();
      }, 2000);
    }
  }
});
function removeAllError() {
  const errors = document.getElementById('form').querySelectorAll('.error');
  for (const error of errors) {
    console.log(error);
    error.remove();
  }
}
