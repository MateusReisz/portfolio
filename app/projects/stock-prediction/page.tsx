"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaPython, FaChartLine } from 'react-icons/fa';
import { SiPandas, SiScikitlearn } from 'react-icons/si';

export default function StockPredictionProject() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-black">
            Mateus Reis | Análise Preditiva de Ações
          </h1>
          <div className="space-x-4">
            <Link href="/" className="text-black hover:text-gray-600">
              Voltar
            </Link>
          </div>
        </div>
      </nav>

      {/* Conteúdo do Projeto */}
      <section className="pt-24 pb-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Análise Preditiva de Ações
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modelo de previsão de preços utilizando séries temporais e machine learning
            </p>
          </div>

          {/* Banner do Projeto */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/stock-prediction-banner.jpg"
              alt="Banner Análise Preditiva"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Detalhes do Projeto */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Coluna Esquerda - Sobre o Projeto */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-black mb-4">📊 Sobre o Projeto</h2>
              <p className="text-gray-700 mb-6">
                Este projeto desenvolve um modelo preditivo para prever os preços de ações utilizando
                técnicas avançadas de séries temporais e machine learning. O sistema analisa dados
                históricos de mercado e identifica padrões para fazer previsões com até 85% de acurácia.
              </p>
              
              <h3 className="text-xl font-bold text-black mb-3">🔍 Funcionalidades</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Coleta e limpeza de dados históricos de ações</li>
                <li>Análise exploratória de dados (EDA)</li>
                <li>Pré-processamento de séries temporais</li>
                <li>Modelagem com ARIMA e LSTM</li>
                <li>Visualização interativa dos resultados</li>
              </ul>

              <h3 className="text-xl font-bold text-black mb-3">📈 Resultados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold">Acurácia do Modelo</p>
                  <p className="text-2xl text-blue-600">85%</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="font-semibold">Período de Dados</p>
                  <p className="text-2xl text-blue-600">5 anos</p>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Tecnologias */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold text-black mb-4">🛠️ Tecnologias</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaPython className="text-blue-500 text-2xl" />
                  <span>Python</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiPandas className="text-red-500 text-2xl" />
                  <span>Pandas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SiScikitlearn className="text-orange-500 text-2xl" />
                  <span>Scikit-learn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaChartLine className="text-green-500 text-2xl" />
                  <span>Matplotlib/Seaborn</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-black mt-8 mb-4">🔗 Links</h3>
              <a
                href="https://github.com/MateusReisz/stock-prediction"
                className="inline-flex items-center space-x-2 text-blue-600 hover:underline"
                target="_blank"
              >
                <FaGithub />
                <span>Código no GitHub</span>
              </a>
            </div>
          </div>

          {/* Visualizações */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-6">📊 Visualizações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src="/images/stock-eda.jpg"
                  alt="Análise Exploratória"
                  width={600}
                  height={400}
                />
                <p className="p-3 text-sm text-gray-600">Análise exploratória dos dados</p>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <Image
                  src="/images/stock-predictions.jpg"
                  alt="Previsões do Modelo"
                  width={600}
                  height={400}
                />
                <p className="p-3 text-sm text-gray-600">Comparação entre previsões e valores reais</p>
              </div>
            </div>
          </div>

          {/* Código Exemplo */}
          <div className="bg-gray-800 text-gray-100 p-6 rounded-xl mb-12">
            <h3 className="text-xl font-bold mb-4">💻 Trecho do Código</h3>
            <pre className="overflow-x-auto">
              <code>
{`# Exemplo de modelo ARIMA
from statsmodels.tsa.arima.model import ARIMA

# Treinando o modelo
model = ARIMA(train_data, order=(5,1,0))
model_fit = model.fit()

# Fazendo previsões
predictions = model_fit.predict(
  start=len(train_data),
  end=len(train_data)+len(test_data)-1,
  dynamic=False
)`}
              </code>
            </pre>
          </div>
        </motion.div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Mateus Reis - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}