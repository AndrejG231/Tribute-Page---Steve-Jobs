const setOpenerDim = () => {
    const images = document.querySelectorAll('.pair_image_item')
    images.forEach(img => {
        let modal =  img.parentElement.querySelector('.modal-open');
        modal.style.width = img.clientWidth + 'px';
        modal.style.height = img.clientHeight + 'px';
})};


const modal = document.querySelector('.modal');

const openModal = (event) => {
    const modalImg = document.querySelector('.modal-item')

    modalImg.src = event.target.parentElement.parentElement.querySelector('.pair_image_item').src
    
    modal.classList.remove('invisible');
};

const closeModal = () => {
    modal.classList.add('invisible')
}

window.addEventListener('resize', setOpenerDim);
setOpenerDim();


document.querySelectorAll('.modal-open').forEach(item => item.firstChild.addEventListener('click', openModal));

document.querySelector('.modal-close').addEventListener('click', closeModal);
