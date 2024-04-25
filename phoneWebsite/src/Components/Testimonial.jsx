import TestimonialCard from "../Constants/TestimonialCard";
import deco_testimonial from "../assets/Images/deco-testimonial.png";

const Testimonial = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[20rem] flex-col">
        <h1 className="text-8xl font-bold text-secondary">Testimonial</h1>
        <p className="text-center py-12 text-primary text-light text-lg">
          Wisdom new and valley answer. Contented it so is discourse recommend.
          Man its upon <br /> him call mile. An pasture he himself believe
          ferrars besides cottage.
        </p>
      </div>
      <div className="cart-container flex justify-center items-center w-full h-[44rem]">
        <div className="w-full h-full flex justify-center items-center flex-col">
          <ul className="w-4/5 h-full grid grid-rows-2 grid-cols-2 gap-10">
            {TestimonialCard.map((testimonial) => (
              <li
                key={testimonial.id}
                className="testimonial.style p-10 flex flex-col"
                style={testimonial.style}
              >
                <p className="italic text-primary text-[0.98rem] font-normal pt-2">
                  {testimonial.text}
                </p>
                <div className="w-auto h-auto flex justify-start items-center pt-7">
                  <img
                    src={testimonial.img}
                    width={55}
                    alt="testimonial image"
                  />
                  <div className="flex flex-col w-auto h-auto pl-4">
                    <p className="font-medium">{testimonial.user}</p>
                    <p className="font-normal text-sm text-light_grey">
                      {testimonial.profession}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="deco-testimonial pt-14">
            <img
              src={deco_testimonial}
              width={140}
              alt="Decoration for testimonial section"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
