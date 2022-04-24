import React from 'react';
import Project  from '../project';

function Portfolio({currentCategory}) {
    const { name, description, example1, example2, example3, example4, example5, example6, example7,
        example8, example9, example10, example11, example12, example13, href, src} = currentCategory;

    return (
     <section>
         <h1 data-testid="h1tag">{(name)}</h1>
         <h10>{description}</h10>
         <p>{example1}</p>
         <p>{example2}</p>
         <p>{example3}</p>
         <p>{example4}</p>
         <p>{example5}</p>
         <p>{example6}</p>

         <h10>{example7}</h10>
         <p>{example8}</p>
         <p>{example9}</p>
         <p>{example10}</p>
         <p>{example11}</p>
         <p>{example12}</p>
         <p>{example13}</p>
         <Project category={currentCategory.name} />
         <a href={href}>
             </a>
     </section>

    );
}

export default Portfolio;