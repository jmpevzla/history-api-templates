const container = document.querySelector('.gallery');

function getContent(name) {
    const template = document.getElementById(`template-${name}`);
    return template ? template.innerHTML : '';
}

function setContent(name) {
    const dataContent = getContent(name);
    const content = document.getElementsByClassName('content')[0];
    content.innerHTML = dataContent;
    document.title = name[0].toUpperCase() + name.slice(1);
}

container.addEventListener('click', async (e) => {
    e.preventDefault();
    
    // e.target is the image
    if (e.target !== e.currentTarget && e.target.dataset['name']) {
        const name = e.target.dataset['name'];
        const url = `#${name}.html`;
        history.pushState({ name }, null, url);
        setContent(name);
    }
    e.stopPropagation();
});

window.addEventListener('popstate', async (ev) => {
   const state = ev.state;
   if (state === null) {
       setContent('History Api');
   } else {
       setContent(state.name);
   }
});

const loc = window.location.hash;
switch(loc) {
    case '#peter.html':
    case '#ray.html':
    case '#egon.html':
    case '#winston.html':
        setContent(loc.slice(1, loc.length - 5));
        break;
}
