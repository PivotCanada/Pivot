import { useState, createContext } from "react";

export const CarouselContext = createContext(null);

export const CarouselStore = ({ children, direction, elements }) => {
  const [index, setIndex] = useState(0);

  const lastElement = () => {
    console.log(index);
    console.log(elements);
    return index === elements - 1;
  };

  const mod = (n, m) => ((n % m) + m) % m;

  const changeSlide = (n) => setIndex((i) => mod(i + n, elements));

  return (
    <CarouselContext.Provider
      value={{
        index,
        direction,
        setIndex,
        changeSlide,
        elements,
        lastElement,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};
