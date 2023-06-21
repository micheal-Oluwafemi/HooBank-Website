import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className="feature-card p-6 flex flex-row rounded-[24px]">
    <img src={icon} alt="icons" className="rounded-full p-[px] " />
    <div className="w-full flex flex-col text-white ml-5 ">
      <h2 className="text-[16px] font-semibold ">{title}</h2>
      <p className={`${styles.paragraph} leading-[23px]`}>{content}</p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className={` ${layout.section} max-w-7xl ${styles.paddingX} `}
  >
    <div className={`${layout.sectionInfo}`}>
      <h2 className="text-white text-[40px] sm:text-[50px] leading-[52px] font-semibold ">
        You do the business, <br className="sm:block hidden" />
        we'll handle the money.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] my-3 leading-7 `}>
        With the right credit card you can improve your financial life by
        building credits, earning rewards and saving money. But with hundreds of
        credit cards on th market.
      </p>

      <Button />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
