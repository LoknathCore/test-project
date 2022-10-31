// import logo from './logo.svg';
import './App.css';
import AddRemove from './From/AddRemove';
import 'antd/dist/antd.min.css'

// import Button from './Button/Button';
// import Form from './Form/Form';
import { SelectInput, TextArea, TextInput } from './Inputs/input';
import BannerUp from './Upload/BannerUp/BannerUp';
import ImgUpload from './Upload/ImgUpload';
import Up from './Upload/Up';
import UploadImage from './Upload/Upload';
import Upload from './Upload/Upload';
import UploadForm from './Upload/UploadForm';
import UploadPatern from './Upload/UploadPatern/UploadPatern';
import Checkbox from './Checkbox/Checkbox';
import UploadLogo from './UploadLogo/UploadLogo';
import UserProvieder from './Context/UserProvieder';
import Sidebar from './Sidebar/Sidebar';
// import { Button } from '@mui/material';
// import { Stack } from '@mui/system';
// import { CustomButton, SecondButton ,Button} from './Buttons';
// import { InputField } from './Input';
// import Inputs from './Inputs/Inputs'
// import uploadPatern from './Upload/uploadPatern/UploadPatern';
import Video from './Assets/video/file.mp4'
import Main from './Main/Main';
import StarRating from './Rating/StarRating';
import StarRate from './StarRate/StarRate';
import StarDesign from './StarDesign/StarDesign';
import ReactModal from './components/ReactModal/ReactModal';
import UserModal from './components/UserModal/UserModal';
import Dropdown from './components/Dropdown/Dropdown';
// import Rating from './Rating/Rating';
import Form from './Form/Form';
import ReactSlider from './components/ReactSlider/ReactSlider';
import ModalUser from './components/ModalUser/ModalUser';
import { Route, Routes } from 'react-router-dom';
import Customer from './pages/Customer/Customer';
import Admin from './pages/Admin/Admin';
import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import Navigation from './components/Navigation/Navigation';
import Carousel from './components/Carousel/TestimonialSlider';
import TestimonialSlider from './components/Carousel/TestimonialSlider';
import Stepper from './components/Carousel/Stepper';
import Slide from './components/Slide/Slide';
import TryModal from './components/TryModal/TryModal';


function App() {

  return (
    <div className="w-[50%] m-auto">
      {/* <Routes >
        <Route exact path='/' component={Customer} />
        <Route path='/admin' component={Admin} />
      </Routes> */}
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Navigation /> */}

      {/* <Carousel /> */}
      {/* <TestimonialSlider /> */}
      {/* <Stepper /> */}

      {/* <Slide /> */}
      <ModalUser />
      <TryModal />




      {/* <label htmlFor="my-modal-5" className="btn modal-button">Edit profile</label> */}

      {/* <Main /> */}
      {/* <Rating /> */}
      {/* <StarRating /> */}
      {/* <StarRate /> */}
      {/* <StarDesign /> */}
      {/* <ReactModal /> */}
      {/* <UserModal />
      <Dropdown /> */}
      {/* <Form />
      <ModalUser /> */}
      {/* <ReactSlider /> */}

      {/* <BannerUp /> */}
      {/* <Up /> */}
      {/* <UploadPatern />
      <h1 className='text-white'>this is banner</h1> */}













      {/* <Button></Button> */}
      {/* <Inputs></Inputs> */}

      {/* <Form></Form> */}



      {/* <Stack direction='row' spacing={4} justifyContent='center' mt={15}>
            <CustomButton variant='contained'>Custom Button</CustomButton>

            <SecondButton variant='contained'>Second button</SecondButton>

          </Stack> */}

      {/* <Button
            backgroundColor='green'
            fontSize = '10px'
            border = 'none'
            padding= '10px 20px'
            children ='Buy Now'
            color ='white'
            borderRadius='10px'
            fontWeight='bold'
          ></Button>
         
         <Button 
           children='Click me'
         
         />

         <InputField
          placeholder='Name'
          name="name"
          type="text"


         /> */}



    </div>
  );
}

export default App;
