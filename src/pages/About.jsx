import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div>
      <Navbar />
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Sobre a Empresa</h1>
      <p className="text-lg mb-4">
        Nossa empresa foi fundada em [ano] com o objetivo de [missão da empresa]. Desde então, temos nos dedicado a [descrição das atividades da empresa]. Nossa equipe é composta por profissionais altamente qualificados e comprometidos com a excelência.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2">Contatos</h2>
      <p className="text-lg mb-1">Email: contato@empresa.com</p>
      <p className="text-lg mb-4">Telefone: (11) 99999-9999</p>
      
      <h2 className="text-2xl font-semibold mb-2">Localização</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.594896241565!2d-122.41941518468177!3d37.77492977975901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c4d424e4f%3A0xe735f4ddc124f6c8!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1634060582065!5m2!1sen!2sus"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="Localização da Empresa"
        className="w-full h-64 md:h-96 mb-4"
      ></iframe>
    </div>
    <Footer />
    </div>
  );
}

export default About;