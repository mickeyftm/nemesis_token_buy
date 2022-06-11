import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { Container } from "@mui/system";
import HeroImg from "../assets/images/herobanner.png";
import Coin1 from "../assets/images/coin1.png";
import Coin from "../assets/images/coin.png";

import BuyInput from "../component/styledInput";
import { CustomButton } from "../component/components/CustomButton";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../component/components/connector";
import { getETHBalance } from "../helper";
import toast, { Toaster } from "react-hot-toast";
import { addUser, getUser } from "../helper/api";

export const Home = () => {
  const notifyError = () => toast.error("MetaMask error.");

  const toAddress = process.env.REACT_APP_ACCOUNT_ADDRESS;
  console.log("toAddress",toAddress)
  const { active, chainId, connector, library, activate, account } =
    useWeb3React();

  // eslint-disable-next-line
  const [balance, setBalance] = useState(0);


  useEffect(() => {
    const getData = async() => {
      const data = await getUser(account);
      console.log(data)
      if(data.data.errorMessage === "Not Found"){
        setNemesisInWallet("0.0000")
        return;
      }

      setNemesisInWallet(data.data.balance)
    }

    getData();
  },[account])

  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injected, undefined, true).catch(() => {
          activate(connector);
        });
      } else {
      }
    });
    getETHBalance(library, setBalance, account);
    setToken("");
    setNemesis("");
    // eslint-disable-next-line
  }, [chainId]);

  const [token, setToken] = useState("");
  const [amount, setAmount] = useState("");
  const [nemesis, setNemesis] = useState(0);
  const [nemesisInWallet, setNemesisInWallet] = useState("0.0000");


  const handleChange = (e) => {
    const { value } = e.target;
    setToken(value);
    if (chainId === 1) {
      const eth = value * 0.00056;
      const nemesis = eth / 0.00000287873;
      setAmount(eth.toFixed(4));
      setNemesis(nemesis.toFixed(4));
    }
    if (chainId === 137) {
      const matic = value * 1.543181;
      const nemesis = matic / 0.00812777;
      setAmount(matic.toFixed(4));
      setNemesis(nemesis.toFixed(4));
    }
  };

  const handleSubmit = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const tokenAmount = amount.toString();
      await signer.sendTransaction({
        to: toAddress,
        value: ethers.utils.parseEther(tokenAmount),
      });
      const balance = parseFloat(nemesis).toFixed(4);
      await addUser(account,balance)
    } catch (ex) {
      notifyError();
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={3} mb={6}>
        <Grid item xs={12} md={12}>
          <Card
            elevation={3}
            sx={{
              background: "linear-gradient(to left, #1A2B94, #914DCB)",
              borderRadius: "20px",
            }}
          >
            <CardContent>
              <div className="sm:p-1 lg:p-6 grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div className="col-span-2 text-white text-center text-xl lg:text-5xl text-yellow-400 font-bold my-auto">
                  Welcome to Nemesis Downfall
                  <div className="ml-0 lg:ml-10 text-xs lg:text-base text-white text-left">
                    Nemesis downfall is a first person shooter, play to earn
                    video game!
                  </div>
                </div>
                <div className="">
                  <img src={HeroImg} alt="img" className="w-60 float-right" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              backgroundColor: "#1F1851",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <img
              src={Coin1}
              alt="img"
              className="absolute top-2 right-2 w-32"
            />
            <CardContent>
              <form>
                <div className="sm:p-1 lg:p-6 flex flex-col gap-4">
                  <div className="text-yellow-500 text-4xl font-black">
                    Buy Nemesis
                  </div>
                  <div className="text-white text-sm">
                    Note: Pre Sale token will get release after Pre Sale ends
                  </div>
                  <div className="flex flex-col gap-8 my-4">
                    <BuyInput
                      name="token"
                      label="Dollars"
                      placeholder="Please enter your amount in dollars"
                      id="token"
                      onChange={handleChange}
                      value={token}
                      symbol="AVIVA"
                      input_title="Dollars"
                      maticAmount={amount}
                      showToken
                    />

                    <BuyInput
                      name="amount"
                      label="NEMESIS Token"
                      placeholder="0"
                      id="dollar"
                      onChange={handleChange}
                      value={nemesis}
                      input_title="Nemesis"
                      readOnly
                    />
                  </div>
                  <div>
                    <CustomButton
                      sx={{ width: "100%" }}
                      onClick={handleSubmit}
                      // onClick={() => console.log("ads")}
                      disabled={!active || token < 0.005}
                      disableElevation={!active}
                    >
                      BUY NEMESIS
                    </CustomButton>
                    <div className="text-white text-xs py-1">
                      *Minimum $0.005 you have to buy
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{
              backgroundColor: "#1F1851",
              borderRadius: "20px",
              position: "relative",
            }}
          >
            <img
              src={Coin1}
              alt="img"
              className="absolute top-2 right-2 w-32"
            />
            <CardContent>
              <div className="sm:p-1 lg:p-6 flex flex-col gap-4">
                <div className="text-yellow-500 text-4xl font-black">
                  Dashboard
                </div>
                <div className="text-white text-sm pb-1">
                  <img src={Coin} alt="coin" className="w-16" />
                </div>

                <div>
                  <div className="text-white">NEMESIS in wallet:</div>
                  <div className="text-yellow-400 font-black text-3xl">
                    {nemesisInWallet}
                  </div>
                </div>
                <div>
                  <div className="text-white">NEMESIS earn by referral:</div>
                  <div className="text-yellow-400 font-black text-3xl">
                    0.0000
                  </div>
                </div>
                <div>
                  <div className="text-white">NEMESIS to harvest:</div>
                  <div className="text-yellow-400 font-black text-3xl">
                    0.0000
                  </div>
                </div>
                <div className="h-16">
                  {/* <CustomButton sx={{ width: "100%" }}>
                    BUY NEMESIS
                  </CustomButton>
                  <div className="text-white text-xs py-1">
                    *Minimum $5 you have to buy
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Toaster />
    </Container>
  );
};
