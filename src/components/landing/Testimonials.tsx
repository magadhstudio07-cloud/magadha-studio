import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The Magadh team have been fantastic to work with. They have consistently taken my business goals and budget constraints into consideration when working on our projects. Their ability to understand our needs and translate them into effective web solutions has been impressive.",
    name: "Craig Dewart",
    role: "Founder at My Content Pal",
  },
  {
    quote: "My best experience with a consulting/contracting company. The results were delivered faster than expected and with top quality. They ensured I understood the process and suggested a great approach. Both execution and communication were flawless.",
    name: "Eric Yang",
    role: "CEO at Topaz Labs",
  },
  {
    quote: "I've never had such a good experience with an agency. They jumped in to get our site usable, and righted all the problems the previous agency left. Highly recommended for any frontend work.",
    name: "Geoff Cooper",
    role: "Digital Lead, Mario Testino",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-xs font-medium uppercase tracking-[0.3em]">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium">
            Why clients trust us
          </h2>
        </motion.div>

        {/* Avatar row placeholder */}
        <div className="flex justify-center gap-4 mb-16">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium"
            >
              {t.name.split(' ').map(n => n[0]).join('')}
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8"
            >
              <p className="text-sm leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
