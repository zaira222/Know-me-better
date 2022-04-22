import React from 'react';
import Project  from '../project';

function Portfolio({currentCategory}) {
    const { name, description } = currentCategory;

    return (
     <section>
         <h1 data-testid="h1tag">{(name)}</h1>
         <p>{description}</p>
         <Project category={currentCategory.name} />
     </section>

    );
}

export default Portfolio;