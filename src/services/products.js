export const getProducts = async (search, page) => {
  let res = await fetch(
    `https://stageapibc.monkcommerce.app/admin/shop/product?search=${search}&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return res.json();
};
