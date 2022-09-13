import styles from './home.module.css';

const Home = () => {
    return(
        <>
            <span className={styles.title}>Modulo de búsqueda Mercado Libre</span>
            <p>
            <br/><br/>
                <span className={styles.subtitle}>Objetivos</span>
                -Implementar aplicativo web para la búsqueda general y a detalle de productos mercado libre.
                <br/>
                <br/>
                -Hacer uso de tecnologías web como lo son:
                <br/>
                    CLIENTE:
                    <br/>
                        HTML
                        <br/>
                        JS (React)
                        <br/>
                        CSS (StyledComponents)
                        <br/>
                    SERVIDOR
                    <br/>
                        NODE
                        <br/>
                        EXPRESS
                        <br/>
                        <br/>
                -Tener en cuenta aspectos de:
                <br/>
                    Usabilidad
                    <br/>
                    SEO
                    <br/>
                    Performance
                    <br/>
                    Escalabilidad
                    <br/>
                    <br/>
                <span className={styles.subtitle}>Implementación</span>
                <br/>
                Se hizo uso de las tecnologías recomendadas y la estructura del proyecto se basa en:
                <br/>
                PROYECTO - CLIENTE - (ReactJS - HTML - CSS)
                <br/>
                PROYECTO - SERVER - (NodeJS - Express)
                <br/>
                <br/>
                <span className={styles.subtitle}>Uso</span>
                <br/>
                En esta página de entrada escribir en la caja de texto superior los articulos a buscar, posteriormente
                dar click en el botón de busqueda.
                <br/><br/>
                Paso a seguir seleccionar uno de los productos listados.
                <br/><br/>
                En caso de querer realizar una nueva búsqueda, la podra hacer desde la página de búsqueda donde cargará resultados inmediatos.
                <br/><br/>
                <span className={styles.subtitle}>Plus</span>
                <br/>
                Se adicionó el almacenamiento de caché para que las consultas que se hagan más de una vez se guarden por 10 minutos y los resultados los muestre con un tiempo más óptimo.
                <br/><br/>
                La búsqueda en la página de search, se hace seguido a la escritura del usuario en la caja de búsqueda, para dar la sensación de búsqueda inmediata.
                <br/><br/>
                <span className={styles.subtitle}>Código</span>
                <br/>
                SERVIDOR
                <br/>
                Se diseño una estructura de carpetas que permitiera acceder a los providers de mercadolibre, así en este caso si llegase a pasar que se va hacer uso de nuevas fuentes de apis simplemente es agregarlas al modulo de providers.
                <br/>
                Se hace uso de variables de entorno para el manejo de dominios.
                <br/>
                Se hizo uso de metodos como Fetch, PromiseAll, ArrowFunctions, Desestructuring y Routes
                <br/><br/>
                CLIENTE
                <br/>
                Se diseño una solución basada en ApiContext que nos permite mantener el acceso a los providers desde cualquiera de los componentes envueltos permitiendo así poder generar una busqueda desde cualquier componente.
                <br/>
                Se hizo uso de metodos como fetch, Async, Await, map, filter, Routes, ApiContext, ArrowFunctions y Desestructuring.
                <br/>
                Se realizo el manejo de las diferentes rutas según como se expuso en el documento.
                <br/><br/><br/><br/>
                Autor: Roniber Andrés Lugo Jiménez
                Año: 2022
                <br/><br/><br/><br/><br/>
            </p>
        </>
    )
}

export default Home