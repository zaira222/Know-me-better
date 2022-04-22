import React, {useEffect} from 'react';



function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        setContactSelected2
        
        
    } = props;

    useEffect(() => {
        document.title = (currentCategory.name);
    }, [currentCategory]);
    return (
        <header>
            <h2> 
                 Zaira Perez
                 <a data-testid="link" href="/">

                  
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a data-testid="about"
                        href="#about" onClick={()  => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                   
                    <li className='mx-2'>
                        <a data-testid="resume"
                        href="#resume" onClick={() => setContactSelected2(false)}>
                        Resume
                        </a>
                    </li> 
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li 
                        className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} 
                        key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                                }}>
                                {category.name}
                            </span>

                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;