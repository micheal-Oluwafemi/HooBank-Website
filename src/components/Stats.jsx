import { stats } from '../constants';
import styles from '../style';

const Stats = () => (
  <section
    className={`${styles.flexCenter} mx-auto flex-row flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map((stat) => (
      <div
        key={stat.id}
        className="flex-1 flex justify-center items-center flex-row mx-auto"
      >
        <h4 className="font-poppins font-semibold xs:leading-[53px] text-white xs:text-[30px] leading-[43px] text-[30px]">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:leading-[40px] text-white xs:text-[18px] leading-[43px] text-[18px] ml-1">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
