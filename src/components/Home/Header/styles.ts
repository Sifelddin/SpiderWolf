import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  MainWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  LocationWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  ClimateWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    gap: 2,
  },
  BoxShadowClimate: {
    "&::before": {
      position: "absolute",
      content: "''",
      width: 200,
      left: 310,
      bottom: 30,
      zIndex: 7,
      boxShadow: "-73px 20px 20px 16px rgba(0,0,0,0.12)",
    },
  },
  cloudShadow: {
    "&::before": {
      position: "absolute",
      content: "''",
      width: 100,
      left: -100,
      bottom: 50,
      zIndex: 7,
      boxShadow: "-73px 20px 20px 16px rgba(0,0,0,0.06)",
    },
  },
  cloud2Shadow: {
    "&::before": {
      position: "absolute",
      content: "''",
      width: 70,
      right: 20,
      bottom: 50,
      zIndex: 7,
      boxShadow: "-73px 20px 20px 16px rgba(0,0,0,0.05)",
    },
  },
})) as any;

export default useStyles;
