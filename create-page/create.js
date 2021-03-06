import { createItem, checkAuth } from '../fetch-utils.js';

const createForm = document.getElementById('create-form');

createForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(createForm);
    const newItem = {
        name: data.get('name'),
        qty: data.get('qty'),
    };

    const response = await createItem(newItem);
    console.log(response);

    location.replace('/');
    // window.location.href = '/';
});

checkAuth();