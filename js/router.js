class Router {

    // Constructor
    constructor(paths) {
        this.paths = paths
        this.initRouter()
    }

    // Metodo para inicial el Router
    initRouter() {
        const { location: { pathname = '/'} } = window
        const URL = pathname === '/' ? 'home' : pathname.replace('/', '')
        this.load()
    }

    // Metodo para cargar las vistas
    load(page = "home") {
        const { paths } = this
        const { path, template } = paths[page] || paths.error;
        const $CONTAINER = document.querySelector("#content");
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "done", path)

    }

}