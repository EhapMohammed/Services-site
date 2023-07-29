const toggleSidebar = document.getElementById('sys-side-menu');

toggleSidebar.addEventListener('click', function() {
  if (toggleSidebar.classList.contains('side-menu-compact')) {
    toggleSidebar.classList.toggle('side-menu-full');
    toggleSidebar.classList.toggle('side-menu-compact');
  } else {
    toggleSidebar.classList.toggle('side-menu-compact');
    toggleSidebar.classList.toggle('side-menu-full');
  }
});
const toggleSidebarMop = document.getElementById('sys-mop-icon-menu'),
        sideBarClass = document.getElementById('sys-show-mobile-menu');

toggleSidebarMop.addEventListener('click', function() {
  if (sideBarClass.classList.contains('sys-show-mobile-menu')) {
    sideBarClass.classList.toggle('sys-show-mobile-menu');
  } else {
    sideBarClass.classList.toggle('sys-show-mobile-menu');
  }
});

const canvas = document.getElementById('chartDailyBookings');
const labels = canvas.dataset.chartLabels ? canvas.dataset.chartLabels.split(',') : [];
const values = canvas.dataset.chartValues ? canvas.dataset.chartValues.split(',').map(Number) : [];

// rest of the chart code goes here...

new Chart(canvas, {
  type: 'line',
  data: {
    labels: labels,
    // datasets: [{
    //   label: 'Daily Bookings',
    //   data: values,
    //   borderColor: 'blue',
    //   fill: false
    // }]
  },
  options: {
    responsive: true,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        ticks: {
          callback: function(value, index, values) {
            // Convert label value to day number and month name
            const date = new Date(value);
            const monthName = date.toLocaleString('default', { month: 'short' });
            return `${date.getDate()} ${monthName}`;
          }
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        }
      }]
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          // Get label value for this tooltip item
          const label = data.labels[tooltipItem[0].index];
          // Convert label value to day number and month name
          const date = new Date(label);
          const monthName = date.toLocaleString('default', { month: 'long' });
          return `${date.getDate()} ${monthName}`;
        },
        label: function(tooltipItem, data) {
          // Get data value for this tooltip item
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return `Bookings: ${value}`;
        }
      }
    }
  }
});