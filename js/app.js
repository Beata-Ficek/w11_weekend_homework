document.addEventListener('DOMContentLoaded', () => {
  const newForm = document.querySelector('#form');
  newForm.addEventListener('submit', handleNewFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewFormSubmit = function (event){
  event.preventDefault();

  const formListItem = createFormListItem(event.target);
  const formList = document.querySelector('#new-form-list');
  formList.appendChild(formListItem);

  event.target.reset();
}

const createFormListItem = function (form) {
  const formListItem = document.createElement('li');
  formListItem.classList.add('form-list-item');

  const first_name = document.createElement('ul');
  first_name.textContent = `First Name: ${form.first_name.value}`;
  formListItem.appendChild(first_name);

  const last_name = document.createElement('ul');
  last_name.textContent = `Last Name: ${form.last_name.value}`;
  formListItem.appendChild(last_name);

  const age = document.createElement('ul');
  age.textContent = `Age: ${form.age.value}`;
  formListItem.appendChild(age);

  const mbti = document.createElement('ul');
  mbti.textContent = `Test result: ${form.mbti.value}`;
  formListItem.appendChild(mbti);

  // const female-gender = document.createElement('ul');
  // gender.textContent = `Gender: ${form.female-gender.value}`;
  // formListItem.appendChild(female-gender);
  //
  // const male-gender = document.createElement('ul');
  // gender.textContent = `Gender: ${form.male-gender.value}`;
  // formListItem.appendChild(male-gender);
  //
  // const other-gender = document.createElement('ul');
  // gender.textContent = `Gender: ${form.other-gender.value}`;
  // formListItem.appendChild(other-gender);

  return formListItem;
}

const handleDeleteAllClick = function (event) {
  const newFormList = document.querySelector('#new-form-list');
  newFormList.innerHTML = '';
}
