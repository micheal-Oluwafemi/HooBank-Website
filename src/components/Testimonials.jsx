import { feedback } from '../constants';
import styles from '../style';
import FeedBAckCard from './FeedBAckCard';

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative ${styles.paddingX}`}
  >
    <div className=" flex justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className="text-white text-[40px] sm:text-[50px] leading-[52px] font-semibold w-full">
        What people are <br className="sm:block hidden" /> saying about us
      </h1>

      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[450px] my-3 leading-7 `}>
          Everyone you needs to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-col sd:flex-row justify-center sm:justify-start feedback-container relative z-[1]">
      {feedback.map((card, index) => (
        <FeedBAckCard key={card.id} {...card} index={index} />
      ))}
    </div>
  </section>
);
export default Testimonials;
