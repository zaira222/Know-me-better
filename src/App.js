import React, {useState} from 'react';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const [categories] = useState([
    {
      name: "About",
      description: 'My name is Zaira Perez. I am currently enrolled in MSU coding bootcamp. I have learned various coding libraries and programs from both the front-end and back-end. During this time it has allowed me to further my education by working on projects throught the lessons. As well as challenges that ranged from having code to no code at all. With technology changes as time goes on I cant wait to learn more programs. ',


  },
  {
    name: "Resume",
    description: 'Front-End Profiencies',
    example1: 'HTML',
    example2: 'CSS',
    example3: 'JavaScript',
    example4: 'JQuery',
    example5: 'React',
    example6: 'Bootstrap',
    example7: 'Back-end Profiencies',
    example8: 'APIs',
    example9: 'Node',
    example10: 'Express',
    example11: 'MySQL',
    example12: 'MongoDB',
    example13: 'REST',
    example14: 'GraphQL'


  },

  
    
    {
        name: "portfolio",


    },
      





  ]);   
   const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <header>
      <Header></Header>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      </header>
    <main>
      {!contactSelected ? (
          <>
        <Portfolio currentCategory={currentCategory}></Portfolio>  
           

          </>

                         


      ) : (


      <ContactMe></ContactMe> 

      )}

    </main>
    <footer>
       <Footer></Footer>
    </footer>
    </div>
  );

}

export default App;
         
  





