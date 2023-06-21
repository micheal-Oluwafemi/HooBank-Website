import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
      <h2 className="text-white text-[40px] sm:text-[50px] font-semibold leading-[48px]">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>

      <p className={`${styles.paragraph} leading-[22px] my-5 max-w-[470px]`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ipsam
        animi fugit? Ab eligendi, deserunt consequatur deleniti, nostrum dicta
        asperiores enim saepe, sit sint{' '}
      </p>

      <div>
        <Button />
      </div>
    </div>

    <div className={`${layout.sectionImg} ${styles.paddingX}`}>
      <img src={card} width="" alt="card" className="sd:w-[75%] lg:w-fit" />
    </div>
  </section>
);

export default CardDeal;
