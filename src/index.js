import { data } from './data.js';

function drawPieChart(id, data) {
  const ctx = document.getElementById(id);
  const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: data['labels'],
      datasets: [
        {
          data: data['percentage'],
          borderWidth: 0,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'top',
        onClick: () => {}, // クリックイベントを無効にする
      },
      plugins: {
        colorschemes: {
          scheme: 'brewer.SetTwo8',
        },
      },
    },
  });
}

function main() {
  const chartIds = [
    'directAndIndirectWorkChart',
    'directWorkChart',
    'roleChart',
    'programmingLanguageChart',
    'DBMSChart',
    'indirectChart',
  ];
  for (const chartId of chartIds) {
    drawPieChart(chartId, data[chartId]);
  }
}

main();
