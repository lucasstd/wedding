import { FaInstagram } from "react-icons/fa";

export const pages = [
  { id: 0, page: "Trajes", href: "/trajes", readonly: true },
  { id: 1, page: "Pre-wedding", href: "/pre-wedding" },
  { id: 2, page: "Lista de presentes", href: "/presentes", readonly: true },
];

export const socialLinks = [
  { id: 1, Icon: <FaInstagram />, href: "/" },
];

export const gifts = [
  {
    id: 1,
    name: "Jantar Romântico",
    price: "R$ 150,00",
    image: "https://images.unsplash.com/photo-1510626176961-4bfb7b41c1f4?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Noite em Hotel",
    price: "R$ 300,00",
    image: "https://images.unsplash.com/photo-1582719478170-2fe9c197f27e?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Passeio de Balão",
    price: "R$ 500,00",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
];