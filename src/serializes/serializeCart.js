export function serializeCart(data) {
    return data.map((el) => {
        return {
            id: el.id,
            title: el.title,
            price: el.price,
            image: el.image,
            qty: el.qty,
        }
    })
}