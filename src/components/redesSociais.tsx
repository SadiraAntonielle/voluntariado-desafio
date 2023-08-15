import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';
import '../styles/components/redesSociais.css';

const redes = [
  { name: 'linkedin', icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sadiraantonielledev/' },
  { name: 'instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/sadira_antonielle/' },
  { name: 'github', icon: <FaGithub />, link: 'https://github.com/SadiraAntonielle' },
]

function RedesSociais () {
  return (
    <section id='redesSociais'>
      {redes.map((social) => (
        <a
          href={social.link}
          target='_blank'
          className='btn-rede-social'
          id={social.name}
          key={social.name}
        >
          {social.icon}
        </a>
      ))}
    </section>
  )
}

export default RedesSociais;