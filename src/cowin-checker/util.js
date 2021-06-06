function getNDates(n = 3) {
  const dates = [];
  for (let i = 1; i <= n; i++) {
    const date = new Date();
    dates.push(date.setDate(date.getDate() + i));
  }

  return dates.map((date) => new Date(date));
}

function prettyTitle(title, date) {
  let result = `${title} | ${new Date(date).toLocaleDateString()}\n`;
  const length = title.length;
  for (let i = 0; i < length; i++) result += "-";

  return result;
}

function prettyCenter({ name, fee, district_name }) {
  return `${district_name} | ${name} (Cost: ${fee})`;
}

function prettySession({
  vaccine,
  min_age_limit: age,
  available_capacity_dose1: dose1,
  available_capacity_dose2: dose2,
  date,
}) {
  return `${date}: ${vaccine} for age ${age}+. Dose 1: ${dose1}, Dose 2: ${dose2}`;
}

export { getNDates, prettyCenter, prettySession, prettyTitle };
