document.getElementById('lifeForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user input
    const dob = new Date(document.getElementById('dob').value);
    const countryLifeExpectancy = parseInt(document.getElementById('country').value);
  
    // Current date
    const currentDate = new Date();
  
    // Calculate age
    const ageInMilliseconds = currentDate - dob;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  
    // Calculate remaining life
    const remainingYears = countryLifeExpectancy - ageInYears;
    const remainingMonths = remainingYears * 12;
    const remainingWeeks = remainingYears * 52;
    const remainingDays = remainingYears * 365;
    const remainingHours = remainingDays * 24;
    const remainingMinutes = remainingHours * 60;
  
    // Display results
    document.getElementById('months').textContent = Math.floor(remainingMonths);
    document.getElementById('weeks').textContent = Math.floor(remainingWeeks);
    document.getElementById('days').textContent = Math.floor(remainingDays);
    document.getElementById('hours').textContent = Math.floor(remainingHours);
    document.getElementById('minutes').textContent = Math.floor(remainingMinutes);
  
    // Countdown timer for seconds
    function updateCountdown() {
      // Recalculate remaining time every second
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - dob;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      const remainingYears = countryLifeExpectancy - ageInYears;
      const remainingSeconds = Math.floor(remainingYears * 365 * 24 * 60 * 60);
  
      // Update the seconds display
      document.getElementById('seconds').textContent = remainingSeconds;
  
      // Update every second
      setTimeout(updateCountdown, 1000);
    }
  
    // Start the countdown
    updateCountdown();
  
    // Show results section
    document.getElementById('results').classList.remove('hidden');
  });
  
  // Hide results when the form is reset
  document.getElementById('lifeForm').addEventListener('reset', function () {
    document.getElementById('results').classList.add('hidden');
  });