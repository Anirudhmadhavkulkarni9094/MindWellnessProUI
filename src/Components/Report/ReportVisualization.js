import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; // Import CategoryScale

Chart.register(CategoryScale); // Register the scale

const ReportVisualization = ({ReportData}) => {
  const chartRef = useRef(null);

  const dataSet = ReportData.sentiments_scores.map(item=>  item.score*100)
  
  const labelSet = ReportData.sentiments_scores.map(item=>  item.label)
  
console.log(ReportData)
  const data = {
    labels: labelSet, // Replace with your actual data labels
    datasets: [
      {
        label: 'Popularity of colours',
        data: dataSet, // Replace with your actual data values
        backgroundColor: [
          'rgba(196, 69, 105, 0.6)',
          'rgba(40, 167, 69, 0.6)',
          'rgba(173, 216, 230, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'POS = "POSITIVTIY", NEG = "NEGATIVITY", NEU = "NEUTRAL" ',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentage',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'User data',
      },
      legend: {
        display: false,
      },
    },
  };

  useEffect(() => {
    const chartInstance = new Chart(chartRef.current, {
      type: 'bar', // Specify chart type explicitly
      data,
      options,
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  });

  return (
    <div className="chart-container m-5 mx-20">
    
      <canvas id="myChart" ref={chartRef} /> {/* Use a unique canvas ID */}
    </div>
  );
};

export default ReportVisualization;
