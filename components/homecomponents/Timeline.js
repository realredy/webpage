 
function Timeline() {
    return (
        <>
            <div id="timeline">
                <div className="innerTl boxed">
                    <ul id="trabajosArriba">
                        <li></li>
                        <li><h3 className="red">2019 -2020 (NOZAMA)</h3>
                            <span>Maquetación, liquid - shopify - app con reactJS</span>
                            <p>Maquetado y manipulación con el lenguaje de liquid, en esta la creación 
                                de nuevas funcionalidades y adaptaciones.
                                Otras web como raas.green y nozamapickup.com fueron desarrolladas con la 
                                implementación de sass, js ect... Tambien colaboración con la web app la 
                                cual sincronizaba datos para exponerlos en la web.
                            </p>
                            <ul className="MarkerTl">
                                    <li></li>
                                </ul> 
                        </li>                 
                        <li></li>
                    </ul>
                    <ul id="trabajosAbajo">
                        <li><h3 className="red">2017 - 2018 (Bits&BitesMedia)</h3>
                            <span>Desarrollo Wordpress</span>
                            <p>Desarrollo del portal RNT.DE empresa Alemana dedicada a la venta de servidores
                                para empresas tales como 1and1, para este proyecto se requería personalizaciones a 
                                medida y customizaciones para adaptar el proyecto a los requerimientos de la empresa, 
                                además de crear nuevos módulos desarrollados con php para añadir nuevas funcionalidades.
                            </p>
                            <ul className="MarkerTl">
                                    <li></li>
                                </ul> 
                            </li>
                        <li></li>
                        <li><h3 className="red">2020 (Actual)</h3>
                            <span>Desarrollo PHP, MySQL, Wordpress</span>
                            <p>Creación de Plugin, Themes Customizados envío de tatos desde el front con capacidad de crear
                                usuarios, post, postmeta ect. Tablas añadidas incrustadas en el sistema de tablas nativas
                                de wordpress y capaz de ser leidas desde el backend de wordpress.
                            </p>
                                <ul className="MarkerTl">
                                    <li></li>
                                </ul>                           
                            </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Timeline
