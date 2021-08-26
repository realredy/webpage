import Image from 'next/image';

function changeData(e){

    let actual = document.querySelector('.listaTag .selectedHome');
    actual.classList.remove('selectedHome');
    let addnew = document.getElementsByClassName(e.target.classList[0]);
    addnew[0].classList.add("selectedHome");

    let titulo = document.getElementById('titleHomeBox');
    let texto = document.getElementById('textHomeBox');

    // console.log(e.target.classNameList[0]);
    switch (e.target.classList[0]) {
        case 'selected_JavaScript':
            titulo.innerHTML = 'Suficiente experiencia como para poder adaptarme a cualquier framework';
            texto.innerHTML = `Han pasado ya más de 5 años que conocí la librería de JQuery que en nada es 
            una librería decadente, más, no paso mucho tiempo cuando reconocí que trabajar directamente con 
            javascript me abriría las puertas para poder adaptarme fácilmente a librerías como angular que 
            en mi caso la utilicé en ionic, como actualmente es el día a día al programar con reactJS<br/>
            Tal vez difieras en mi opinión, pero 5 años de experiencia trabajando con javascript, me da el poder 
            desarrollar con cualquier librería con base javascript, me basta con leer la documentación para poder ejecutar tareas con la misma
            por ende, el dar un paso adelante para conocer javascript me abre las puertas a las demás tecnologías
            cosa que no hubiera sido posible solo si me hubiese quedado con jQuery.`;
            break;
            case 'selected_Maquetador':
                titulo.innerHTML = 'Rapidéz en la ejecución y adaptabilidad pixel perfect';
                texto.innerHTML = `Con los últimas tendencias de maquetación y el correcto uso de las 
                etiquetas en posiciones que ayudan a los mototes de búsqueda a indexar el contenido el web
                site de manera eficaz, así como el correcto uso de las últimas tecnologias de maquetación
                tal como el uso de -flexbox- y estilos dedicados a cada navegador, son los conocimientos 
                aplicados y orientados a la adaptabilidad de los diferentes dispositivos moviles.<br /> 
                A esto combinado con más de 5+ años de experiencia continua en donde utilizo técnicas de 
                planeación y con esto customizar el resultado final y por ende acortando el tiempo
                empleado en producción.`;
            break;
            case 'selected_phpmysql':
                titulo.innerHTML = '5+ años de experiencia ...queda mucho que aprender ...pues si!';
                texto.innerHTML = `En parte he creado de todo con php, implementando código simples o complejos, crud, secctions
                depende del proyecto aplicar principios SOLID, usos de clases, funciones publicas, privadas, protected ect...
                <br> En la actualidad ya no tan fan de MySQL luego de probar FIREBASE, pero de igual manera todo 
                depende del proyecto que se realizará. <br> En tanto a la complejidad y estructura, no tengo problemas en 
                crear una planificación de proyecto en donde se crearían tablas relacionadas para obtener datos conjuntos,
                endpoint, ect...<br>
                No puedo definir a que nivel puedo colocarme en tanto conocimiento, pero he resuelto cada reto sin mayor 
                preocupación.`;
            break;
            case 'selected_Wordpress':
                titulo.innerHTML = 'No soy un instalador de pluguins! Sin animos de ofender. Esto es de novatos.';
                texto.innerHTML = `He visto ya bastantes perfiles de personas que dicen que !soy programador en wordpress!,
                Pues No!. No eres programador de wordpress si no sabes de PHP, por ende luego de conocer cómo se conforma la estructúra
                de tablas de wordpress y de cómo se comunican y se relacionan así de como va las estructúras de las funciones 
                propias de wordpress, lo siguiente es decir, que puedo crear cualquier proyecto en donde se requiera crear un theme, 
                plugin ect... hasta generar customizaciones importantes a medida, y con esto garantizar el control total y
                 una velocidad de carga óptima, menos problemas por actualizaciones y muy poca dependencia de código de terceros.
                 En definitiva puedes probarme y colocarme en un reglón como experto en wordpress o que se necesita para serlo, 
                 en todo caso siempre estoy abierto a críticas siempre que vengan de la mano de un conocimiento que acompañe a la misma.`;
            break;
            case 'selected_adobe':
                titulo.innerHTML = 'Desde 1998... Todo inicio con photoshop.';
                texto.innerHTML = `Photoshop, ilustrator, indesign, corel ect.. Con una carrera como publicista con especialidad
                en diseño gráfico, cursando materias como: dibujo profesional, pintura, escultura, fotografía, producción, para entonces no 
                entendía para que necesitaba todo estos conocimientos si en fin estaba orientado al mundo del diseño digital y no al artístico. 
                Todo esto es simple de explicar, no puedes ser un buen diseñador gráfico si no tienes creatividad ya que sea a través de un medio digital o 
                plasmando un lienzo, todo está relacionado con el mundo artístico y la creatividad. Retornando, ser developer y ser un creativo son
                dos ramas que pocos dominan al mismo tiempo y es precisamente esto lo que me hace destacar, el poder dominar las herramientas
                del diseño digital con una base y experiencia combinado con el mundo de la programación.`;
            break;
            case 'selected_react':
                titulo.innerHTML = 'ReactJS para bien o para mal, es el que he elegido.';
                texto.innerHTML = `Mientras otros dirían porque reactJS, debes optar por GO, Angular, (Vue ya que estás relacionado con 
                php), o tal vez, Node o Python, al final creo que con los avances que ha tenido además de que la curva de aprendizaje será 
                más corta, el proceso de pasar a react native la cual es mi meta con todo el poder de  combinarlo con llamadas a apis, 
                firebase y tal, el cual está bastante completo como para 
                crear web, app modernas y demas, intentaré programar este portal sacando el máximo de potencial que obtendré al combinarlo 
                con firebase. Y que mejor muestra de migrar mi web a react para predicar con el ejemplo por lo tanto si quieres tener una 
                idea de mis conocimientos inicia con dejar tus comentarios aquí tal vez me des una idea de como mejorarlo.`;
             break;
             case 'selected_webpack':
                titulo.innerHTML = 'WebPack es un conocimiento que no puede faltar';
                texto.innerHTML = `Como base de todos los frameworks compuestos por webpack, este conocimiento no puede quedar 
                desapersivido, ya que es la raíz de los FM tales como VUE, ANGULAR, IONIC, entonces ir tras este conocimiento
                es algo que no puede faltar, y debido a esto, es que puedo con una conciencia sólida enfrentarme a desarrollar conociendo que 
                esta haciendo el software para generar mi app. Dicho esto, puedo combinar webpack con todos sus módulos tales como 
                babel, scss, minificadores ect, para desarrollar con wordpress sitios web extremadadamente rápidos y modulares con la 
                últimas tendencias del desarrollo moderno.`;
             break;
    
        default:
            break;
    }

   }
