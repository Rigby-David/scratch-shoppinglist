import { createNewList } from '../fetch-utils.js';

const createForm = document.getElementById('create-form');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const newList = {
        name: data.get('name'),
        qty: data.get('qty'),
    };

    const response = await createNewList(newList);
    console.log(response);

    // location.replace('/');
});