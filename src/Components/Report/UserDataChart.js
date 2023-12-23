import React from 'react';
import { Bar } from 'react-chartjs-2';

const UserDataChart = ({ userData }) => {
  // Extracting suggestion counts for visualization
  const months = Object.keys(userData.suggestionCounts);
  const counts = Object.values(userData.suggestionCounts);

  // Chart data configuration
  const data = {
    labels: months,
    datasets: [
      {
        label: 'Suggestions Count',
        data: counts,
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for bars
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options configuration
  const options = {
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at 0
      },
    },
  };

  return (
    <div>
      <h2>User Data Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserDataChart;
