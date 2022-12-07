

const PATHS = {
    home: {
        path: '/',
        template: `
        <div class="home_container">
            <div class="home_info">
                <h1 class="home_title">Bienvenido</h1>
                <p class="home_p">
                    La Productor Musical es mi pasion y lo pongo a tu disposicion.
                    
                </p>
            </div>
                 
        </div>
        <div class="home_container2 home_img">
        <img class="bible" src="./img/img_resources/bible-gf2ead3d2e_1920.jpg" alt="img">
        
            <div class="multimedia_content">
                <div class="home_multimedia">
                    <iframe class="main_video" width="560" height="315" src="https://www.youtube.com/embed/5HsuroKtzYM" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
                <div class="home_multimedia">
                    <iframe class="main_video" width="560" height="315" src="https://www.youtube.com/embed/cFtDRPI4Ius" 
                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>
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