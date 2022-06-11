import { styled } from "@mui/material/styles";
import { yellow } from "@mui/material/colors";
import Button from "@mui/material/Button";

export const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  padding: "8px 20px",
  "&:hover": {
    backgroundColor: yellow[700],
  },
  borderRadius: "10px",
}));
