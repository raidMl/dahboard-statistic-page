import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './statistics.css'
ChartJS.register(ArcElement, Tooltip, Legend);



const Statistic = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
      
    
    return (

        <div>
                    <div className='items'>
        <div className='itemx'  > <img src="" alt="" />  student  </div>
        <div className='itemx'  > <img src="" alt="" />  teacher  </div>
        <div className='itemx'  ><img src="" alt="" />  employer   </div>

        </div> 
        <Doughnut data={data}  />    
        </div>
    );
}

export default Statistic;
