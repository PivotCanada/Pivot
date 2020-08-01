// export const ModalContext = createContext(null);

// export const ModalStore = ({ children }) => {
//   const [showOnboard, setShowOnboard] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [showEdit, setShowEdit] = useState(false);
//   const [showDelete, setShowDelete] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [showCreate, setShowCreate] = useState(false);

//   return (
//     <ModalContext.Provider
//       value={{
//         showOnboard,
//         setShowOnboard,
//         showLogin,
//         setShowLogin,
//         showEdit,
//         setShowEdit,
//         showDelete,
//         setShowDelete,
//         showProfile,
//         setShowProfile,
//         showCreate,
//         setShowCreate,
//       }}
//     >
//       {children}
//     </ModalContext.Provider>
//   );
// };

import { useState, useEffect, createContext } from "react";

export const ModalContext = createContext(null);

export const ModalStore = ({ initializeUser = () => {}, children }) => {
  const [ids, setIds] = useState([]);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(true);

  const getIndex = async (id) => {
    const i = ids.indexOf(id);

    setIndex(i);
    setNext(i !== ids.length - 1);
    setPrevious(i !== 0);
  };

  const nextUser = () => {
    const i = ids.indexOf(id);
    const next = ids[i + 1];
    setId(next);
  };

  const previousUser = () => {
    const i = ids.indexOf(id);
    const prev = ids[i - 1];
    setId(prev);
  };

  useEffect(() => {
    console.log(id);
  }, [id]);

  useEffect(() => {
    getIndex(id);
  }, [id]);

  // useEffect(() => {
  //   // This needs to accomdate batches
  //   setId(ids[0]);
  // }, [ids]);

  return (
    <ModalContext.Provider
      value={{
        initializeUser,
        open,
        setOpen,
        id,
        setId,
        next,
        previous,
        nextUser,
        previousUser,
        ids,
        setIds,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
