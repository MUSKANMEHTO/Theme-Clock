function updateIndiaTime() {
  const indiaTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const date = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  document.getElementById("digital-clock").textContent = indiaTime;
  document.getElementById("digital-date").textContent = date;
}

setInterval(updateIndiaTime, 1000);
updateIndiaTime(); // Initial call
