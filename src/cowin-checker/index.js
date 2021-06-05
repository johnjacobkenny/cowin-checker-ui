import * as cowin from "cowin-api-wrapper";
import config from "./config";

const { prettyCenter, prettySession, prettyTitle } = require("./util");

// async function main() {
//   const next3Dates = get3Dates();
//   await Promise.all(next3Dates.map(findAppointmentsForDate));
// }

async function findAppointmentsForDate(date) {
  const responses = await Promise.all(
    config.locations.map(async (loc) => {
      let response;

      if (loc.type === "pincode") {
        response = await cowin.findAppointmentsByPin(loc.pincode, { date });
      } else {
        response = await cowin.findAppointmentsByDistrict(loc.districtId, {
          date,
        });
      }

      const { error } = checkResponseForErrors(response);
      if (error) return { title: loc.title };

      return { data: response, title: loc.title, filters: loc.filters };
    })
  );

  responses.forEach(({ data, filters, title }) => {
    console.log(prettyTitle(title, date));
    if (data) listAvailableSlots(data.appointments, filters);
    console.log("\n");
  });
}

function listAvailableSlots(appointments, filters) {
  let response = "";
  appointments.forEach((center) => {
    let sessions = [...center.sessions];
    if (!sessions || sessions.length === 0) {
      response += `No sessions available at ${center.name}`;
      console.error(`No sessions available at ${center.name}`);
    } else {
      filters.forEach(
        (filterMethod) => (sessions = sessions.filter(filterMethod))
      );
      sessions.forEach((session) => {
        const _center = prettyCenter(center);
        const _session = prettySession(session);

        response += `${_session}\t${_center}\n`;
      });
    }
  });
  return response;
}

function checkResponseForErrors(response) {
  if (response.error) {
    return { error: response.error };
  }

  const { appointments } = response;

  if (!appointments || appointments.length === 0) {
    return { error: "No centres available" };
  }

  return { error: false };
}

export { checkResponseForErrors, listAvailableSlots };
