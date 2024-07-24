import {useTranslations} from 'next-intl';
import LandingPage from '../components/user/landing-page/page';
import {unstable_setRequestLocale} from 'next-intl/server';
export default function Index({
  params:{locale}
}) {
  const t = useTranslations('IndexPage');

  unstable_setRequestLocale(locale);
  return (
    <LandingPage/>

  ) 
}