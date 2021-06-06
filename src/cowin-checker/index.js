import * as cowin from "cowin-api-wrapper";
import { available } from "./filters";

const { prettyCenter, prettySession, getNDates } = require("./util");

async function getCowinData(pincodeOrDistrictId) {
  const dates = getNDates(5);

  const responses = await Promise.all(
    dates.map(async (date) => {
      let response;
      if (pincodeOrDistrictId > 999) {
        response = await cowin.findAppointmentsByPin(pincodeOrDistrictId, {
          date,
        });
      } else {
        response = await cowin.findAppointmentsByDistrict(pincodeOrDistrictId, {
          date,
        });
      }
      // const { error } = checkResponseForErrors(response);
      const res = listAvailableSlots(response.appointments, [available]);
      return res;
    })
  );

  return Promise.resolve(responses.join("\n"));
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

export { getCowinData };
