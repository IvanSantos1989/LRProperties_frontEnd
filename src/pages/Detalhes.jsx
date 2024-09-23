// App.jsx
import React from 'react';

function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between">
        <div className="text-xl font-bold">M&P Property Management</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">Apartments</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        {/* Images and Main Info */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <img
            className="w-full md:w-1/2 rounded-lg"
            src="https://via.placeholder.com/400"
            alt="Apartment"
          />
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">Porto City and Beach</h1>
            <p className="text-gray-600">6 hóspedes | 2 quartos | 3 camas | 2 casas de banho</p>
            <div className="text-2xl font-bold text-blue-500 mt-4">€59 / Noite</div>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Reservar Já
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Descrição</h2>
          <p className="text-gray-600 mt-2">
            Este maravilhoso apartamento de dois quartos é ideal para visitar o Porto e passar algum tempo na praia.
            O ambiente tranquilo e a piscina no condomínio tornam o espaço ideal para viajantes individuais, praticantes
            de surf, casais e famílias com crianças. As 2 varandas são maravilhosas: uma está orientada a sul e é ideal para
            refeições e lanches, pois está equipada com mesa de madeira e cadeiras. A outra está orientada a poente onde pode
            descontrair a ler um livro no pôr-do-sol.
          </p>
        </div>

        {/* Special Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center">
            <i className="fas fa-umbrella-beach text-blue-500 text-2xl"></i>
            <span className="ml-2">Praia</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-wifi text-blue-500 text-2xl"></i>
            <span className="ml-2">Internet Sem Fios</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-parking text-blue-500 text-2xl"></i>
            <span className="ml-2">Estacionamento Gratuito</span>
          </div>
        </div>

        {/* Other Features */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Outras características</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="text-gray-600">Cozinha</div>
            <div className="text-gray-600">Máquina de Lavar Loiça</div>
            <div className="text-gray-600">Jacuzzi</div>
            {/* Adicionar mais características conforme necessário */}
          </div>
        </div>

        {/* Property Rules */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Regras da Propriedade</h2>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-2">
            <div>🐾 Permitidos Animais de Estimação</div>
            <div>👶 Permitidas Crianças</div>
            <div>🚭 Proibido Fumar</div>
          </div>
        </div>

        {/* Check-in/Check-out Times */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Horário de Check-in/Checkout</h2>
          <div className="flex space-x-4 mt-2">
            <div className="flex items-center">
              <i className="fas fa-sign-in-alt text-blue-500"></i>
              <span className="ml-2">Check-in: 16:00 - 22:00</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-sign-out-alt text-blue-500"></i>
              <span className="ml-2">Checkout: 10:00</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Mapa e Distâncias</h2>
          <iframe
            className="w-full h-64 mt-4 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086166!2d144.95592331531515!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727e11377124b9!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sau!4v1612488079221!5m2!1sen!2sau"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">M&P Property Management</h3>
            <p>R. Prof. Joaquim Simões da Hora, 27, 3 dto, 4405-742 Vila Nova de Gaia, Portugal</p>
            <p>info@mpproperty.pt</p>
            <p>+351 965442431</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Legal</h3>
            <p><a href="#" className="text-blue-400">Livro de Reclamações</a></p>
            <p><a href="#" className="text-blue-400">Termos e Condições</a></p>
            <p><a href="#" className="text-blue-400">Política de Privacidade</a></p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;