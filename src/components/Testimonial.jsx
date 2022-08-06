// improt components
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <section className="mb-64 lg:mb-48">
      <div className="container mx-auto">
        <div className="bg-purple-400/10 max-h-[400]px p-12 rounded-lg">
          <div className="text-center ">
            <h2
              className="text-3xl mb-6 font-bold"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-delay="1500"
            >
              what our clients say
            </h2>
            <p
              className="max-w-2xl mx-auto mb-12 lg:mb-24"
              data-aos="fade-up"
              data-aos-offset="400"
              data-aos-delay="1800"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, enim nostrum. Inventore, eius dolor mollitia quas quis
              cupiditate perferendis rem.
            </p>
          </div>
          {/* slider */}
          <div data-aos="fade-up" data-aos-offset="400" data-aos-delay="1000">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
