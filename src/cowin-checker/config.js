const { available, covishield, above18, dose1, covaxin } = require("./filters");

const config = {
  locations: [
    {
      type: "district",
      districtId: 296,
      title: "Trivandrum - Mathew, Jisha miss, Anne",
      filters: [available, dose1, covishield],
    },
    {
      type: "district",
      districtId: 380,
      title: "Nagpur - Shraddha",
      filters: [available, covaxin, above18],
    },
  ],
};

export default config;
