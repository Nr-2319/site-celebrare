(function () {

    const buttons = document.querySelectorAll('.dot');
    const image1 = document.getElementById('page1-img');
    const image2 = document.getElementById('page2-img');
    const image3 = document.getElementById('page3-img');
    const imageHolder = document.getElementById('img-slider');
    const tryBtn = document.getElementById('try-card');
    const loginSignBtn = document.querySelectorAll('[data-modal-target]');
    const loginMsgBox = document.getElementById('login-msg-box');
    const loginOverlay = document.getElementById('login-msg-overlay');
    let index = 0;
    let opacityset = 0;

    imageHolder.addEventListener('click', () => {
        showcards();
        if (index === 0) {
            buttons[index].classList.remove('active-img');
            index = 1;
            buttons[index].classList.add('active-img');
            image1.src = "images/Page2.jpg";
            image2.src = "images/Page3.jpg";
            image3.src = "images/Page1.jpg";
        }
        else if (index == 1) {
            buttons[index].classList.remove('active-img');
            index = 2;
            buttons[index].classList.add('active-img');
            image1.src = "images/Page3.jpg";
            image2.src = "images/Page1.jpg";
            image3.src = "images/Page2.jpg";
        }
        else {
            buttons[index].classList.remove('active-img');
            index = 0;
            buttons[index].classList.add('active-img');
            image1.src = "images/Page1.jpg";
            image2.src = "images/Page2.jpg";
            image3.src = "images/Page3.jpg";
        }
    });

    function showcards() {
        let myfirstInterval = setInterval(() => {
            if (opacityset < 1) {
                opacityset += 0.01;
                image1.style.opacity = opacityset;
                image2.style.opacity = opacityset;
                image3.style.opacity = opacityset;
            }
            else {
                clearInterval(myfirstInterval);
                opacityset = 0;
            }
        }, 1);
    }

    tryBtn.addEventListener('click', () => {
        tryBtn.style.background = '#ABB2B9';
        tryBtn.style.transform = 'translateX(3px)';
        setTimeout(() => {
            tryBtn.style.background = '#565656';
            tryBtn.style.transform = 'translateX(-3px)';
        }, 400);

        setTimeout(() => {
            tryBtn.style.background = '#0e0e0e';
            tryBtn.style.transform = 'translateX(0px)';
            alert("Opps! \n Not Available Right Now!")
        }, 800);
    });

    loginSignBtn.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.querySelector(button.dataset.modalTarget);
            openmodal(modal);
        });
    });

    loginOverlay.addEventListener('click', () => {
        closemodal();
    });

    function openmodal(modal) {
        if (modal === null) return;
        modal.classList.add('active');
        loginOverlay.classList.add('active');
    }

    function closemodal() {
        loginMsgBox.classList.remove('active');
        loginOverlay.classList.remove('active');
    }


})(window);