function Selectorarticles(props) {
    return (
        <>
           <div id="home_body">
              <div className="leftImage">
                  <Image src='/ricardo_photo.png'  alt="ricardo enrique perez lavour" width={280} height={392} />

                  </div>

                 <div className="right_TabsText">
                    <div className="boxTags"> 
                        <ul className="listaTag">
                            <li onClick={changeData} className="selected_Maquetador selectedHome">Maquetador</li>
                            <li onClick={changeData} className="selected_JavaScript">JavaScript</li>
                            <li onClick={changeData} className="selected_phpmysql">PhP y MySQL</li>
                            <li onClick={changeData} className="selected_Wordpress">Wordpress</li>
                            <li onClick={changeData} className="selected_adobe">Pack Adobe</li>
                            <li onClick={changeData} className="selected_react">ReactJS</li> 
                            <li onClick={changeData} className="selected_webpack">webpack</li> 
                        </ul>
                    </div>
                    <div className="textBox"> 
                        {/* <div id="hideScroll"></div> */}
                        <div id="innerTextBox">
                        <h1 id="titleHomeBox">Rapidéz en la ejecución y adaptabilidad pixel perfect</h1>
                            <span id="textHomeBox">Con las últimas tendencias en maquetación y el correcto uso de las 
                            etiquetas en posiciones que ayudan a los mototes de búsqueda a indexar el contenido web
                            manera eficaz, así como el correcto uso de las últimas tecnologias en maquetación
                            tal como el uso de -flexbox- y estilos dedicados a cada navegador, son los conocimientos 
                            aplicados y orientados a la adaptabilidad de los diferentes dispositivos moviles.<br /> 
                            A esto combinado con más de 5+ años de experiencia continua en donde utilizo técnicas de 
                            planeación, planificación de proyectos y con esto customizar el resultado final, que por ende
                            resulta en tiempos menos extensos de producción.</span>
                        </div>
                    </div>

                 </div>
            </div>                    
        </>
    );
}

export default Selectorarticles;