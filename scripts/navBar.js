const nav = document.querySelector('.navbar')
fetch('/navbar.html')
    .then(res=>res.text())
    .then(data=>{
        nav.innerHTML=data

        const windowPathname = window.location.pathname;
        const navLinkEls = document.querySelectorAll(".menu__link");

        console.log(navLinkEls.length);
        navLinkEls.forEach(navLinkEl => {
            const navLinkPathName = new URL(navLinkEl.href).pathname;

            if ((windowPathname === navLinkPathName)) {
                navLinkEl.classList.add('active');
            }
        })
    })
