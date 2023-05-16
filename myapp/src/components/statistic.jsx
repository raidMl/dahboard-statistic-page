import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './statistics.css'
import employer from './../img/person-svgrepo-com.svg'
import student from './../img/student-person-part-2-svgrepo-com.svg'
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
        <div className='itemx'  > <img src={student} alt="" /><h3>50</h3> <p>student</p>    </div>
        <div className='itemx'  > <img src={employer} alt="" /> <h3>3000</h3> <p>teacher</p>    </div>
        <div className='itemx'  ><img src={employer} alt="" />  <h3>60</h3> <p>employer</p>     </div>

        </div> 
        <Doughnut data={data}  />    
        </div>
    );
}

export default Statistic;
