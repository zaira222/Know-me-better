import React from 'react';
import Skills from '../Skills';


function Resume({currentCategory}) {
   
        const {category, description } = currentCategory;


    return (
        <section>
            
            <h1 id="resume">Resume:</h1>
            <h4>Front-End Profiencies</h4>
            ({category})
            <p>({description})</p>

            <h2>Back-end Profiencies</h2>
            <p>({description})</p>
            <Skills category={currentCategory.description} />

        </section>
    );
}

export default Resume;


