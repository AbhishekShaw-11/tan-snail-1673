import Navbar from "./Code/Navbar";

import AOS from 'aos';
import 'aos/dist/aos.css';  
function App() {
  AOS.init();
  AOS.refresh();
  
  return (
    <div >
    
      <Navbar/>
    </div>
  );
}

export default App;
