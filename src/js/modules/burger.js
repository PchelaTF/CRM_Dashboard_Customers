export const menuBurger = (params) => {
    const menuIcon = document.querySelector(params.menuIconSelector);
    const menuIconSpan = menuIcon.querySelector('span');
    const sideMenu = document.querySelector(params.sideMenuSelector);
    const body = document.querySelector('body');

    const substrate = document.createElement('div')
    substrate.classList.add('_substrate')

    body.addEventListener('click', e => {
        console.log(e.target);

        if (e.target == menuIcon || e.target == menuIconSpan) {
            openMenuBurger()
        } else if (e.target == substrate) {
            closeMenuBurger()
        }
    })

    function openMenuBurger() {
        menuIcon.classList.add('_active');
        sideMenu.classList.add('_active');
        body.classList.add('_lock');
        body.appendChild(substrate);
    }

    function closeMenuBurger() {
        body.removeChild(substrate);
        body.classList.remove('_lock');
        menuIcon.classList.remove('_active');
        sideMenu.classList.remove('_active');
    }
};