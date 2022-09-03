export const Contactanos = ( )=>{
    return(
        <main className="mainContactanos container">
            <h1>
            CONTACTO
            </h1>

            <div className="infoFormDiv container">
                <div className="informacionContacto"> 
                <h3>CONTACTANOS</h3>
                <p>Lun. a Vie. de 10 a 14hs / 16.20 a19hs - Sab. de 12 a 19hs.</p>
                <p>011-15-50268204</p>
                <p>carlosbakery@mail.com</p>
                <p>Ministro Brin 2988</p>
                <iframe title="Ubicacion panaderia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.9076137411694!2d-58.397680484767506!3d-34.70751008043275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd18966cee51%3A0x7f176f5dfdb594af!2sMinistro%20Brin%202988%2C%20B1826DYR%20Lan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1647214054349!5m2!1ses!2sar"></iframe>
                </div>
                <form className="formContacto ">
                    <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input className="form-control" placeholder="Ingrese su nombre" id="nombre"></input> 
                    </div>
                    <div className="form-group">
                    <label for="email">Email</label>
                    <input className="form-control" placeholder="Ingrese su email" id="email"></input>
                    </div>
                    <div className="form-group">
                    <label for="telefono">Telefono</label>
                    <input className="form-control" placeholder="Ingrese su telefono" id="telefono"></input>
                    </div>
                    <div className="form-group">
                    <label for="consulta">Consulta</label>
                    <textarea className="form-control" placeholder="Escriba su consulta" id="consulta"></textarea>
                    </div>

                    <button className="btn btn-success" type="submit">ENVIAR</button>
                    
                    
                </form>
               

                <div>

                </div>
            </div>

        </main>

    )
 
}