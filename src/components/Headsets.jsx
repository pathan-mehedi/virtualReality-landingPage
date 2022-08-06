// import images
import HeadsetsImg1 from "../assets/img/headset-1.png";
import HeadsetsImg2 from "../assets/img/headset-2.png";
import HeadsetsImg3 from "../assets/img/headset-3.png";
import HeadsetsImg4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* section title */}
        <h2
          className="text-3xl capitalize font-bold mb-6"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headsets
        </h2>
        {/* grid start */}
        <div className=" grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* grid items */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="400"
            data-aos-delay="700"
          >
            <img src={HeadsetsImg1} alt="Head-sets-images" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h2 className="font-semibold text-xl mb-2">Metaverse</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quo a aut deserunt quasi voluptatem.
              </p>
            </div>
          </div>
          {/* grid items 2 */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="400"
            data-aos-delay="1000"
          >
            <img src={HeadsetsImg2} alt="Head-sets-images" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h2 className="font-semibold text-xl mb-2">AIoT</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quo a aut deserunt quasi voluptatem.
              </p>
            </div>
          </div>
          {/* grid items 3 */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="400"
            data-aos-delay="1300"
          >
            <img src={HeadsetsImg3} alt="Head-sets-images" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h2 className="font-semibold text-xl mb-2">HoloLense</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quo a aut deserunt quasi voluptatem.
              </p>
            </div>
          </div>
          {/* grid items 4 */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="400"
            data-aos-delay="1600"
          >
            <img src={HeadsetsImg4} alt="Head-sets-images" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h2 className="font-semibold text-xl mb-2">TPCASTT</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium quo a aut deserunt quasi voluptatem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
