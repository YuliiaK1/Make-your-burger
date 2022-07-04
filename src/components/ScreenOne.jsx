import './ScreenOne.scss';
import ShowIngredients from './ShowIngredients';

function ScreenOne() {
    return (
      <div>
        <div className="screen-one">
        <img width={480} height={380} src="./image/bg-burger.png" alt="bc-burger" />
        <div className="constructor">
          <div className="salad2"><img width={380} height={70} src="./image/saladHuge.png" alt="saladHuge" /></div>
          <div className="buntwo"><img width={380} height={70} src="./image/bun-ingredient.png" alt="bun-ingredient" /></div>
          <div className="bun"><img width={380} height={70} src="./image/bun-ingredient.png" alt="bun-ingredient" /></div>
          <div className="salad"><img width={380} height={70} src="./image/saladHuge.png" alt="saladHuge" /></div>
        </div>
        </div>
        <div>
          <ShowIngredients/>
        </div>
      </div>
  );
}

export default ScreenOne;