// export function renderItem(item) {
//     const ul = document.createElement('ul');
//     const p = document.createElement('p');
//     // const li1 = document.createElement('li');

//     ul.classList.add('list-detail');

//     p.textContent = item.qty && item.name;

//     // li1.textContent = item.name;

//     ul.append(p);
//     return ul;
// }

export function renderItem(item) {
    const li = document.createElement('li');
    li.textContent = `${item.qty} ${item.name}`;

    if (item.purchased) {
        li.classList.add('complete');
    }

    return li;
}