import { useState } from "react";
import SearchBar from "../components/searchbar";

function Personajes() {
    const personajes = [
        { name: "Naruto Uzumaki", rank: "Genin", jutsus: "Rasengan, Kage Bunshin, Modo Sabio", clan: "Uzumaki", image: "src/assets/naruto-removebg-preview.png" },
        { name: "Sasuke Uchiha", rank: "Ninja Errante", jutsus: "Sharingan, Chidori, Amaterasu", clan: "Uchiha", image: "https://www.pngplay.com/wp-content/uploads/12/Sasuke-Uchiha-PNG-HD-Quality.png" },
        { name: "Sakura Haruno", rank: "Jonin", jutsus: "Fuerza sobrehumana, Ninjutsu médico", clan: "Haruno", image: "src/assets/sakura-png-removebg-preview.png" },
        { name: "Kakashi Hatake", rank: "Hokage", jutsus: "Sharingan, Raikiri, Estratega", clan: "Hatake", image: "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2023/07/kakashi-png.png?resize=600%2C891&ssl=1" },
        { name: "Itachi Uchiha", rank: "Anbu", jutsus: "Mangekyou Sharingan, Tsukuyomi, Amaterasu", clan: "Uchiha", image: "src/assets/itachi-removebg-preview.png" },
        { name: "Gaara", rank: "Kazekage", jutsus: "Manipulación de Arena, Escudo de Arena", clan: "Sabaku", image: "src/assets/gaara-removebg-preview.png" },
        { name: "Minato Namikaze", rank: "Hokage", jutsus: "Rasengan, Dios del Trueno Volador", clan: "Namikaze", image: "src/assets/minato.png" },
        { name: "Jiraiya", rank: "Sannin", jutsus: "Modo Sabio, Rasengan", clan: "Desconocido", image: "src/assets/jiraiya.png" },
        { name: "Tsunade", rank: "Hokage, Sannin", jutsus: "Regeneración Mitótica, Fuerza sobrehumana", clan: "Senju", image: "src/assets/tsunade (1).png" },
        { name: "Orochimaru", rank: "Sannin", jutsus: "Jutsus prohibidos, Manipulación de serpientes", clan: "Desconocido", image: "src/assets/orochimaru.png" }
    ];

    const [filteredPersonajes, setFilteredPersonajes] = useState(personajes);

    const handleSearch = (query) => {
        const filtered = personajes.filter(personaje =>
            personaje.name.toLowerCase().includes(query.toLowerCase()) ||
            personaje.jutsus.toLowerCase().includes(query.toLowerCase()) ||
            personaje.rank.toLowerCase().includes(query.toLowerCase()) ||
            personaje.clan.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredPersonajes(filtered);
    };

    return (
        <div className="mt-40 ml-5 mr-5">
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {filteredPersonajes.length > 0 ? (
                    filteredPersonajes.map((personaje, index) => (
                        <div key={index} className="max-w-sm bg-white border border-orange-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-orange-400">
                            <a href="#">
                                <img className="rounded-t-lg hover:scale-125 transition-transform duration-300 size-96" src={personaje.image} alt={personaje.name} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{personaje.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{personaje.jutsus}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{personaje.clan}</p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{personaje.rank}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No se encontraron personajes</p>
                )}
            </div>
        </div>
    );
}

export default Personajes;
