import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [categories] = useState([
    {
        name: "portfolio",
        description: 'my work',

    },

  ]);   
   const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
    
      ></Nav>
    <main>
 
      {!contactSelected ? (
        <>
        <Portfolio currentCategory={currentCategory}></Portfolio>  
         <Resume currentCategory={currentCategory}></Resume>  

        <About currentCategory={currentCategory}></About>  
        </>
      ) : (
      
      <ContactMe></ContactMe> 
      )}
    </main>
    </div>
  );

}

export default App;
