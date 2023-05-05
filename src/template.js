const secTemplates = document.querySelector('.templates-container');
const selectTemplates = document.querySelectorAll('.template');

const templates = document.querySelector('.templates');


templates.addEventListener('click', (event) => {
  const id = event.target.dataset.imgId;
  if (data-id) {
    // remove 'selected' class from other templates
    secTemplates.querySelectorAll('.template').forEach((template) => {
      template.classList.remove('selected');
    });
    // add 'selected' class to the clicked template
    event.target.closest('.template').classList.add('selected');
  }
});

