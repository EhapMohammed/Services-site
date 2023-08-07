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

//calendar-settings-toggler

const calendarSettingsToggler = document.getElementsByClassName('calendar-settings-toggler')[0];
const calendarSettingsExtra = document.getElementsByClassName('sys-calendar-settings-extra')[0];

calendarSettingsToggler.addEventListener('click', function() {
  if (getComputedStyle(calendarSettingsExtra).display === "none") {
    calendarSettingsExtra.style.display = "flex";
  } else {
    calendarSettingsExtra.style.display = "none";
  }
});
