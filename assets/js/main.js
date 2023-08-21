// side bar toggler
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

// user logout dropdown
$('#sys-top-user-info-w').on('click', function() {
  $('#sys-user-info-dropdown').toggleClass('d-block');
});
//calendar-settings-toggler


$('#calendar-settings-toggler').on('click', function() {
  $('#sys-calendar-settings-extra').toggleClass('d-flex');

});
//dashborad home screen chart 
const canvas = document.getElementById('chartDailyBookings');
const today = new Date();
const xValues = [];

for (let i = 0; i < today.getDate(); i++) {
  const date = new Date(today.getFullYear(), today.getMonth(), i + 1);
  const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  xValues.push(formattedDate);
}

new Chart(canvas, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      borderWidth: 1,
      data: false,
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          display: false
        }
      }]
    }
  }
});




$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});
