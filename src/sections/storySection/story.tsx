import "./styles.css";
import SectionTitle from "../../components/sectionTitle/sectionTitle";

export function StorySection() {
  return (
    <section id="story-section" className="container flex flex-col md:flex-row gap-20 py-12 px-8">
      <div className="mx-auto max-w-screen-md">
        <SectionTitle  subTitle="Nossa História" sectionTitle="Trajetória" />

        <p className="indent-6 font-normal !text-gray-500">
          Há cinco anos, nossas vidas se cruzaram de uma maneira que só o
          destino poderia fazer porque se parar para pensar foi no exato momento em
          que nos poderíamos nos encontrar então se não foi o destino não sei o
          que foi.
        </p>
        <p className="indent-6 font-normal !text-gray-500">
          Desde o primeiro encontro, sabíamos que havia algo especial
          entre nós e não nos desgrudamos desde então cada dia sendo uma nova
          experiência. Ao longo desses anos, enfrentamos desafios e comemoramos
          vitórias juntos, sempre lado a lado. Nossa conexão se fortaleceu com o
          tempo, e o amor que sentimos um pelo outro só aumentou!
        </p>
        <p className="indent-6 font-normal !text-gray-500">
          Agora, estamos
          prontos para dar o próximo passo e compartilhar esse momento especial
          com nossos amigos e familiares. Este é apenas o começo de uma nova
          fase da nossa história, e estamos ansiosos para tudo o que o futuro
          nos reserva.
        </p>
      </div>
      <div className="leftImage outlined"></div>
    </section>
  );
}

export default StorySection;
