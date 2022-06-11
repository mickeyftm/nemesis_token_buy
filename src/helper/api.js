import axios from "axios";

// const LOCALSERVER = "https://api2.nemesisdownfall.com/api/"
const LOCALSERVER = "http://127.0.0.1:5000/api/";

export async function addUser(account,balance) {
  try{
    let url = `${LOCALSERVER}/add`;
    let res = await axios.post(url, {account,balance});
    return res;
  }catch(e) {
    console.log(e)
  }
}

export async function getUser(account) {
  try{
    let url = `${LOCALSERVER}/get`;
    let res = await axios.post(url, {account});
    return res;
  }catch(e) {
    console.log(e)
  }
}