import {useTranslations} from 'next-intl';
import LandingPage from '../components/user/landing-page/page';
 
export default function Index() {
  const t = useTranslations('IndexPage');

  
  return (
    // <h1>{t('title')}</h1>
    <LandingPage/>

  ) 
}