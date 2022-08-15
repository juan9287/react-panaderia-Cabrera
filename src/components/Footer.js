export const Footer = ()=>{
return(
    <footer className="footerApp">
        
        <nav className="footerAppNav container">
            <h3 className="">
                ©COPYRIGHT 2022
            </h3>
            <ul className="footerAppList">
                
                <li className="footerAppListItem">
                    <a href="https://www.instagram.com">
                        <img src="../Imagenes/instagram.png" alt="redImg" />
                    </a>
                </li>
                <li className="footerAppListItem">
                    <a href="https://www.facebook.com">
                        <img src="../Imagenes/facebook.png" alt="redImg" />
                    </a>
                </li>
                <li className="footerAppListItem">
                    <a href="https://www.whatsapp.com">
                        <img src="../Imagenes/whatsapp.png" alt="redImg" />
                    </a>
                </li>
                <li className="footerAppListItem">
                    <a href="https://www.telegram.com">
                        <img src="../Imagenes/telegrama.png" alt="redImg" />
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
)

}