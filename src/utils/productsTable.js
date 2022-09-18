export const addProductInput = (arr, newState, ReplaceIndex) => {
  arr.push({
    title: "",
    handle: "",
    variants: [],
    id: new Date().getTime(),
  });
};
