import { quotes } from '../assets';
import styles from '../style';

const FeedBAckCard = ({ content, name, title, img }) => (
  <div className="flex flex-col md:flex-row justify-center md:justify-between feedback-card p-4 rounded-[22px] mt-4 md:mt-0">
    <div className="flex flex-col px-10 xs:mt-5 md:mt-0">
      <img src={quotes} alt="quotes" className="w-[48px] h-[28px]" />
      <p
        className={`${styles.paragraph} max-w-[470px] my-5 leading-6 text-[15px]`}
      >
        {content}
      </p>

      <div className="flex flex-row items-center">
        <img src={img} alt="client-img" className="rounded-full w-12" />

        <div className="flex flex-col items-center justify-start ml-3">
          <h2 className="text-white font-semibold ">{name}</h2>
          <p className={`${styles.paragraph} text-[14px] font-thin leading-3`}>
            {title}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FeedBAckCard;
