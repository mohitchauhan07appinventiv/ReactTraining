const obj = {
  cartItems: [
    {
      cartItemId: 1,
      cartItemSubtotal: {single:50, total:50},
      image: { src: "https://wwww.google.com" },
      itemId: "320",
      itemWebUrl: "https://wwww.google.com",
      price: { offerPrice: 50, mrp: 100 },
      quantity: 1,
      title: "Real Fruit Juice",
    },
    {
      cartItemId: 2,
      cartItemSubtotal: {single:30000, total:60000},
      image: { src: "https://wwww.google.com" },
      itemId: "330",
      itemWebUrl: "https://wwww.google.com",
      price: { offerPrice: 30000, mrp: 45000 },
      quantity: 2,
      title: "Iphone 10",
    },
  ],
  cartSubtotal: {
    currency: "INR",
    value: 60050,
  },
  cartWebUrl: "https://www.google.com",
  unavailableCartItems: [
    {
      cartItemId: 3,
      cartItemSubtotal: {single:1500, total:1500},
      image: {src:'https://www.google.com'},
      itemId: "350",
      itemWebUrl: "https://www.google.com",
      price: {offerPrice:1500, mrp:2000},
      quantity: 0,
      title: "Boat Earphones",
    },
  ],
  warnings: [
    {
      category: "",
      domain: "",
      errorId: 0,
      inputRefIds: [null],
      longMessage: "",
      message: "",
      outputRefIds: [null],
      parameters: [null],
      subdomain: "",
    },
  ],
};
export default obj;
