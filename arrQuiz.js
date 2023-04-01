const playLists = [
    'Numb By Linkin Park',
    'Girlfriend By Avril Lavigne',
    'Call To Arms By Angels&Airwaves',
    '3 Wisemen By James Blunt'
];
playLists.push('Bounce By Timberland');
let list = `<ol>`
playLists.forEach(playlist => {
    list += `<li>${playlist}</li>`;
});
list += `</ol>`;
document.write(list);

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.textContent
    if(para.textContent.includes('success')) {
        // para.classList.add('success');
        para.className = 'success'
    } else if(para.textContent.includes('error')) {
        // para.classList.add('error');
        para.className = 'error';
    }
})