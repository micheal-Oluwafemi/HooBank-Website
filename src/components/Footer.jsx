import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingY} flex-col mx-12 md:mx-32 `}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex-col justify-start mr-10'>
        <img
          src={logo}
          alt='HookBank'
          className='w-[266px] h-[72px] object-contain'
        />
        <p
          className={`${styles.paragraph} max-w-[310px] leading-5 md:leading-6 text-[15px] mt-4 `}
        >
          A new way to make the payment easy, reliable and secure.
        </p>
      </div>

      <div className='flex-[1.5] justify-between w-full flex flex-row flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className='flex flex-col ss:my-0 my-4 min-w-[150px]'
          >
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>

            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1
                      ? 'mb-[10px] mt-[4px]'
                      : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
        2021 HooBank. All Rights Reserved..{' '}
        <span className='text-gradient text-[20px]'>
          <a href='https://wa.me/message/FOHLE6MHV7BRM1' target='_blank'>
            RayTech ❤
          </a>
        </span>
      </p>

      <div className='flex flex-row md:mt-0 mt-6'>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt='social media'
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
