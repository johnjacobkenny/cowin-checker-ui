import { useEffect, useState } from "react";
import * as cowin from "cowin-api-wrapper";
import { listAvailableSlots } from "./cowin-checker";
import { available } from "./cowin-checker/filters";

function CowinResponse({ data }) {
  const [response, setResponse] = useState("");

  useEffect(() => {
    (async () => {
      if (data === "") return;
      const inputs = data.split(",").map((it) => parseInt(it));
      inputs.forEach(async (it) => {
        let response;
        if (it > 999) {
          response = await cowin.findAppointmentsByPin(it);
        } else {
          response = await cowin.findAppointmentsByDistrict(it);
        }
        // const { error } = checkResponseForErrors(response);
        const res = listAvailableSlots(response.appointments, [available]);

        setResponse(res);
      });
    })();

    // split the data variable and get as an array of numbers
    // call the apis based on the data variable
  }, [data]);

  return <pre>{response}</pre>;
}

export default CowinResponse;
