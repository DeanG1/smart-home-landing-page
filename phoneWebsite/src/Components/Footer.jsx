const Footer = () => {
  return (
    <footer className="pt-[10rem] h-auto w-full">
      <div className="inner-footer w-4/5 h-[20rem] flex justify-around items-center mx-auto">
        <div className="h-full flex justify-start items-start flex-col">
          <h4 className="font-bold text-4xl text-secondary">smartHome</h4>
          <p className="py-8 text-primary text-lg leading-5 tracking-wide">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Temporibus et impedit
            <br /> work there.
          </p>
          <div className="flex w-full justify-start items-center gap-4 pt-4">
            <input
              type="email"
              className="border rounded-md bg-[#f5f5f5] px-3 py-2 placeholder:text-primary"
              placeholder="Enter your email"
            />
            <button className="border-2 border-gray-700 bg-none py-2 px-6 text-center rounded-md">
              Register
            </button>
          </div>
        </div>
        <div className="h-full flex justify-start items-center flex-col">
          <h4 className="w-full text-start text-2xl uppercase font-medium text-secondary pb-12">
            Categories
          </h4>
          <ul className="tracking-wide flex justify-center items-start flex-col gap-3 text-primary text-lg">
            <li>Product Management</li>
            <li>Design / Creatives</li>
            <li>Education & Training</li>
            <li>UI / UX Designers</li>
            <li>Development</li>
            <li>Customer Support</li>
          </ul>
        </div>
        <div className="h-full flex justify-start items-center flex-col">
          <h4 className="w-full text-start text-2xl uppercase font-medium text-secondary pb-12">
            About
          </h4>
          <ul className="tracking-wide flex justify-center items-start flex-col gap-3 text-primary text-lg">
            <li>About Us</li>
            <li>Partnership</li>
            <li>Finance Expert</li>
            <li>Project Managment</li>
            <li>Product Manager</li>
            <li>The team</li>
          </ul>
        </div>
        <div className="h-full flex justify-start items-center flex-col">
          <h4 className="w-full text-start text-2xl font-medium text-secondary pb-12">
            Follow Us
          </h4>
          <ul className="tracking-wide flex justify-center items-start flex-col gap-3 text-primary text-lg">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
