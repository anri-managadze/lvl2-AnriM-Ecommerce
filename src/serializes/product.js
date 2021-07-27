export function serializeProductList(data) {
  return data.map((el) => {
    return {
      title: el.title,
      price: el.price,
      image: el.image,
      id: el.id,
    };
  });
}
