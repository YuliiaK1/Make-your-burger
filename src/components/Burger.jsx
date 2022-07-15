import './Burger.scss';

function Burger({items=[]}) {
    return (
      <div>
        <div className="burger">
          {items.map((obj)=> (
            <div key={obj.id}><img width={380} height={70} src={items} alt="/" /></div>
          ))}
        </div>
      </div>
  );
}

export default Burger;