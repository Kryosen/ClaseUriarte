//Menu de Inicio de Juego
/*1- Mostrar un menu con varias opciones
  2- El usuario tiene que selecionar a que menu deberia entrar
  3- Mostrar el nuevo menu con las opciones
  */

////////////  MENU DEL JUEGO  //////////////////

alert("Bienvenido al mundo de Pokemon");

let opciones;
const pokemons = [
  {
    id: 1,
    nombre: "Bulbasaur",
    clasificacion: "Pokémon Semilla",
    descripcion:
      "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
    tipo: ["Planta", "Veneno"],
  },
  {
    id: 2,
    nombre: "Ivysaur",
    clasificacion: "Pokémon Semilla",
    descripcion:
      "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras.",
    tipo: ["Planta", "Veneno"],
  },
  {
    id: 3,
    nombre: "Venusaur",
    clasificacion: "Pokémon Semilla",
    descripcion:
      "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
    tipo: ["Planta", "Veneno"],
  },
  {
    id: 4,
    nombre: "Charmander",
    clasificacion: "Pokémon lagarto",
    descripcion:
      "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
    tipo: ["Fuego"],
  },
  {
    id: 5,
    nombre: "Charmeleon",
    clasificacion: "Pokémon Llameante",
    descripcion:
      "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
    tipo: ["Fuego"],
  },
  {
    id: 6,
    nombre: "Charizard",
    clasificacion: "Pokémon Llameante",
    descripcion:
      "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
    tipo: ["Fuego", "Volador"],
  },
  {
    id: 7,
    nombre: "Squirtle",
    clasificacion: "Pequeño Pokémon Tortuga",
    descripcion:
      "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
    tipo: ["Agua"],
  },
  {
    id: 8,
    nombre: "Wartortle",
    clasificacion: "Pokémon Tortuga",
    descripcion:
      "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
    tipo: ["Agua"],
  },
  {
    id: 9,
    nombre: "Blastoise",
    clasificacion: "Pokémon Armazón",
    descripcion:
      "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
    tipo: ["Agua"],
  },
];

menu();

/////////// FUNCIONES ///////////////

function menu() {
  opciones = prompt("Pokémon Red Online\n Start \n PokeDex \n Options \n Exit");

  while (
    opciones != "Start" &&
    opciones != "Options" &&
    opciones != "PokeDex" &&
    opciones != "Exit"
  ) {
    opciones = prompt(
      "Selecciona una opcion correcta.\n Start \n Options \n Exit"
    );
  }

  switch (opciones) {
    case "Start":
      alert("El juego comienza!");
      break;
    case "Options":
      options();
      break;
    case "PokeDex":
      pokedex();
      break;
    default:
      alert("Nos vemos pronto!");
      break;
  }

  function options() {
    opciones = prompt(
      "Opciones del juego:\n Sound \n Text Speed \n Screen Size\n Exit "
    );
    while (
      opciones != "Sound" &&
      opciones != "Text Speed" &&
      opciones != "Screen Size" &&
      opciones != "Exit"
    ) {
      opciones = prompt(
        "Selecciona una opcion correcta.Opciones del juego:\n Sound \n Text Speed \n Screen Size\n Exit"
      );
    }

    switch (opciones) {
      case "Sound":
        prompt("Selecciona el Volumen con un numero del 1 al 10");
        alert("Volumen guardado!");
        options();
        break;
      case "Text Speed":
        prompt("Selecciona la velocidad del texto:\n 1 \n 2 \n 3");
        alert("Velocidad de texto guardada!");
        options();
        break;
      case "Screen Size":
        prompt(
          "Selecciona el tamaño de la pantalla:\n 720×480 \n 1280x720 \n 1920x1080"
        );
        alert("Tamaño de pantalla guardado!");
        options();
        break;
      default:
        menu();
        break;
    }
  }
}

function pokedex() {
  let opcionesPokemon = Number(prompt("Seleciona el numero de Pokedex"));

  // console.log(pokemons[opcionesPokemon - 1]);
  console.log(pokemons.find((pokes) => pokes.id === opcionesPokemon));
}
