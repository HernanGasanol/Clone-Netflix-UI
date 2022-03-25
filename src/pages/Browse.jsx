import Header from '../components/header/Header'
import CardHover from '../components/slider/CardHover'
import { categoriesData } from '../../data'
import Layout from '../components/Layout'
import {useState ,useEffect} from 'react'
import Loader from '../components/Loader'


import MainContainer from '../components/main/MainContainer'








const Browse = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <Loader />
        </div>
      ) : (
        <Layout>
          <Header />
          <MainContainer />
        </Layout>
      )}
    </>
  );
};

export default Browse;
