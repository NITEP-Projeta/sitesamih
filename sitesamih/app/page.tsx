// app/page.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Phone, Mail, Globe, MapPin, Linkedin, Instagram, X, Download } from 'lucide-react';
import { Dialog } from '@headlessui/react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9FAFB] p-6">
      <div className="grid md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-5xl w-full border border-gray-200 overflow-hidden">

        {/* Cartão de contato */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1F1F1F] text-white p-8 space-y-4 flex flex-col justify-between"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest uppercase text-[#AF1B1B]">
              SAMIH CORDEIRO MURIBECA
            </h1>
            <p className="text-sm text-[#E5E7EB] uppercase tracking-wide mt-1">Diretor Comercial</p>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="font-semibold">Matriz:</p>
                <p>R. A, 01 - Vila Vicente Fialho,<br/>São Luís - MA, CEP: 65073-210</p>
              </div>
              <div>
                <p className="font-semibold">Filial Pará:</p>
                <p>Av. C, QD 77 - LT 32 BCidade Jardim,<br/>Parauapebas - PA, CEP: 68515-000</p>
              </div>
              <div>
                <p className="font-semibold">Filial Ceará:</p>
                <p>Rua Francisco Guilherme, 283<br/>São Gonçalo do Amarante - CE, CEP: 62670-000</p>
              </div>
              <div className="pt-2">
                <a href="tel:+5598988825328" className="flex items-center gap-2 hover:text-[#AF1B1B] transition-all duration-300 ease-in-out">
                  <Phone size={16} /> +55 98 98882-5328 / (98) 3311 4359
                </a>
                <a href="mailto:projeta@projetacs.com" className="flex items-center gap-2 hover:text-[#AF1B1B] transition-all duration-300 ease-in-out">
                  <Mail size={16} /> projeta@projetacs.com
                </a>
                <a href="https://projetacs.com" target="_blank" className="flex items-center gap-2 hover:text-[#AF1B1B] transition-all duration-300 ease-in-out">
                  <Globe size={16} /> www.projetacs.com
                </a>
                <a href="https://linkedin.com/company/projetacs" target="_blank" className="flex items-center gap-2 hover:text-[#AF1B1B] transition-all duration-300 ease-in-out">
                  <Linkedin size={16} /> linkedin.com/company/projetacs
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 italic pt-4">Representação executiva | Projeta Consulting</p>
        </motion.div>

        {/* Portfólio com Modal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col justify-center items-center text-center bg-white p-8"
        >
          <h2 className="text-2xl font-semibold text-[#1F1F1F] mb-4">Portfólio Executivo</h2>
          <button
            onClick={() => {
              if (isMobile) {
                window.open('/portfolio.pdf', '_blank');
              } else {
                setIsOpen(true);
              }
            }}
            className="bg-[#AF1B1B] hover:bg-[#8B1616] text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-[0_0_15px_#AF1B1B] transition-all duration-300 ease-in-out"
          >
            Visualizar Portfólio
          </button>
          <p className="text-sm text-gray-500 mt-4">Documento institucional | Confidencial</p>
        </motion.div>
      </div>

      {/* Modal com animação */}
      <AnimatePresence>
        {isOpen && (
          <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl rounded-xl bg-white p-4 shadow-xl relative"
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={24} />
                </button>
                <div className="flex justify-end mb-3">
                  <a
                    href="/portfolio.pdf"
                    download
                    className="flex items-center gap-2 bg-gradient-to-r from-[#AF1B1B] to-[#8B1616] text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Download size={18} /> Baixar PDF
                  </a>
                </div>
                <iframe
                  src="/portfolio.pdf"
                  className="w-full h-[80vh] rounded"
                  title="Portfólio"
                />
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </main>
  );
}
