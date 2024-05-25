
import './App.css';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Plans from './Component/Plans/Plans';
import Reasons from './Component/Reasoans/Reasons';
import Email from './Component/email/Email';
import Program from './Component/program/Program';
import Testimonial from './Component/testimonial/Testimonial';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Program/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
      <Email/>
      <Footer/>
    </div>
  );
}

export default App;
