import About from './about';
import Interests from './interests';
import VolunteerMotivation from './volunteerMotivation';
import '../styles/components/mainPortfolio.css';

function MainPortfolio() {
  return (
    <main id='main-content'>
      <h2>Sadira Antonielle Vieira de Oliveira</h2>
      <br></br>
      <h4>Apresentação Pessoal</h4>
      <About />
      <Interests />
      <VolunteerMotivation />
    </main>
  );
}

export default MainPortfolio;