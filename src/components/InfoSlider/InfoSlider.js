import SimpleImageSlider from "react-simple-image-slider";
import './InfoSlider.css'
import img1 from './images/1.jpg'
import img2 from './images/slide2.jpg'
import img3 from './images/slide3.jpg'


const images = [
    { url: `${img1}` },
    { url: `${img2}` },
    { url: `${img3}` },

  ];

const InfoSlider = () => {
  return (
    <div className="position">
      <SimpleImageSlider
        autoPlay={true}
        width={830}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default InfoSlider