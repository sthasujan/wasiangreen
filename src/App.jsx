import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Pomelo from "./pages/Pomelo";
import Customers from "./pages/Customers";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import { SAMPLE_ENQUIRIES, SAMPLE_QUESTIONS } from "./data/siteData";
import { runPrototypeTests } from "./utils/tests";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [enquiries, setEnquiries] = useState(SAMPLE_ENQUIRIES);
  const [questions, setQuestions] = useState(SAMPLE_QUESTIONS);

  const addEnquiry = (enquiry) => setEnquiries((items) => [enquiry, ...items]);
  const addQuestion = (question) => setQuestions((items) => [question, ...items]);

  const testResults = useMemo(() => runPrototypeTests(), []);
  console.table(testResults);

  const page = useMemo(() => {
    switch (currentPage) {
      case "home": return <Home setCurrentPage={setCurrentPage} />;
      case "story": return <Story />;
      case "pomelo": return <Pomelo setCurrentPage={setCurrentPage} />;
      case "customers": return <Customers setCurrentPage={setCurrentPage} />;
      case "gallery": return <Gallery />;
      case "faqs": return <FAQs onAddQuestion={addQuestion} />;
      case "contact": return <Contact onAddEnquiry={addEnquiry} />;
      case "admin": return <Admin enquiries={enquiries} setEnquiries={setEnquiries} questions={questions} setQuestions={setQuestions} />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage, enquiries, questions]);

  return (
    <div className="app">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{page}</main>
      <Chatbot setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
