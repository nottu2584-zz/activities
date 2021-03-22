import axios from "axios";

const API_URL = "./";

const getActivities = () => {
  return axios.get(API_URL + "mockUpActivities.json");
};

const setActivities = () => {
  return
};

const ActivityService = {
  getActivities,
  setActivities
};

export default ActivityService;
