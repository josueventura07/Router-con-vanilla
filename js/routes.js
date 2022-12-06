

const PATHS = {
    home: {
        path: '/',
        template: `
        <div class="home_container">
            <div class="home_info">
                <h1 class="home_title">Bienvenido a Mi Blog</h1>
                <p class="home_p">Disfruto de mi trabajo como Productor Musical & Beat Maker, 
                es mi pasion y lo pongo a tu disposicion</p>
            </div>
            <div class="home_content">
                <video src="https://www.youtube.com/watch?v=5HsuroKtzYM"></video>
            </div>      
        </div>
        `,
    },
    about: {
        path: '/about',
        template: `
            <div class="about_container">
                <h1>👩🏻‍💻 Sobre mi</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
                <img src="" alt="About_img">
            </div>
        `,
    },
    contact: {
        path: '/contact',
        template: `
        <div class="contact_container">
            <h1>📱 Contacto</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
            <img src="" alt="Random Image">
        </div>
            
        `,
    }
}