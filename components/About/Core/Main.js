import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components

import TextBlock from "../../UI/Content/TextBlock";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    minWidth: "100vw",
    margin: 0,
    marginTop: 100,
    marginBottom: 50,
  },

  container: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
  },

  imageContainer: {
    display: "flex",
    width: "50%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 600,
    objectFit: "cover",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TextBlock
        header={"McGill Sustainable Systems Initiative"}
        subheader={"Who are we ?"}
        text={
          "The McGill Sustainability Systems Initiative brings together experts from across McGill’s faculties to build a robust and vibrant community of committed sustainability researchers. Taking a multi-disciplinary, multi-sector approach, the MSSI provides support for McGill researchers from the sciences and humanities to co-develop significant, impactful and socially relevant advances that move society towards a sustainable model of existence"
        }
      />
      <TextBlock
        header={"National Film Board of Canada"}
        text={
          "The National Film Board of Canada (or simply National Film Board or NFB) (French: Office national du film du Canada, or ONF) is Canada's public film and digital media producer and distributor"
        }
      />
    </div>
  );
};

export default Main;
