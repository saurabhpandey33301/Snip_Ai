
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
       <div className="md:px-16 lg:px-24 xl:px-36">
           {/* Header */}
           <Header />
           
           {/* Hero */}
           <Hero />
           <ToastContainer />
       </div>
  );
}
