import { checkAuth, logout, fetchListItems, togglePurchased, deleteAllListItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();
const deleteButton = document.getElementById('delete-button');
const logoutButton = document.getElementById('logout-button');
const createButton = document.getElementById('create-button');

logoutButton.addEventListener('click', () => {
    logout();
});

const shoppingListElem = document.getElementById('shopping-list');
const error = document.getElementById('error');

async function displayListItems() {
    shoppingListElem.textContent = '';
    const data = await fetchListItems();
    if (data) {
        for (let item of data) {
            const listElem = renderItem(item);
            listElem.addEventListener('click', async (e) => {
                e.preventDefault();
                await togglePurchased(item);
                displayListItems();
            });

            shoppingListElem.append(listElem);
        }
    } else {
        error.textContent = 'oops not logged in';
    }
}

deleteButton.addEventListener('click', async () => {
    await deleteAllListItems();
    displayListItems();
});

createButton.addEventListener('click', () => {
    window.location.replace('../create-page/index.html');
});

displayListItems();