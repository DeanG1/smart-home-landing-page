import apple_store from "../assets/Images/apple_store.png";
import google_play from "../assets/Images/google-play.png";

const ButtonReusable = () => {
  return (
    <div className="btn-container w-full h-auto flex justify-center items-center gap-8">
      <div className="apple-store w-[14rem] bg-black h-auto py-2 rounded-2xl border flex justify-center items-center shadow-4xl">
        <div className="icon-btn">
          <img src={apple_store} width={60} alt="" />
        </div>
        <div className="text-btn text-white">
          <p className="font-semibold">Download on the</p>
          <p className="text-3xl font-semibold">App Store</p>
        </div>
      </div>
      <div className="google-play w-[14rem] bg-black h-auto p-2 rounded-2xl border flex justify-center items-center shadow-4xl">
        <div className="icon-btn">
          <img src={google_play} width={40} alt="" />
        </div>
        <div className="text-btn text-white">
          <p className="font-semibold">Get it on</p>
          <p className="text-3xl font-semibold tracking-tight">Google Play</p>
        </div>
      </div>
    </div>
  );
};
export default ButtonReusable;
