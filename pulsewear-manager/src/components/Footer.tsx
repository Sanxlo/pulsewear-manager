import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">

          {/* Marca */}
          <div>
            <h2 className="text-3xl font-black">
              PulseWear
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Ropa deportiva premium diseñada para entrenar fuerte,
              moverse con comodidad y vestir con estilo dentro y
              fuera del gimnasio.
            </p>

            <div className="flex gap-3 mt-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                IG
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                FB
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold">
                YT
              </div>
            </div>
          </div>

          {/* Tienda */}
          <div>
            <h3 className="font-bold mb-5">
              Tienda
            </h3>

            <div className="space-y-3 text-gray-400">
              <Link
                to="/catalog"
                className="block hover:text-white transition"
              >
                Catálogo
              </Link>

              <Link
                to="/compare"
                className="block hover:text-white transition"
              >
                Comparador
              </Link>

              <Link
                to="/checkout"
                className="block hover:text-white transition"
              >
                Carrito
              </Link>
            </div>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="font-bold mb-5">
              Soporte
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>Envíos y entregas</p>
              <p>Devoluciones</p>
              <p>Pago seguro</p>
              <p>Preguntas frecuentes</p>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-bold mb-5">
              Contacto
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>info@pulsewear.com</p>
              <p>+34 600 123 456</p>
              <p>España</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>
            © 2026 PulseWear. Todos los derechos reservados.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-white transition cursor-pointer">
              Aviso legal
            </span>

            <span className="hover:text-white transition cursor-pointer">
              Política de privacidad
            </span>

            <span className="hover:text-white transition cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}