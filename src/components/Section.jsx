import './Section.scss';
function Section() {

  const onClickButton = () => {
    alert(12345);
  }
    return (
      <div className="section">
        <button onClick={onClickButton}>Make Burger</button>
        <img width={520} height={502} src="./image/main-img-burger.png" alt="burger" />
      </div>
  );
}

export default Section;
