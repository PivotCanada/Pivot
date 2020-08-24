import { useEffect, useContext, useState } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components

// Utils

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",

    width: "60%",
    marginTop: 50,
    marginBottom: 50,
  },
  header: {
    fontFamily: "Poppins, sans serif",
    letterSpacing: 2,
    fontSize: 36,
  },
  subHeader: {
    fontFamily: "Poppins, sans serif",
    letterSpacing: 2,
    fontSize: 26,
    fontWeight: 400,
  },
  text: {
    fontFamily: "Lora, serif",
    fontSize: 22,
    maxWidth: 2000,
    lineHeight: "200%",
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.header}>What is Pivot?</h1>
      <p className={classes.text}>
        PIVOT is an action-research project conceived by researchers from McGill
        University (McGill) and the National Film Board of Canada (NFB). It
        amplifies the voices of small business owners across Canada as they
        transition to the low-carbon economy.
      </p>
      <p className={classes.text}>
        PIVOT harnesses the power of stories to document—online and in
        real-time—the growing movement of SMEs (small- and medium-size
        enterprises) that are future-proofing their businesses and setting
        themselves up for success in a changing world. It provides a space for
        SME leaders to tell stories about future-proofing their businesses,
        share their achievements, challenges, motivations, goals and desires,
        and support and inspire each other.
      </p>
      <p className={classes.text}>
        PIVOT’s goal is to use social networks and peer support to accelerate
        the large-scale adoption of sustainable business practices throughout
        Canada.
      </p>
      <h1 className={classes.header}>Research Objectives</h1>
      <ul>
        <p className={classes.text}>
          1. What kinds of narratives lead to the highest levels of engagement
          and/or action by SMEs?
        </p>
        <p className={classes.text}>
          2. How do features of the medium (i.e., the platform on which content
          will be shared, including the provision and presentation of
          information on it) influence engagement and/or action by SMEs?
        </p>
        <p className={classes.text}>
          3. What roles do particular actors/audiences/communities play in
          influencing SMEs to engage in climate action?
        </p>
      </ul>
      <h1 className={classes.header}>Team</h1>
      <h2 className={classes.subHeader}>McGill University</h2>
      <p className={classes.text}>
        Dror Etzion is lead researcher for PIVOT. He is an Associate Professor
        at the Desautels Faculty of Management at McGill University in Montreal.
        He teaches several courses on business and sustainability and in
        parallel conducts research on the role of inclusive efforts to promote
        sustainability transitions.
      </p>
      <p className={classes.text}>
        Catherine Potvin is co-lead researcher for PIVOT. She is a Professor in
        the Department of Biology at McGill University and Canada Research Chair
        in Climate Change Mitigation and Tropical Forests (Tier 1). She studies
        issues related to global climate change and has worked with the
        Indigenous Emberá people of Panama since 1994, developing participatory
        approaches to integrate the human dimension into biological analysis.
      </p>
      <p className={classes.text}>
        Jérôme Waldispühl is an Associate Professor at the School of Computer
        Science at McGill University, where he conducts research in
        computational biology. He is an expert in RNA structural bioinformatics
        and cheminformatics, and a pioneer of human-computing technologies in
        genomics. He is an advocate of open-source software and citizen science
        with the deployment of several scientific video games. His core
        expertise resides in algorithm design and software development for
        biology.
      </p>
      <p className={classes.text}>
        Andrew Piper is Professor and William Dawson Scholar in the Department
        of Languages, Literatures, and Cultures at McGill University. His work
        focuses on using the tools of data science, machine learning, and
        natural language processing to study literature and culture. He is the
        director of .txtLAB, a laboratory for cultural analytics and editor of
        the Journal of Cultural Analytics.
      </p>
      <p className={classes.text}>
        Madeleine Gauthier is a graduate student in the Biology Department at
        McGill University. She is studying the resilience of SMEs’ environmental
        values in times of crisis. She is interested in participatory science
        and wishes to develop tools to democratize science.
      </p>
      <p className={classes.text}>
        Divya Sharma is Administrator-Researcher for PIVOT. She is a Research
        Assistant in the Neotropical Ecology Lab at McGill University. She
        completed her Master’s in the Neotropical Ecology Lab, where she studied
        social-ecological landscapes development, using deforestation in an
        Indigenous Emberá community of Panama as a case study.
      </p>
      <h2 className={classes.subHeader}>National Film Board of Canada</h2>
      <p className={classes.text}>
        Véronique Tessier is Production Coordinator for PIVOT. With a Bachelor’s
        in Communication, Véronique has accumulated more than 15 years of
        experience in media content production, whether for television, cinema,
        events or the web. She recently joined the NFB’s Interactive Studio.
      </p>
      <p className={classes.text}>
        Vali Fugulin is Chief Editor for PIVOT. She has been a director for more
        than 15 years. She is currently creating in situ online interactive
        experiences and virtual exhibits, most notably with the Cinématheque
        québécoise and GSM Project. Her recent projects include the interactive
        knitting project Supersymmetry, the youth series Tout garni and the game
        Le facteur de l’espace. While at the NFB’s Interactive Studio, she
        designed and directed J’aime les patates (NUMIX 2016 Grand Prix), and
        co-created Toi, moi et la Charte.
      </p>
      <p className={classes.text}>
        Laurence Dolbec is currently the Head of Production and Studio (French
        Interactive Studio) at the National Film Board of Canada. She has more
        than a decade of experience working in production, notably for some of
        Quebec’s most creative institutions including Place des Arts, TOHU and
        C2 Montréal. Laurence started her career in New York City working for
        Livestream, which is now part of Vimeo.
      </p>
      <p className={classes.text}>
        Louis-Richard Tremblay is Executive Producer for PIVOT. Trained in
        political science, he drifted into architecture and radio before
        immersing himself in the interactive world at Radio-Canada and the NFB,
        where he acts as Executive Producer at the Interactive Studio. His
        productions have garnered numerous local and international awards
        (Online Journalism Award, Award of Excellence from The Society of New
        Design, Gémeaux, Webby and Peabody). His most recent projects include
        The Unknown Photographer, Do Not Track, In Limbo, Fort McMoney: The
        Movie and McLaren Wall to Wall, a tribute to Norman McLaren.
      </p>
      <h2 className={classes.subHeader}>Sounding Board</h2>
      <p className={classes.text}>
        Bill Spenceley, President/Owner, Flexahopper, AB
      </p>
      <p className={classes.text}>
        AB Gabriella Gerbasi, Director of Marketing, Waterax, QC
      </p>
      <p className={classes.text}>
        Jeff Herlick, President & CEO, Bonafide Carpentry, MB
      </p>
      <p className={classes.text}>
        Lil MacPherson, President & Co-Owner, The Wooden Monkey, NS
      </p>
      <p className={classes.text}>
        Suzanne Siemens, Co-Founder & CEO, Aisle, BC
      </p>
      <p className={classes.text}>
        Tarek Hussein, Founder, President & CEO, Weller Pharmacy, ON
      </p>
    </div>
  );
};

export default Main;
