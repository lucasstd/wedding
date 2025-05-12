import Navbar from "../components/navbar/navbar";

export default function ConfirmacaoPresenca() {
  return (
    <>
      <Navbar forceBackground />
      <iframe
        src="https://forms.gle/47ZxVPn2D7H9eeg88"
        width="100%"
        height="800"
        className="mt-19"
      >
        Carregando…
      </iframe>
    </>
  );
}
