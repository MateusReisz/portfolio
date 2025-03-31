export const projects = [
    {
        id: "stock-prediction",
        title: "Análise Preditiva de Ações",
        description: "Modelo de previsão de preços de ações usando séries temporais.",
        technologies: ["Python", "Pandas", "Scikit-learn"],
        image: "/images/stock-prediction.jpg", // Adicione o caminho da imagem
        content: `
            <h2>Descrição Detalhada</h2>
            <p>Este projeto utiliza técnicas de séries temporais para prever os preços de ações.</p>
            <h2>Tecnologias Usadas</h2>
            <ul>
                <li>Python</li>
                <li>Pandas</li>
                <li>Scikit-learn</li>
            </ul>
         `,
    },
    {
        id: 'fraud-detection',
        title: 'Detecção de Fraudes',
        description: 'Sistema de detecção de transações fraudulentas usando machine learning.',
        technologies: ['Python', 'XGBoost', 'PostgreSQL'],
        image: "/images/fraud-detection.jpg", // Adicione o caminho da imagem
        content: `
          <h2>Descrição Detalhada</h2>
          <p>Este projeto identifica transações fraudulentas usando modelos de machine learning.</p>
          <h2>Tecnologias Usadas</h2>
          <ul>
            <li>Python</li>
            <li>XGBoost</li>
            <li>PostgreSQL</li>
          </ul>
        `,
    },
    {
        id: 'sentiment-analysis',
        title: 'Análise de Sentimentos',
        description: 'Análise de sentimentos em tweets usando NLP.',
        technologies: ['Python', 'NLTK', 'VADER'],
        image: "/images/sentiment-analysis.jpg", // Adicione o caminho da imagem
        content: `
          <h2>Descrição Detalhada</h2>
          <p>Este projeto identifica transações fraudulentas usando modelos de machine learning.</p>
          <h2>Tecnologias Usadas</h2>
          <ul>
            <li>Python</li>
            <li>Bibliotecas de NLP: NLTK</li>
            <li>Modelos Pré-Treinados: GPT/VADER(para textos curtos como tweets)</li>
            <li>Frameworks de Machine Learning: Scikit-learn</li>
          </ul>
        `,
    },
];