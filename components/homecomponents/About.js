import Image from 'next/image' 
function About() {
    return (
        <>

<div id="about_general">
    <div className="innerAbout boxed">
        <div className="top_about">
            <div className="leftTop">
                <p>
                   Me defino como un amante de la tecnología, el cual me lleva a un interéz en 
                   investigar y aprender sobre todo lo que esta envuelve y aunque este portal 
                   esta dedicado a mis conocimientos dentro del mundo digitál y programación, de 
                   igual manera son muchos los conocimientos que poseo en electrónica, redes, etc..
                   de los cuales simplemente obtuve el conocimiento solo para realizar una tarea
                   por mi mismo o entender a profundidad como es su funcionamiento aún no sea este
                   el médio elegido para explotar profesionalmente. 
                </p>
            </div>
            <div className="right_about">
                    <h3>Igles:</h3>
                    <ul>
                        <li>
                    <span className="hablado">
                        Hablado
                    </span>
                    <span className="porsentajeHablado">
                        50%
                    </span>
                            </li>
                        <li>
                    <span className="escrito">Escrito</span>
                    <span className="posentajeEscrito">75%</span>
                        </li>
                    </ul>
                </div>  
        </div>
                    <div id="BottomAbout">
                            <div className="BottomLeft">
                                    <div className="blTopOne">
                                        <ul>
                                            <li><b>eMail: </b><a href="mailTo:infoarte247@gmail.com" target="blank">infoarte247@gmail.com</a></li>
                                            <li><b>Tel: </b><a href="tel:640161648" target="blank">640161648</a></li>
                                            <li><b>Portfolio: </b><a target="blank" href="https://www.yumpu.com/es/document/read/62452865/carpeta-digital-lic-ricardo-perez">yumpu</a></li>   
                                            <li><b>Población: </b><a href="https://www.google.com/maps/place/Sabadell,+Barcelona/@41.5496665,2.0675766,13z/data=!3m1!4b1!4m5!3m4!1s0x12a494fd00277675:0x3691e3615821df42!8m2!3d41.5462745!4d2.1086131" target="blank">Sabadell, Barcelona</a></li>
                                        </ul>
                                    </div>

                                    <div className="blTop">
                                        <ul>
                                            <li><b>Carn. Conducir: </b> Si </li>  
                                            <li><b>Desendientes: </b> 3 </li>  
                                            <li><b>Casado: </b> Si </li>  
                                            <li><b>Deporte: </b> Basket B. </li> 
                                            <li><b>Tabaco: </b> No </li> 
                                            <li><b>Alcohol: </b> No </li> 
                                            <li><b>Café: </b> Si </li> 
                                            <li><b>Edad: </b> 39 </li> 
                                            <li><b>Fan: </b> Game Of Thones </li> 
                                            <li><b>Música: </b> Todas </li> 
                                            <li><b>Os: </b> Si </li> 
                                            <li><b>Windows: </b> Si </li> 
                                            <li><b>cPanel: </b> Si </li>
                                            <li><b>Plesk: </b> Si </li>
                                            </ul>
                                    </div>
                            </div>

                                 <div className="">
                                  
                                       <Image src="/3Dlogo.png" alt="ricardo lavour ring" width="254" height="250" /> 
                                             
                                 </div>

                            <div className="BottomRight">
                            <div className="blTopr">
                                        <ul>
                                            <li>Lic. Publicidad Menc. Diseño Gráfico </li>
                                            <li>Curso de MySQL y PHP</li>
                                            <li>Curso de diseño de App con Ionic</li>
                                            <li>Curso reactJS y Firebase</li>
                                            <li>Curso NextJS</li>
                                            <li>Curso diseño Digital</li>
                                            <li>Curso creación de Themes Worespress</li>
                                         </ul>
                                    </div>

                                    <div className="blToprRight">
                                        <ul id="i_am">                                          
                                            <li><span  >Design</span><span className="blTop_d_p">30%</span></li>  
                                            <li><span  >Develop</span><span className="blTop_d_d">70%</span></li>   
                                        </ul>
                                    </div>
                            </div>
                    </div>
    </div>
</div>
        </>
    )
}

export default About
