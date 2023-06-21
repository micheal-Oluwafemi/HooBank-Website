import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          className={`${styles.flexCenter} flex-1 mr-4 px-2 ss:px-0 ss:mr-0`}
          key={client.id}
        >
          <img
            src={client.logo}
            alt='client-logo'
            className='sm:w-[150px] w-[100px]'
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
