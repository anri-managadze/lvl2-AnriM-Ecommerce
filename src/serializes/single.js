export function serializeSingleProduct(el) {
  return {
    id: el.id,
    title: el.title,
    price: el.price,
    category: el.category,
    description: el.description,
    image: el.image,
    model: "\tShirt 5407X",
    Color: "Red",
    Delivery: "USA",
  };
}
