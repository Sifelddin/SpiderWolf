import { LocationOnOutlined } from "@mui/icons-material";
import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

import useStyles from "./styles";

import Climate from "../../../assets/icons/climate.svg";
import Cloud from "../../../assets/icons/cloud.svg";

export function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.MainWrapper}>
      <Typography fontSize={16} fontWeight={500} mt={10} color="text.secondary">
        Segunda Feira, Novembro
      </Typography>
      <Box className={classes.LocationWrapper} ml={-0.5}>
        <LocationOnOutlined />
        <Typography fontSize={22} fontWeight={600}>
          San Francisco
        </Typography>
      </Box>
      <Box className={classes.ClimateWrapper}>
        <div>
          <Cloud />
          <Box className={classes.BoxShadowClimate}></Box>
        </div>
        <div>
          <Climate />
          <Box className={classes.cloudShadow}></Box>
        </div>
        <div>
          <Cloud />
          <Box className={classes.cloud2Shadow}></Box>
        </div>
      </Box>
    </Box>
  );
}
