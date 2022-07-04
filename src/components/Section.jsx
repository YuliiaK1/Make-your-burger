import './Section.scss';
function Section(props) {
    return (
      <div className="section">
        <button onClick={props.onClickMake} style={{cursor: "pointer"}}>Make Burger</button>
        <img width={520} height={502} src="./image/main-img-burger.png" alt="burger" />
      </div>
  );
}

export default Section;
