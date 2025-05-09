'use client';
import { Dropdown } from 'rizzui';
import { useLanguage } from '../../context/LanguageContext';
import IconArrowDropDownFill from '../icons/ArrowDropUpDown';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <Dropdown placement='bottom-start' className="z-99999">
      <Dropdown.Trigger className='cursor-pointer hover:text-gold'>
        <span className='flex flex-row items-center'>
          {lang === 'en' ? 'English' : 'العربية'}
          <IconArrowDropDownFill />
        </span>
      </Dropdown.Trigger>
      <Dropdown.Menu className="divide-y bg-white">
        <Dropdown.Item
          onClick={() => setLang('en')}
          className='hover:bg-gold-lighter'>
          English
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => setLang('ar')}
          className='hover:bg-gold-lighter'>
          العربية
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
