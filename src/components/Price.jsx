import './Price.scss';
function Price(props) {
    return (
    <div className="price">
        <p>${props.summ || 0}</p>
        <button onClick={props.open}>Checkout</button>
    </div>
  );
}
  
  export default Price;