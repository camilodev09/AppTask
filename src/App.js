import { useSelector } from "react-redux";
import Category from "./components/categories/Category";
import Footer from "./components/Footer";
import InputForm from "./components/InputForm";
import logoletra from './assets/logoletra.svg';

function App() {
  const todosItem = useSelector((state) => state.todos.todosList);

  return (
    <div
      className="w-full min-h-screen pt-4 font-bodyFont bg-gradient-to-t from-purple-800 blue-600 to-purple-300 text-white px-4 flex flex-col gap-10 justify-center items-center rounded-xl
       "
    >
     <div className="w-[350px] flex">
     <img src={logoletra} alt="apptasker" className="w-full" />

     </div>

     
    
      {todosItem.length > 0 ? <Category /> : ""}
      <div className="w-full lgl:w-[850px] h-full  bg-bodyColor p-4 lgl:p-10 flex flex-col gap-10 rounded-xl">
        <InputForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
