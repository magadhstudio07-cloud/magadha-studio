import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "My best experience with a consulting/contracting company. The results were delivered faster than expected and with top quality. They ensured I understood the process and suggested a great approach. Both execution and communication were flawless.",
    name: "Eric Yang",
    role: "CEO at Topaz Labs",
  },
  {
    quote: "I've never had such a good experience with an agency. They jumped in to get our site usable, and fixed all the problems the previous agency left behind.",
    name: "Geoff Cooper",
    role: "Digital Lead, Mario Testino",
  },
  {
    quote: "They bring passion and creativity to website development projects, which is a breath of fresh air. They've helped us develop our website from an MVP to a multi-faceted marketing platform with events, blogs, and webinar pages.",
    name: "Daljit Cheema",
    role: "CEO at Pharmaseal",
  },
  {
    quote: "The team are absolute rockstars. They blend technical savvy with practical business sense. They are in lock-step with our website goals and have really made our website come to life.",
    name: "Kelly Brown",
    role: "Head of Corporate Marketing at Tray",
  },
  {
    quote: "We've worked with the team & they've turned around a lightning-fast set of pages quickly and the frontend flow. I couldn't be happier.",
    name: "Matt Grattage",
    role: "Product Owner at Mojo Mortgages",
  },
  {
    quote: "I can't recommend them enough. Their knowledge, approach to work, and communication skills are simply unparalleled. Their in-depth understanding streamlined and elevated our web development processes, producing exceptional results.",
    name: "Joe",
    role: "Founder at Swotly",
  },
  {
    quote: "I've worked closely with them on several design and build web projects. Their expertise and attention to detail have greatly contributed to the success of these projects. Their proficiency has enabled us to create highly functional and visually appealing websites.",
    name: "Phil Randall",
    role: "CEO at Userfy",
  },
  {
    quote: "They have been fantastic to work with. They have consistently taken my business goals and budget constraints into consideration. Their ability to understand our needs and translate them into effective web solutions has been impressive.",
    name: "Craig Dewart",
    role: "Founder at My Content Pal",
  },
];

const Testimonials = () => {
  return (
    <section className="container" id="testimonials">
      <div className="border-x border-border relative">
        {/* Section header */}
        <div className="w-full border-y border-border py-6 -my-px">
          <h2 className="text-center font-mono text-[10px] tracking-[2px] text-muted-foreground uppercase">
            What our clients say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`p-8 lg:p-12 ${index >= 2 ? "border-t border-border" : ""}`}
            >
              <blockquote className="space-y-6">
                <p className="text-foreground text-base lg:text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <footer className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <cite className="not-italic font-medium text-foreground block">
                      {testimonial.name}
                    </cite>
                    <span className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
