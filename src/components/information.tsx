import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/information.css';

function Information () {
  return (
    <section id='information-container'>
    <section id='information'>
      <div>
        <AiFillPhone id='icon-phone' />
        <div>
          <h4>Celular</h4>
          <p>(35) 9.9929-4303</p>
        </div>
      </div>
      <div>
        <AiOutlineMail id='icon-email' />
        <div>
          <h4>E-mail</h4>
          <p>sadiraoliveira@gmail.com</p>
        </div>
      </div>
      <div>
        <AiFillEnvironment id='icon-cidade' />
        <div>
          <h4>Cidade</h4>
          <p>Piraju/SP</p>
        </div>
      </div>
    </section>
    </section>
  )
}

export default Information;