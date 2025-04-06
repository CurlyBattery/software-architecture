const button = document.getElementById('button');
const header = document.getElementById('header');

let counter = 0;

button.addEventListener('click', () => {
    counter += 1;
    header.innerText = counter.toString();
    header.appendChild(document.createElement('div'));

    console.log('AFTER CHANGE');

    Promise.resolve().then(() => console.log('promise'));

    setTimeout(() => console.log('timer'), 0);
});

const mutation = new MutationObserver((mutations) => {
    console.log(mutations);
});

mutation.observe(header, {
    subtree: true,
    attributeOldValue: true,
    childList: true,
})
