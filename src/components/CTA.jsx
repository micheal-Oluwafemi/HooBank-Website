import styles from '../style';
import Button from './Button';

const CTA = () => (
  <section
    className={`bg-black-gradient-2 mx-12 md:mx-32 rounded-[10px] ss:rounded-md p-7 md:p-8 mt-[50px]`}
  >
    <div className={`flex flex-col ss:flex-row justify-between`}>
      <div className='flex-1 flex flex-col'>
        <h1 className='text-white text-[40px] sm:text-[50px] leading-9 md:leading-[52px] font-semibold'>
          Let's try our service now!
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] leading-5 md:leading-6 text-[15px] mt-[7px]`}
        >
          Every thing you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>

      <div className='flex items-center mt-2 ss:mt-0'>
        <Button />
      </div>
    </div>
  </section>
);

export default CTA;
