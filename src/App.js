import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const [categories] = useState([
    {
      name: "About",
      description: 'My name is Zaira Perez. I am currently enrolled in MSU coding bootcamp. I have learned various coding libraries and programs from both the front-end and back-end. During this time it has allowed me to further my education by working on projects throught the lessons. As well as challenges that ranged from having code to no code at all. With technology changes as time goes on I cant wait to learn more programs. ',
      src: 'https://www.bing.com/images/search?view=detailV2&ccid=Wzs6r1QB&id=4674571C41771789AA0EA8F9EB4D0BA0BA6E8958&thid=OIP.Wzs6r1QBO0PR26tPE25KoQHaH_&mediaurl=https%3a%2f%2fcdn5.vectorstock.com%2fi%2f1000x1000%2f72%2f74%2ffemale-avatar-profile-icon-round-woman-face-vector-18307274.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5b3b3aaf54013b43d1dbab4f136e4aa1%3frik%3dWIluuqALTev5qA%26pid%3dImgRaw%26r%3d0&exph=1080&expw=1000&q=avatar+profile+picture&simid=608035440904571780&FORM=IRPRST&ck=35D0CEAD7F55F5E1D6875D1D9418D64C&selectedIndex=7',


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
         
  





