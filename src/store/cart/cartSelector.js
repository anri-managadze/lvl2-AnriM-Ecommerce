export const selectCart=(state)=>state.cart.cart;
export const selectCounter=(state)=>state.counter.counter;
export const selectCartCookie = (name) => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop().split(';').shift()
}