import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LogoImg from "../assets/images/logo.png";

import { CustomButton } from "./components/CustomButton";
import { FormControl, Link, Select } from "@mui/material";

import { injected } from "./components/connector";
import { useWeb3React } from "@web3-react/core";
import {
  shortenAddress,
  switchBSCNetwork,
  switchPolygonNetwork,
} from "../helper";

const pages = [
  {
    name: "Whitepaper",
    url: "https://nemesisdownfall.com/whitepaper/",
  },
  { name: "Pitch Deck", url: "https://nemesisdownfall.com/pitchdeck/" },
];

const Header = () => {
  const { active, account, activate } = useWeb3React();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [network, setNetwork] = React.useState("polygon");

  const handleChange = async (event) => {
    setNetwork(event.target.value);
    if (event.target.value === "polygon") {
      try {
        switchPolygonNetwork();
        await activate(injected);
      } catch (ex) {
        console.log(ex);
      }
    }
    if (event.target.value === "bsc") {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      });
      // switchBSCNetwork();
      await activate(injected);
    }
  };

  const handleConnect = async () => {
    try {
      if (window.ethereum) {
        if (network === "polygon") {
          if (window.ethereum.networkVersion === "137") {
            await activate(injected);
          } else {
            switchPolygonNetwork();
            await activate(injected);
          }
        }
        if (network === "bsc") {
          if (window.ethereum.networkVersion === "1") {
            await activate(injected);
          } else {
            switchBSCNetwork();
            await activate(injected);
          }
        }
      } else {
        alert("Please install metamask");
      }
    } catch (exp) {
      console.log(exp);
    }
  };

  return (
    <AppBar position="static" sx={{ background: "#201854" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={LogoImg}
            alt="logo"
            width="120px"
            className="mt-1 logo__image"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img
            src={LogoImg}
            alt="logo"
            width="100px"
            className="mt-1 logo__mobile"
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link
                href={page.url}
                target="_blank"
                key={page.name}
                sx={{ textDecoration: "none" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box>
            <FormControl
              sx={{ m: 1, minWidth: 110 }}
              size="small"
              variant="outlined"
            >
              {/* <InputLabel
                id="select_network"
                sx={{ color: "white", outline: "white" }}
              >
                Network
              </InputLabel> */}
              <Select
                labelId="select_network"
                id="select_network"
                value={network}
                // label="Network"
                onChange={handleChange}
                defaultValue={"bsc"}
                sx={{ color: "white", borderColor: "red" }}
              >
                <MenuItem value={"bsc"}>Ethereum</MenuItem>
                <MenuItem value={"polygon"}>Polygon</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ flexGrow: 0, marginY: "auto" }}>
            {active ? (
              <Tooltip title="Connect Wallet">
                <CustomButton
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                  // onClick={handleConnect}
                >
                  {shortenAddress(account)}
                </CustomButton>
              </Tooltip>
            ) : (
              <Tooltip title="Connect Wallet">
                <CustomButton
                  sx={{
                    display: { xs: "none", md: "block" },
                  }}
                  onClick={handleConnect}
                >
                  Connect Wallet
                </CustomButton>
              </Tooltip>
            )}
          </Box>
          {/* {active && (
            <CustomButton onClick={handleDisconnect}>Deactivate</CustomButton>
          )} */}
          {/* <Box sx={{ flexGrow: 0, marginY: "auto" }}>
            <Tooltip title="Connect Wallet">
              <CustomButton
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                C
              </CustomButton>
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
