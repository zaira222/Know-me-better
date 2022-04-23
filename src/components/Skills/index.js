import React, {useState} from 'react';

const  Skills = ({category}) => {
    const [resume] = useState([
        {
            name: 'Front-End Profiencies',
            category: 'html',
        }
    ]);
    
    const currentResumes = resume.filter(resume => resume.category === category);

    return (
        <div>
            {currentResumes.map((category, description) => (
                ({category})
             ({description})
      
            
            ))}
        </div>
     
    )
}

export default Skills;