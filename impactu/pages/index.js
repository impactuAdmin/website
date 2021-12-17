import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Stats from '../components/Stats'

export default function App() {
  return (
    < >
        <Hero/>
        <Intro />
        <Stats />
    </>
  )
}

App.layout = "L1";

export async function getServerSideProps() {
  const premierDate = new Date("Dec 17, 2021 21:45:00").getTime();
  const difference = premierDate - +new Date();

  if(difference >= 0) {
      return {
          redirect: {
            destination: '/CountDown',
            permanent: false,
          },
        }
  }
  else {
      return {
          props: {}
      }
  }
}