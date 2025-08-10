function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.innerHTML = "<p class='error'>❌ Please select a valid date of birth.</p>";
    return;
  }

  const dob = new Date(dobInput);
  const now = new Date();

  if (dob > now) {
    result.innerHTML = "<p class='error'>❌ Date of birth cannot be in the future.</p>";
    return;
  }

  // Calculate time difference
  const ageInMilliseconds = now - dob;
  const ageDate = new Date(ageInMilliseconds);

  let years = now.getFullYear() - dob.getFullYear();
  let months = now.getMonth() - dob.getMonth();
  let days = now.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
  const totalHours = Math.floor(ageInMilliseconds / (1000 * 60 * 60));
  const totalMinutes = Math.floor(ageInMilliseconds / (1000 * 60));
  const totalSeconds = Math.floor(ageInMilliseconds / 1000);

  const thisYearBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
  let nextBirthday = thisYearBirthday > now ? thisYearBirthday : new Date(now.getFullYear() + 1, dob.getMonth(), dob.getDate());
  const daysUntilBirthday = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));

  const isBirthday = dob.getDate() === now.getDate() && dob.getMonth() === now.getMonth();

  result.innerHTML = `
    <p>🎉 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.</p>
    <p>🕰 You've lived for <strong>${totalDays}</strong> days, <strong>${totalHours}</strong> hours, <strong>${totalMinutes}</strong> minutes, and <strong>${totalSeconds}</strong> seconds.</p>
    ${isBirthday ? `<p class="birthday">🎂 Happy Birthday!</p>` : `<p>📆 Your next birthday is in <strong>${daysUntilBirthday}</strong> day(s).</p>`}
  `;
}
