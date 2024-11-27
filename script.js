function updateDateTime() {
  const now = new Date();
  const timeElement = document.getElementById('current-time');
  const utcTimeElement = document.getElementById('utc-time');
  const dateElement = document.getElementById('current-date');
  const timezoneElement = document.getElementById('timezone');
  
  // Format WIB time
  timeElement.textContent = now.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  // Format UTC time
  utcTimeElement.textContent = now.toLocaleTimeString('id-ID', {
    timeZone: 'UTC',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  // Format date and timezone separately
  const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('id-ID', dateOptions).toUpperCase();
  timezoneElement.textContent = 'STANDAR WAKTU INDONESIA';
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call
