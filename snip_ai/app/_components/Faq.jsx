"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const accordionItems = [
    {
      title: "Is this website site free ?",
      content: (
        <div className="text-gray-200 text-md">
          " Yes — this website is absolutely free! 🎉 Enjoy 3 complimentary
          credits instantly upon your first login. Dive in and start exploring
          today!"
        </div>
      ),
    },
    {
      title: "How to get more credits ?",
      content: (
        <div className="text-gray-200 text-md">
          "Unlock more credits by visiting the Billing section. Simply pay a
          minimal fee through our secure, integrated Razorpay system and enjoy
          uninterrupted access!"
        </div>
      ),
    },
    {
      title: "How can I Create Short Videos ?",
      content: (
        <div className="text-gray-200 text-md">
          "Easily create stunning short videos in the Create New Video section
          after logging in — just 1 credit per video!"
        </div>
      ),
    },
    {
      title: "Is this website give any technical support ?",
      content: (
        <div className="text-gray-200 text-md">
          Yes, we offer 24/7 technical support .Feel free to reach out to us at{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=spandey3301@gmail.com&su=Support%20Request&body=Hi%20Team%2C%0A%0AI%20am%20facing%20the%20following%20issue%3A%20%0A%0A%5BPlease%20describe%20your%20issue%20here%5D%0A%0ARegards%2C%0A%5BYour%20Name%5D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            spandey3301@gmail.com
          </a>
          .
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-screen-xl mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-4xl lg:text-6xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center text-2xl lg:text-2xl">
          Here are some of our frequently asked questions.
        </p>
      </div>
      <div className="flex w-full max-w-lg ">
        <Accordion
          fullWidth
          selectionMode="multiple"
          variant="splitted"
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.title}
              title={item.title}
              className=" bg-gray-700 rounded-xl text-black"
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.section>
  );
}
