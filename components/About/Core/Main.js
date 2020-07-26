import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

// Components

import TextBlock from "../../UI/Content/TextBlock";
// Contexts
import { ModalContext } from "../../../contexts/ModalContext";
// Hooks
import useLanguage from "../../../hooks/useLanguage";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    minWidth: "100vw",
    margin: 0,
    marginTop: 20,
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
  const { keys, truthy, changeLanguage } = useLanguage({
    mssiHeader: {
      english: "The McGill Sustainability Systems Initiative",
      french: "Initiative des systèmes durables de McGill",
    },
    nfbHeader: {
      english: "The National Film Board of Canada",
      french: "L'Office national du film du Canada",
    },
    mssi: {
      english:
        "The McGill Sustainability Systems Initiative brings together experts from across McGill’s faculties to build a robust and vibrant community of committed sustainability researchers. Taking a multi-disciplinary, multi-sector approach, the MSSI provides support for McGill researchers from the sciences and humanities to co-develop significant, impactful and socially relevant advances that move society towards a sustainable model of existence",
      french:
        "L’Initiative des systèmes de durabilité de McGill rassemble des experts de toutes les facultés de McGill pour bâtir une communauté solide et dynamique de chercheurs engagés en durabilité. Adoptant une approche multidisciplinaire et multisectorielle, le MSSI soutient les chercheurs mcgillois des sciences et des sciences humaines pour co-développer des avancées significatives, percutantes et socialement pertinentes qui mènent la société vers un modèle d'existence durable",
    },
    nfb: {
      english:
        "The National Film Board of Canada (or simply National Film Board or NFB) (French: Office national du film du Canada, or ONF) is Canada's public film and digital media producer and distributor",
      french:
        "L'Office national du film du Canada (ou simplement l'Office national du film ou ONF) est le producteur et distributeur public de films et de médias numériques du Canada",
    },
    sub: {
      english: "Who Are We",
      french: "Qui Sommes Nous",
    },
  });

  return (
    <div className={classes.wrapper}>
      <TextBlock
        header={keys.mssiHeader}
        subheader={keys.sub}
        text={keys.mssi}
      />
      <TextBlock header={keys.nfbHeader} text={keys.nfb} />
    </div>
  );
};

export default Main;
