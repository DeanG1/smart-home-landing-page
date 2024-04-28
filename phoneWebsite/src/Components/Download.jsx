import ButtonReusable from "./ButtonReusable";
import phone1 from "../assets/Images/phone1.png";
const Download = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mt-[14rem]">
      <div className="w-[38rem]  h-auto flex justify-center items-start flex-col mb-[4rem]">
        <div className="ml-[4rem]">
          <h3 className="font-bold py-2 text-8xl ">Download App</h3>
          <p className="text-xl text-primary py-12 ">
            Wisdom new and valley answer. Contented it so is discourse <br />
            recommend. Man its upon him call mile. An pasture he himself believe
            ferrars besides cottage.
          </p>
        </div>
        <ButtonReusable />
      </div>
      <div className="square-bg-container relative w-[38rem] h-auto flex justify-center items-center mt-[12rem]">
        <div className="absolute w-[52rem] right-0">
          <img src={phone1} alt="phone1" />
        </div>
      </div>
    </div>
  );
};
export default Download;
