import RedesSociais from './redesSociais';
import Information from './information';
import Foto from '../img/sadira.png';
import curriculo from '../curriculo/Curriculo Sadira Antonielle (3).pdf';
import '../styles/components/start.css';

function Start() {
  return (
    <aside id='start'>
      <img src={Foto} alt='Sadira Oliveira' />
      <p id='profissao'>Desenvolvedora Web</p>
      <RedesSociais />
      <Information />
      <a
        href={curriculo}
        target='_black'
        className='btn'
      >
        Download Curriculo
      </a>
    </aside>
  )
}

export default Start;