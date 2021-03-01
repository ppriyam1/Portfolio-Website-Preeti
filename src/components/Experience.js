import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainContainer: {
    background: "rgb(46, 44, 44)"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "0 auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #af2b73",//line
      right: "40px",
      top: 0
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both"
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto"
      }
    }
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #af2b73",//box border bottom
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute"
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#af2b73 #af2b73 transparent transparent", //arrow
      borderWidth: "0.625rem",
      transform: "rotate(45deg)"
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#af2b73"// rightsideline
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #af2b73 #af2b73"//
      }
    }
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    background: "#fff ", /* box */
    color: "#e9afcf",
    lineHeight: 1,
    padding: "0.5rem 0 1rem",
    "&:before": {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto"
      },
      "&:nth-of-type(2n):before": {
        display: "none"
      }
    }
  },
  heading: {
    color: "#af2b73",
    padding: "3rem 0",
    textTransform: "uppercase"
  },
  subHeading: {
    color: "#af2b73",//title sub heading
    padding: "0",
    textTransform: "uppercase"
  }
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <div id="experience">
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          work experience
        </Typography>
        <Box component="div" className={classes.timeLine}>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2019
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Test Architect
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "#ffbdd1" }}
            >
              Accenture Solutions Private Limited
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "#fff" }}
            >
              <p>Coordinated as Test architect with business teams to understand the application design and requirements, providing business case reviews and sign-offs, resulting in highest quality assurance.</p>
              <p>Managed time estimations, test case execution, deliverable progress metrics about the product, and conducted impact analysis to provide accurate cost estimate, thereby saving project budget cost.</p>
              <p>Led a QA team of six in a quarter for the products (Digital and Enterprise Sales Service), on the feature enhancements valued over in millions, resulting in successful deliveries on time as per the business requirement.</p>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2018
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
             Software Engineer
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "#ffbdd1" }}
            >
              Accenture Solutions Private Limited
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "#fff" }}
            >
             <p>Analyzed customer data and classified type and region of customers based on the offers they redeemed, it helped the business to forecast and improve the future offers and increase the customer satisfaction level by 18%.</p>
             <p>Enhanced performance of the existing stored procedures, joins, triggers & queries with proactive analysis which improved efficiency by 20%.</p>
             <p>Developed groovy scripts to automate SOAP and REST APIs, that significantly decreased the redundant testing effort by 30%.</p>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2017
          </Typography>
          <Box component="div" className={classes.timeLineItem}>
            <Typography
              variant="h5"
              aligh="center"
              className={classes.subHeading}
            >
              Associate Software Engineer
            </Typography>
            <Typography
              variant="body1"
              aligh="center"
              style={{ color: "#ffbdd1" }}
            >
              Accenture Solutions Private Limited
            </Typography>
            <Typography
              variant="subtitle1"
              aligh="center"
              style={{ color: "#fff" }}
            >
             <p>Conducted effective black-box testing of a Telecom internal product, to validate the status transactions in the production, resulting in a failure rate close to null in production.</p>
             <p>Created reports with statistical analysis of products to identify trends which resulted in making informed business decisions by client and management, helping in project management.</p>
            </Typography>
          </Box>
          <Typography
            variant="h2"
            className={`${classes.timeLineYear} ${classes.timeLineItem}`}
          >
            2016
          </Typography>       
        </Box>
      </Box>
    </div>
  );
};

export default Experience;