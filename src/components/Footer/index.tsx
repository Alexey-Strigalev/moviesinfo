import './styles.scss';

import Logo from 'components/Logo';

const Footer = () => {
  return (
    <footer className='main_footer'>
      <div className='container'>
        <div className='footer_wrapper'>
          <Logo/>
          <div>Дипломный проект</div>
          <div>
            <div className='small'>Made by</div>
            Алексей Стригалев
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;