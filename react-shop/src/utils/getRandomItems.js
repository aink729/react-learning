// src/utils/getRandomItems.js
export const getRandomItems = (array, count) => {
    return [...array]
      .filter(Boolean)
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  };