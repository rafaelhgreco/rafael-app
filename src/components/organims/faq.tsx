import { Accordion } from "../organims/accordion";

const faqData = [
    {
        question: "Como funciona o atomic design?",
        answer: "O Atomic Design é uma metodologia para criar sistemas de design hierárquicos e reutilizáveis, compostos por átomos, moléculas, organismos, templates e páginas.",
    },
    {
        question: "O que são dumb components?",
        answer: "Dumb components, também conhecidos como presentational components, são componentes que apenas recebem dados e os exibem, sem lógica de negócios ou estado interno.",
    },
    {
        question: "Como usar styled components com Emotion?",
        answer: "Para usar styled components com Emotion, você precisa importar a função styled do pacote @emotion/styled e usá-la para criar componentes estilizados.",
    },
];

function App() {
    return (
        <div>
            <Accordion items={faqData} />
        </div>
    );
}

export default App;
