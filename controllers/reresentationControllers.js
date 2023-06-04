const representationModal = require("../modals/representationDataModal");

const axios = require("axios");

const saveDataFromApi = async (req, res) => {
  try {
    const url =
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";

    const response = await axios.get(url);

    const newData = new representationModal(response.data);

    await newData.save();

    return res
      .status(200)
      .json({
        status: true,
        data: newData,
        message: "data saved successfully!",
      });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  saveDataFromApi,
};
