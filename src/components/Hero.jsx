import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section className={`flex ss:flex-row flex-col ${styles.paddingY}`}>
    {/* Items 1 */}
    <div
      className={`flex flex-1 flex-col ${styles.flexStart} ${styles.paddingX}`}
    >
      {/* DIscount Sect. */}
      <div className="flex flex-row bg-discount-gradient rounded-[10px] items-center font-medium md:mb-10 mb-2">
        <img src={discount} alt="discount" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20% </span> DISCOUNT FOR{' '}
          <span className="text-white">1 MONTH </span> ACCOUNT
        </p>
      </div>

      <div className="flex flex-row">
        <div className="sm:text-[62px] text-[50px] text-white sm:leading-[57px] leading-[52px] font-semibold">
          <h1 className="my-2">
            The Next <br />
            <span className="font-poppins text-gradient">Generation</span>{' '}
            <br />
            Payment Method
          </h1>
        </div>

        <div>
          <GetStarted />
        </div>
      </div>

      <p
        className={`${styles.paragraph} max-w-[470px] leading-6 font-normal text-base mt-2`}
      >
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. <br />
        We examine annual percentages rates, annual fees.
      </p>
    </div>

    {/* Items 2 */}
    <div className={`ss:flex-1 flex-2 flex my-10 ${styles.flexCenter} md:my-0`}>
      <img src={robot} alt="robot" className="w-[100%] h-[100%]" />
      <div className="absolute z-[0] w-[2%] h-[2%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[2%] h-[2%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[2%] h-[2%] bottom-20 right-20 blue__gradient" />
    </div>
  </section>
);

export default Hero;
