import './ScreenTwo.scss';
import ShowIngredients from './ShowIngredients';
import Summ from './Summ';

function ScreenTwo() {
    return (
      <div>
        <div className='constructor'>
        <div className="screen-two">
        <img width={480} height={380} src="./image/bg-burger.png" alt="bc-burger" />
        <div className="constructor">
          <div className="bun"><img width={380} height={70} src="./image/bun-ingredient.png" alt="bun-ingredient" /></div>
          <div className="salad"><img width={380} height={70} src="./image/saladHuge.png" alt="saladHuge" /></div>
        </div>
        </div>
          <Summ/>
        </div>
        <div>
          <ShowIngredients/>
        </div>
      </div>
  );
}

export default ScreenTwo;