export const productCount = (arr) => {
  return arr
    .map(
      (d, i) =>
        d.variants.filter((d1) => {
          return d1.isSelected;
        }).length
    )
    .filter((d, i) => {
      return d > 0;
    }).length;
};
export const handleVarientClick = (arr, parentIndex, e) => {
  if (arr[parentIndex].variants[e.target.value].isSelected) {
    arr[parentIndex].variants[e.target.value].isSelected = false;
  } else {
    arr[parentIndex].variants[e.target.value].isSelected = true;
  }
};

export const handleProductClick = (arr, parentIndex, data) => {
  if (
    data.variants.length ===
    data.variants.filter((d, i) => {
      return d.isSelected;
    }).length
  ) {
    arr[parentIndex].variants = data.variants.map((d, i) => {
      return { ...d, isSelected: false };
    });
  } else {
    arr[parentIndex].variants = data.variants.map((d, i) => {
      return { ...d, isSelected: true };
    });
  }
};

export const addProducts = (arr, newState, ReplaceIndex) => {
  if (
    arr.reduce((int, d) => {
      return (
        int +
        d.variants.filter((d1) => {
          return d1.isSelected;
        }).length
      );
    }, 0) > 0
  ) {
    newState.splice(
      ReplaceIndex,
      1,
      ...arr
        .map((d, i) => {
          return {
            ...d,

            variants: d.variants.filter((d1) => {
              return d1.isSelected;
            }),
          };
        })
        .filter((d, i) => {
          return d.variants.length > 0;
        })
    );
  }
};

export const handleIndeterminate = (data) => {
  if (
    data.variants.filter((d, i) => {
      return d.isSelected;
    }).length > 0 &&
    data.variants.length !==
      data.variants.filter((d, i) => {
        return d.isSelected;
      }).length
  ) {
    return true;
  } else {
    return false;
  }
};
export const handleChecked = (data) => {
  if (
    data.variants.length ===
    data.variants.filter((d, i) => {
      return d.isSelected;
    }).length
  ) {
    return true;
  } else {
    return false;
  }
};
