import "./styles.css";

document.getElementById("app").innerHTML = `
  Ejemplo jugos naturales
`;

//HOLA

class Jugos {
  constructor(tamaño, ingredientes) {
    this.tamaño = tamaño;
    this.ingredientes = ingredientes;
  }

  preparar() {
    console.log(
      `Preparando jugo  ${this.tamaño}, Ingredientes: ${this.ingredientes}`
    );
    return this;
  }

  servir() {
    console.log("El jugo se sirve");
    console.log("El jugo sale de servirse");
    return this;
  }

  empacar() {
    console.log("Empacando el jugo...");
    console.log("EL jugo  se está enviando");
    return this;
  }
}

//Jamón y Queso
/*const pizzaJamonQueso = new Pizza('Masa gruesa', 'Mediana', ['Jamón', 'Queso', 'Salsa']);
console.log(pizzaJamonQueso.preparar());
console.log(pizzaJamonQueso.hornear());
console.log(pizzaJamonQueso.empacar());*/

//Frijoles
/*const pizzaFrijoles = new Pizza("Masa delgada", "Familiar", [
  "Frijoles",
  "Chorizo",
  "Salsa"
]);
console.log(pizzaFrijoles.preparar());
console.log(pizzaFrijoles.hornear());
console.log(pizzaFrijoles.empacar());*/

class Combo extends Jugos {
  constructor(tamaño, ingredientes, combo, fruta) {
    super(tamaño, ingredientes, combo, fruta);
    this.tamaño = tamaño;
    this.Combo = combo;
    this.fruta = fruta;
    this.ingredientes = ingredientes;
  }

  elegirCombo() {
    this.preparar();
    this.servir();
    this.empacar();

    console.log(
      `Pedido: \nCombo: ${this.combo}\nTamaño: ${this.tamaño}\nIngredientes: ${this.ingredientes}\nFruta: ${this.fruta}`
    );
    return this;
  }
}

const Combo1 = new Combo(
  "jugo personal+fruta deseada",
  "Familiar",
  "jugo para cada uno en leche o agua",
  ["jugo doble", "manzana con leche"],
  1,
  "Agua",
  "Leche",
  2
);
console.log(Combo1.elegirCombo());
