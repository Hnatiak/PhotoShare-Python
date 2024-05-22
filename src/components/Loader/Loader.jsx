import { RotatingSquare } from 'react-loader-spinner';
import { LoaderComponent } from './Loader.styled'

const Loader = () => {
  return (
    <LoaderComponent>
      <RotatingSquare
      height="100"
      width="100"
      color="#9AC43C"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true} />
    </LoaderComponent>
    )
};

export default Loader;
