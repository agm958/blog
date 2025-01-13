

const showHideBlocks = (id) => {
    const block = document.getElementById(id.toString());
    if (block.style.display === 'none') {
        block.style.display = 'block';
        block.classList.add('show')
    } else {
        block.style.display = 'none';
        block.classList.remove('show')

    }
}