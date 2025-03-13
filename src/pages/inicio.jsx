import { Link } from "react-router-dom";

function inicio(){
    return(
        <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center mt-15" style={{ backgroundImage: "url('src/assets/Naruto-fondo.jpg')" }}>
      <h2 className="text-5xl font-bold text-yellow-200 drop-shadow-lg bg-opacity-50 p-4 rounded-lg">¡Bienvenido a la FanPage de Naruto!</h2>
      <p className="text-xl text-white mt-4  bg-opacity-50 p-2 rounded">Descubre todo sobre el mundo ninja.</p>
      <Link to="/curiosidades" className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400">Ver Curiosidades</Link>
    </div>
    )
}

export default inicio;