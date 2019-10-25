
import React from 'react';
import Card from 'react-bootstrap/Card'
import './queso.css'
import Draggable, {DraggableCore} from 'react-draggable';

console.log("render");

    const choices = [
      { name: 'Mexican Village - standard queso', position: 1 },
      { name: 'Apple bees - taco topped queso', position: 2 },
      { name: 'Mexican Village - Queso with taco meat', position: 3 },
      { name: 'Paradisios - queso trio', position: 4 },
      { name: 'Buffalo Wild Wings - Queso', position: 5 },
      { name: 'Chiles - Queso', position: 6 },
    ]

    const queso = ({ quesos }) => {
      return (
        <div>
          {choices.map(choice =>
            <p>
            <Draggable
            axis="y"
            grid={[125, 125]}>
              <div className="divSize">
                <Card>
                  #{choice.position}. {choice.name}
                </Card>
                  <div class="drip-1"></div>
                  <div class="drip-2"></div>
                  <div class="drip-3"></div>
             </div>
             </Draggable>
            </p>
          )}
        </div>
      )
    };

    export default queso;
