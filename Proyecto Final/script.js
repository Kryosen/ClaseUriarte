//Menu de Inicio de Juego
/*1- Mostrar un menu con varias opciones
  2- El usuario tiene que selecionar a que menu deberia entrar
  3- Mostrar el nuevo menu con las opciones
  */

////////////  MENU DEL JUEGO  //////////////////

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

/////////// FUNCIONES ///////////////

function menu() {
  alert("Bienvenido al mundo de Pokemon");
  opciones = prompt("Pokémon Red Online\n Start \n PokeDex \n Options \n Exit");

  while (
    opciones != "Start" &&
    opciones != "Options" &&
    opciones != "PokeDex" &&
    opciones != "Exit"
  ) {
    opciones = prompt(
      "Selecciona una opcion correcta.\n Start \n PokeDex \n Options \n Exit"
    );
  }

  switch (opciones) {
    case "Start":
      welcomePage();
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

  function welcomePage() {
    // GUARDANDO DATA EN LOCAL STORAGE CON JASON
    if (localStorage.getItem("nombre") && localStorage.getItem("bienvenida")) {
      const nombre = document.getElementById("nombre");
      nombre.innerHTML = `Hola nuevamente <span>${JSON.parse(
        localStorage.getItem("nombre")
      )}</span>!`;
      const bienvenida = document.getElementById("bienvenida");
      bienvenida.innerText = `${JSON.parse(
        localStorage.getItem("bienvenida")
      )} de vuelta al mundo de Pokémon`;
    } else {
      const nombre = document.getElementById("nombre");
      nombre.innerHTML = `Hola <span>${requestNombre()}</span>!`;
      const bienvenida = document.getElementById("bienvenida");
      bienvenida.innerText = `${requestIdentidad()} al mundo de Pokémon`;
    }
  }

  function requestNombre() {
    let nombre = prompt("Cual es tu nombre?");
    localStorage.setItem("nombre", JSON.stringify(nombre));
    return nombre;
  }

  function requestIdentidad() {
    let identidad =
      prompt("Eres un chico o una chica?") === "chico"
        ? "Bienvenido"
        : "Bienvenida";
    localStorage.setItem("bienvenida", JSON.stringify(identidad));
    return identidad;
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

/////////////  Llamado de la funcion menu() //////////////////

///////////////////// DOM /////////////////////

function initPokedex() {
  for (let i = 0; i <= 8; i++) {
    //////  SET IMAGE TO THE CONTAINER
    let pokeIMG = document.getElementById(`imagen${i + 1}`);
    pokeIMG.style.setProperty(
      "background-image",
      `url(Images/Pokedex/${i + 1}.png)`
    );
    ////////////////// Creando ELEMENTO
    let padre = document.getElementById(`contenedorPoke${i + 1}`);

    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedorHeader");

    contenedor.innerHTML = `<h2 class="border border-dark rounded"> ${
      pokemons[i].nombre
    }</h2>
                            <h4 style= "background-image: linear-gradient(90deg,${colorTipo()}
                              )"> Tipo: ${pokemons[i].tipo}</h4>
                            <h5> Numero: ${pokemons[i].id}</h5>
                            <h5> Descripcion: ${pokemons[i].descripcion}</h5>`;

    padre.appendChild(contenedor);

    // ////////   SET DATA TO CONTAINER
    // let pokeName = document.getElementById(`pokemonName${i + 1}`);
    // pokeName.innerText = pokemons[i].nombre;

    // let tipo = document.createElement("h4");
    // tipo.innerHTML = "";

    function colorTipo() {
      if (pokemons[i].tipo.length === 1) {
        let tipo1 = pokemons[i].tipo[0];
        switch (tipo1) {
          case "Fuego":
            return `hsl(0deg 100% 48%) 1%,
            hsl(0deg 100% 48%) 43%,
            hsl(0deg 100% 48%) 50%,
            hsl(0deg 100% 48%) 51%,
            hsl(0deg 100% 48%) 51%,
            hsl(0deg 100% 48%) 49%,
            hsl(0deg 100% 48%) 49%,
            hsl(0deg 100% 48%) 50%,
            hsl(0deg 100% 48%) 57%,
            hsl(0deg 100% 48%) 99%`;
            break;
          case "Agua":
            return ` hsl(213deg 100% 55%) 1%,
            hsl(213deg 100% 55%) 43%,
            hsl(213deg 100% 55%) 50%,
            hsl(213deg 100% 55%) 51%,
            hsl(213deg 100% 55%) 51%,
            hsl(213deg 100% 55%) 49%,
            hsl(213deg 100% 55%) 49%,
            hsl(213deg 100% 55%) 50%,
            hsl(213deg 100% 55%) 57%,
            hsl(213deg 100% 55%) 99%`;
          default:
            break;
        }
      } else if (pokemons[i].tipo.length === 2) {
        let tipo1 = pokemons[i].tipo[0];
        let tipo2 = pokemons[i].tipo[1];
        switch ((tipo1, tipo2)) {
          case ("Planta", "Veneno"):
            return `hsl(129deg 100% 26%) 1%,
            hsl(132deg 46% 34%) 43%,
            hsl(143deg 29% 36%) 50%,
            hsl(168deg 15% 37%) 51%,
            hsl(224deg 12% 41%) 51%,
            hsl(260deg 19% 44%) 49%,
            hsl(272deg 30% 44%) 49%,
            hsl(278deg 42% 43%) 50%,
            hsl(282deg 58% 42%) 57%,
            hsl(287deg 100% 35%) 99%`;
            break;
          case ("Fuego", "Volador"):
            return `hsl(0deg 100% 48%) 1%,
            hsl(357deg 77% 61%) 43%,
            hsl(355deg 60% 65%) 50%,
            hsl(350deg 41% 67%) 51%,
            hsl(335deg 20% 68%) 51%,
            hsl(233deg 12% 71%) 49%,
            hsl(199deg 37% 71%) 49%,
            hsl(192deg 60% 70%) 50%,
            hsl(189deg 82% 68%) 57%,
            hsl(187deg 100% 65%) 99%`;
        }
      }
    }
  }
}
