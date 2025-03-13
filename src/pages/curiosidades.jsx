import { Link } from "react-router-dom";

function curiosidades(){
    
    const curiosidades = [
        "Naruto iba a llamarse 'Konohamaru' en los primeros borradores.",
        "El ramen favorito de Naruto existe en la vida real y se llama Ichiraku Ramen.",
        "Itachi se convirtió en Anbu a los 13 años.",
        "Madara Uchiha originalmente no iba a revivir en la historia.",
        "Los apellidos de los personajes tienen significados relacionados con su personalidad."
      ];
    
      return (
        <div className="min-h-screen p-8 mt-40 bg-white  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <h2 className="text-4xl font-bold text-center mb-6">Curiosidades de Naruto</h2>
          <ul className="max-w-2xl mx-auto space-y-4">
            {curiosidades.map((fact, index) => (
              <li key={index} className=" bg-white border border-orange-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-orange-400 dark:text-white p-4 ">{fact}</li>
            ))}
          </ul>
          <div className="text-center mt-8">
            <Link to="/" className="px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-400">Volver al Inicio</Link>
          </div>
        </div>
      );
}

export default curiosidades;