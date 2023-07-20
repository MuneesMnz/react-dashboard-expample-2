import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YTUxM2MxMmRiOGY1NTQ1ZDhmNjc5ZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODkxNjA1NzgsImV4cCI6MTY4OTQxOTc3OH0.shdmjfpJa7op3AzdUhep_y03lijqTFnMdIaAC3ycMfs";
// const TOKEN=JSON.parse(JSON.parse( localStorage.getItem("persist:root")).currentUser).accessToken

console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
const TOKEN =JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
