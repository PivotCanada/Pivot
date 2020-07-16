// import { useState, createContext } from "react";

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

import { useState, createContext } from "react";

export const ModalContext = createContext(null);

export const ModalStore = ({ initializeUser = () => {}, children }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("5ef298230ba02e0017851005");

  return (
    <ModalContext.Provider
      value={{
        initializeUser,
        open,
        setOpen,
        id,
        setId,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
