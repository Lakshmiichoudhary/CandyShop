import CartIcon from "../Cart/Carticon";

const CartButton = ({ onClick, cartItemCount }) => {
    return (
      <button onClick={onClick}>
        <CartIcon />
        <span className="mx-1">Cart</span>
        <span className="mx-1">{cartItemCount}</span>
      </button>
    )
}

export default CartButton