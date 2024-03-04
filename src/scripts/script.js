function handleModal() {
    const button1 = document.querySelector("#showMessage");
    const button2 = document.querySelector("#showMessage2");
    const modalContainer = document.querySelector("#modal__controller");

    button1.addEventListener('click', () => {
        modalContainer.showModal();
        closeModal();
    });

    button2.addEventListener('click', () => {
        modalContainer.showModal();
        closeModal();
    });
}

function closeModal() {
    const closeButton = document.querySelector("#modal__btn--closed");
    const modalContainer = document.querySelector("#modal__controller");

    closeButton.addEventListener('click', () => {
        modalContainer.close();
    });
}

handleModal();
