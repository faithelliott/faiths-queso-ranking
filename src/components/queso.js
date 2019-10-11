
import React from 'react';
import Card from 'react-bootstrap/Card'
import './queso.css'
import Draggable, {DraggableCore} from 'react-draggable';

console.log("render");



    const queso = ({ quesos }) => {
      return (
     
       <div>
          <p>
          <Draggable>
            <div>
              <Card>
                  #1.Mexican Village - standard queso
              </Card>
                <div class="drip-1"></div>
                <div class="drip-2"></div>
                <div class="drip-3"></div>
           </div>
           </Draggable>
          </p>
          <p>
          <Draggable>
            <div>
              <Card>
                  #2.Apple bees - taco topped queso
              </Card>
                <div class="drip-1"></div>
                <div class="drip-2"></div>
                <div class="drip-3"></div>
                </div>
           </Draggable>
          </p> 
          <p>
          <Draggable>
            <div>
              <Card>
                  #3.Mexican Village - Queso with taco meat
              </Card>
                <div class="drip-1"></div>
                <div class="drip-2"></div>
                <div class="drip-3"></div>
                </div>
           </Draggable>
          </p> 
          <p>
          <Draggable>
            <div>
              <Card>
                  #4.Paradisios - queso trio
 
              </Card>
                <div class="drip-1"></div>
                <div class="drip-2"></div>
                <div class="drip-3"></div>
                </div>
           </Draggable>
          </p> 
          <p>
          <Draggable>
            <div>
              <Card>
                  #5.Buffalo Wild Wings - Queso 
              </Card>
                <div class="drip-1"></div>
                <div class="drip-2"></div>
                <div class="drip-3"></div>
                </div>
           </Draggable>
          </p> 
          <p>
          <Draggable>
            <div>
              <Card>
                  #6.Chiles - Queso 
                
              </Card>
                <div class="drip-1"></div>
                <div class="drip-2"></div>
                <div class="drip-3"></div>
                </div>
           </Draggable>
          </p> 
        </div>
       
      )
    };
   
    export default queso;