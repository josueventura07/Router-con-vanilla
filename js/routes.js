

const PATHS = {
    home: {
        path: '/',
        template: `
        <div class="home_container">
            <div class="home_info">
                <h1 class="home_title">Bienvenid@</h1>
                <p class="home_p">
                    La Producción Musical es mi pasión y lo pongo a tu disposición.
                    
                </p>
            </div>
                 
        </div>
        <div class="home_container2 home_img">
        
            <div class="quote">
                <p>
                Alabad a Dios en su santuario;

                Alabadle en la magnificencia de su firmamento.
                
                Alabadle por sus proezas;
                
                Alabadle conforme a la muchedumbre de su grandeza.
                
                Alabadle a son de bocina;
                
                Alabadle con salterio y arpa.
                
                Alabadle con pandero y danza;
                
                Alabadle con cuerdas y flautas.
                
                Alabadle con címbalos resonantes;
                
                Alabadle con címbalos de júbilo.
                
                Todo lo que respira alabe a JAH.
                
                Aleluya. Salmos 150
                </p>
            </div>
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
            <div class="over_home_container2"></div>         
        </div>
        `,
    },
    about: {
        path: '/about',
        template: `
            <div class="about_container">
                <div class="about_info">
                    <h1 class="about_title">👩🏻‍💻 Sobre mi</h1>
                    <p class="about_p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
                    <img src="" alt="About_img">
                </div>
            </div>
        `,
    },
    contact: {
        path: '/contact',
        template: `
        <div class="contact_container">
            <div class="contact_info">
                <h1 class="contact_title">📱 Contacto</h1>
                <p class="contact_p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum harum aliquam reiciendis dignissimos? Perferendis consequuntur vitae fugiat fuga neque ipsum?</p>
                <img src="" alt="Random Image">
            </div>    
        </div>
            
        `,
    }
}