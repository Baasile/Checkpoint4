// eslint-disable-next-line import/extensions
import jason from "../data/generated.jsx";
import actu from "../assets/actu.jpg";
import winner from "../assets/winner.png";

function Actu() {
  return (
    <section className="bg-slate-100 text-gray-800">
      <div className="container mx-auto flex flex-col px-5 py-12 space-x-4 lg:flex-row">
        <div className="flex flex-col justify-start lg:mb-16  lg:pr-32 ">
          <h2 className="text-4xl my-4 font-bold text-gray-900">
            {jason[0].headline}
          </h2>
          <p className="text-xl mb-8 ">{jason[0].type1}</p>
          <h3 className="flex flex-start text-left subtitle text-xl font-bold">
            {jason[0].text}
          </h3>
        </div>
      </div>
      <div className="container mx-auto flex flex-col px-5 py-6 space-x-4 lg:flex-row">
        <div className=" md:max-w-lg md:w-full flex justify-center shadow-lg">
          <img
            className="object-cover object-center rounded-md shadow-xl lg:block"
            src={actu}
            alt="Actu"
          />
        </div>
        <div className="flex flex-col justify-start mt-4 lg:mb-16  lg:pr-32 ">
          <h2 className="text-4xl mb-4 font-bold text-gray-900">
            {jason[1].headline}
          </h2>
          <h3 className="flex flex-start text-left text-xl font-bold">
            {jason[1].text}
          </h3>
        </div>
      </div>
      <div className="container mx-auto flex flex-col px-5 py-12 space-x-4 lg:flex-row">
        <div className="flex flex-col justify-start lg:mb-16  lg:pr-32 ">
          <h2 className="text-4xl my-4 font-bold text-gray-900">
            {jason[2].headline}
          </h2>
          <p className="text-xl mb-4">{jason[2].type1}</p>
          <h3 className="flex flex-start text-left subtitle text-xl font-bold">
            {jason[2].text}
          </h3>
        </div>
        <div className="mr-4 w-5/6 md:max-w-lg md:w-full ">
          <img
            className="object-cover object-center hidden lg:block"
            src={winner}
            alt="Actu"
          />
        </div>
      </div>
    </section>
  );
}

export default Actu;
