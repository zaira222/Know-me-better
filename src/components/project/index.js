import React, {useState} from 'react';


const Project = ({category}) => {
    const [portfolio] = useState([
        {
            name: 'Note Taker',
            category: 'portfolio',
            description: 'It helps keep track of your ideas, plans, and class notes.'
        }
    ]);
    
    const currentPortfolios = portfolio.filter(portfolio => portfolio.category === category);

    return (
        <div>
            {currentPortfolios.map((image, i) => (
                <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name} 

                    />
            ))}

        </div>
    )
}

export default Project;