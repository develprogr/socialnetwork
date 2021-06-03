import spinner from '../../assets/spinner.gif';
import s from './preloader.module.css';

export const Preloader = () => {
    return <div className={s.preloader}>
        <img src={spinner} alt='Spinner' />
    </div>
};