import './RedesSociais.css';
import { AiFillInstagram } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'
const RedesSociais = () => {

    return (
        <>
            <div className='links'>
                <div>
                    <a href="https://www.instagram.com/apsigerlanesouza/?igshid=MzNlNGNkZWQ4Mg%3D%3D"> <AiFillInstagram /> <span>Instagram</span></a>
                   
                </div>

                <div>
                    <a href="https://api.whatsapp.com/send?phone=5582996670907&text=ol%C3%A1%2C%20quero%20agendar%20uma%20sess%C3%A3o%20de%20psicoterapia">  <BsWhatsapp/><span>Whatsapp</span> </a>
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/gerlane-souza-psi/"> <AiFillLinkedin/> <span>Linkedin</span></a>
                </div>

            </div>

            <p className='criado'>Criado por : <span> <i>Ronaldo Nascimento</i></span></p>
        </>
    )
}

export default RedesSociais;