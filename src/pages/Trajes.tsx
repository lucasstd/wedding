import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar/navbar";
import madrinhasImage from "../assets/vestidos-casamento-convidadas.jpg";
import padrinhosImage from "../assets/traje2.jpg";
import { FaCheckCircle } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Trajes: React.FC = () => {
  return (
    <>
      <Navbar forceBackground />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
        className="mt-10 min-h-screen bg-up-light-orange text-gray-800 py-10 font-sans"
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto px-6 py-8 bg-white rounded-2xl shadow-lg mb-12 border border-up-medium-orange/50"
        >
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-gray-800 mb-6 text-center"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Nossa Jornada Começa!
          </motion.h2>
          <motion.ul
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="text-left text-base space-y-4"
          >
            {[
              "Confirme sua presença, seu lugar nessa aventura é especial! E caso não possa comparecer, por favor, nos avise para ajustarmos os nossos mapas!",
              "Pedimos que esta jornada seja compartilhada apenas com aqueles que receberam um convite especial.",
              "O traje ideal para essa aventura é o social esportivo, portanto não precisa de gravata ou blazer, uma camisa social e uma calça está perfeito.",
              "Lembrete importante: o branco é uma cor reservada exclusivamente para a noiva, a nossa estrela principal!",
              "Capture muitos momentos especiais, mas com cuidado para não atrapalhar o trabalho dos nossos aventureiros fotógrafos!",
            ].map((text, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={listItemVariants}
              >
                <FaCheckCircle className="h-6 w-6 text-up-medium-orange mr-3 mt-0.5 flex-shrink-0" />
                <span
                  dangerouslySetInnerHTML={{
                    __html: text
                      .replace(
                        /por favor/g,
                        '<strong class="font-bold">por favor</strong>'
                      )
                      .replace(
                        /social esportivo/g,
                        '<strong class="font-bold">social esportivo</strong>'
                      )
                      .replace(
                        /branco/g,
                        '<strong class="font-bold">branco</strong>'
                      ),
                  }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto px-4 py-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row-reverse gap-10 items-center border border-up-medium-orange/50">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                loading="lazy"
                src={madrinhasImage}
                alt="Madrinhas com vestidos terracota"
                className="rounded-xl object-cover w-full h-auto shadow-md border-4 border-up-medium-orange/30"
              />
            </motion.div>
            <div className="text-left md:w-1/2">
              <motion.h2
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl md:text-5xl text-gray-800 mb-4"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Nossas Madrinhas Aventureiras
              </motion.h2>
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-base mb-4 leading-relaxed"
              >
                Queremos que use o vestido que lhe agrade e que se sinta pronta
                para essa jornada! Conforto é fundamental, então escolha um
                vestido que você se sinta bem, na cor{" "}
                <strong className="font-bold text-up-terracota">
                  Terracota
                </strong>
                , a cor do pôr do sol e das grandes aventuras!
              </motion.p>
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className="text-base leading-relaxed"
              >
                Além disso, para o calçado, queremos te deixar mais confortável
                ainda para dançar e celebrar! Então, opte pelo calçado que
                desejar e que te deixe à vontade!
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto px-4 py-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-10 items-center border border-up-medium-orange/50">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                loading="lazy"
                src={padrinhosImage}
                alt="Padrinhos com ternos pretos e camisas brancas"
                className="rounded-xl object-cover w-full h-auto shadow-md border-4 border-up-medium-orange/30"
              />
            </motion.div>
            <div className="text-left md:w-1/2">
              <motion.h2
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-4xl md:text-5xl text-gray-800 mb-4"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Nossos Padrinhos Exploradores
              </motion.h2>
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-base mb-4 leading-relaxed"
              >
                Para você ficar ainda mais elegante para essa grande expedição,
                neste dia gostaríamos que os convidados usem uma roupa social
                esportivo, contendo uma camisa social.
              </motion.p>
              <motion.p
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className="text-base leading-relaxed"
              >
                E para deixar todos os nossos exploradores mais confortáveis e
                prontos para a diversão, não é necessário o uso de gravata e
                blazer! A liberdade é parte da aventura!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Trajes;
