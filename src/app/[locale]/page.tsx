import {useTranslations} from 'next-intl';
import LandingPage from '../components/user/landing-page/page';
import {unstable_setRequestLocale} from 'next-intl/server';
interface IndexProps {
  params: {
    locale: string;
  };
}

export default function Index({
  params: { locale }
}: IndexProps) {

  unstable_setRequestLocale(locale);
  return (
    <LandingPage/>

  ) 
}