import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section
    id="product"
    className={`${layout.sectionReverse}  ${styles.paddingX}`}
  >
    <div className={` ${layout.sectionImgReverse} `}>
      <img
        src={bill}
        alt=""
        className="sd:w-[75%] lg:w-fit relative z-[5] object-contain"
      />
      <div className="absolute -left-1/2 z-[3] white__gradient rounded-full w-[50%] h-[50%]" />
      <div className="absolute-left-1/2 bottom-0 z-[0] pink__gradient rounded-full w-[50%] h-[50%]" />
    </div>

    <div className={`${layout.sectionInfo}`}>
      <h2
        className={`text-white text-[40px] sm:text-[50px] font-semibold leading-[46px]`}
      >
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] my-[25px] leading-7`}>
        ELit enim sed massa etiam, sit amet consectetur adipisicing elit. Enim
        aliquid tempore adipisci, quaerat at, obcaecati blanditiis dignissimos!
      </p>

      <div className="flex flex-row flex-wrap">
        <img
          src={apple}
          alt="google_play"
          className="w-[128px] h-[42px] mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
