import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [categories] = useState([
    {
      name: "About",
      description: 'Hello, my name is Zaira. I am currently in the MSU Coding Bootcamp. I have done a couple of projects that I will demonstrate below with links. I have used HTML, CSS, and JavaScript. I am still in the process of learning more programs to be able to work with a variety. I have done three projects so far. Run Buddy is a website that I made for customers to be able to reach out to the trainers from Run Buddy. Guest Engagement is another project where it tries to reach out to as many customers as possible. My final project that I worked with  HTML and JavaScript to build a game called Robot Gladiators. The most recent project I worked on was a collaborative project which we created a website to that uses user input to search any topic that the guest wants. The guest will either choose a video tab or article tab and results will appear according to the guests selections.',

  },
  {
    name: "Resume",
    description: 'skills'
  },

  
    
    {
        name: "portfolio",
        description: 'my work',

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
                      <Skills currentCategory={currentCategory}></Skills>

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
         
  





