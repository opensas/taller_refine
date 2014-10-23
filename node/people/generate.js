var _ = require('lodash');
var fs = require('fs');

var cant = 10000;

var nombres = [
  'juan', 'abel', 'jose', 'julio', 'julián', 'fidel', 'carlos', 'rodolfo',
  'federico', 'jonás', 'eric', 'néstor', 'martín', 'andrés', 'gustavo', 'lucas',
  'jorge', 'pablo', 'matias', 'ernesto', 'leandro', 'sebastian', 'juan',
  'benjamin', 'vicente', 'martin', 'matias', 'joaquin', 'agustin', 'cristobal',
  'maximiliano', 'sebastian', 'tomas', 'diego', 'jose', 'nicolas', 'felipe',
  'lucas', 'alonso', 'bastian', 'juan', 'gabriel', 'ignacio', 'francisco',
  'renato', 'maximo', 'mateo', 'javier', 'daniel', 'luis', 'gaspar', 'angel',
  'fernando', 'carlos', 'emilio', 'franco', 'cristian', 'pablo', 'santiago',
  'esteban', 'david', 'damian', 'jorge', 'camilo', 'alexander', 'rodrigo',
  'amaro', 'luciano', 'bruno', 'alexis', 'victor', 'thomas', 'julian'
];


var apellidos = [
  'mango', 'sanchez', 'perez', 'fanon', 'castro', 'ramirez', 'casullo',
  'castro', 'guevara', 'antonello', 'fabricci', 'licastro', 'centenera', 'viey',
  'rivadavia', 'nicastro', 'sacado', 'fertuchelli', 'matas', 'mactas', 'lupo',
  'gonzalez', 'alsina', 'marchet', 'orondo', 'riglos', 'amenabar',
  'garcía', 'fernández', 'gonzález', 'rodríguez', 'lópez', 'martínez', 'sánchez',
  'pérez', 'martín', 'gómez', 'gonzález', 'rodríguez', 'gómez', 'fernández',
  'lópez', 'martínez', 'garcía', 'sánchez', 'gonzález', 'muñoz',
  'rojas', 'díaz', 'pérez', 'soto', 'contreras', 'silva', 'martínez', 'sepúlveda',
  'rodríguez', 'flores', 'hernández', 'garcía', 'martínez', 'lópez', 'gonzález',
  'gómez', 'pérez', 'sánchez', 'cardona', 'rodríguez', 'gutierrez', 'aguirre',
  'alzate', 'aristizabal', 'mendoza', 'londoño', 'castañeda', 'montoya'
];

var titulos = [
  'sr.', 'doctor', 'Dr.', 'prof.', 'ing.', 'ing', 'señor', 'ingeniero',
  'licenciado', 'lic', 'lic.', 'Lic.'
];

var nacionalidad = [
  '  arg', ' argentina', '  argentino   ', 'ar', ' argentno', 'argentino',
  '  chileno', ' chilena', '  chi   ', 'ch', ' chileno', 'Chileno',
  '  uruguayo', ' Uruguayo', '  uy   ', 'uy', ' uruguay', 'Uruguay',
  '  brasilero', ' brasileño', '  br   ', 'brasil', ' Brasil', 'brazil',
  '  --', ' otros', '  Otros ', 'otros', '--'
];


var edadDesde = 18;
var edadHasta = 65;

var random = function(from, to) {
  from = from === undefined ? 0 : from;
  to = to === undefined ? 1 : to;
  var max = to - from +1;
  return from + parseInt(Math.floor(Math.random() * max));
};

var pick = function(array, count) {
  count = count || 1;
  return _.shuffle(array).slice(0, count);
};

// add random separator
var randomizeSeps = function(text) {

  var rsep = function() {
    // en el 90% de los casos retorno ningun espacio
    if (ifRandom(0,95)) return '';
    return Array(random(1, 4)).join(' ');
  };

  // first normalize spaces
  text = text.split(' ').filter(function(n){ return n != '' }).join(' ');

  words = text.split(' ');

  text = '';

  words.forEach(function(word) {
    text += word + ' ' + rsep();
  });

  text = rsep() + text + rsep();

  return text;
};

var toTitleCase = function(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

var randomNombre = function() {
  var rndNombres = pick(nombres, 2);

  var titulo = '';
  var primerNombre = rndNombres[0];
  var segundoNombre = '';
  var apellido = pick(apellidos, 1);

  // solo el 20% tiene titulo
  if (ifRandom(0.2)) titulo = pick(titulos, 1);

  // por ahora sin segundo nombre
  // solo el 40% tiene segundo nombre
  // if (ifRandom(0.4)) segundoNombre = rndNombres[1];

  var nombre = '';

  if (ifRandom()) {
    nombre = titulo + ' ' + primerNombre + ' ' + segundoNombre + ' ' + apellido;
  } else {
    nombre = titulo + ' ' + apellido + ', ' + primerNombre + ' ' + segundoNombre;
  }

  if (ifRandom(0.2))nombre = nombre.toUpperCase();
  if (ifRandom(0.3)) nombre = toTitleCase(nombre);

  return randomizeSeps(nombre);
};


var ifRandom = function(percent) {
  percent = percent || 0.5;
  return Math.random() < percent;
};

var randomPersona = function(id) {
  return {
    // id:             id,
    edad:           random(edadDesde, edadHasta),
    nombre:         randomNombre(),
    nacionalidad:   pick(nacionalidad, 1)[0]
  };
};

var generate = function(max) {
  var data = [];

  for (var i = 0; i < max; i++) {
    data.push(randomPersona(i+1));
  }
  return data;
};

var out = JSON.stringify(generate(cant), undefined, 2);

fs.writeFileSync('../datasets/personas.json', out);

//module.exports = generate(cantClientes);

/*
module.exports = [
  { id: 1,    nombre: 'juan',       apellido: 'mango',      edad: 22 },
  { id: 2,    nombre: 'abel',       apellido: 'sanchez',    edad: 23 },
  { id: 3,    nombre: 'jose',       apellido: 'perez',      edad: 43 },
  { id: 4,    nombre: 'julio',      apellido: 'fanon',      edad: 59 },
  { id: 5,    nombre: 'julian',     apellido: 'castro',     edad: 28 },
  { id: 6,    nombre: 'fidel',      apellido: 'ramirez',    edad: 13 },
  { id: 7,    nombre: 'carlos',     apellido: 'casullo',    edad: 29 },
  { id: 8,    nombre: 'rodolfo',    apellido: 'gonzalez',   edad: 62 },
  { id: 9,    nombre: 'jorge',      apellido: 'alsina',     edad: 83 },
  { id: 10,   nombre: 'pablo',      apellido: 'rivadavia',  edad: 53 },
  { id: 11,   nombre: 'matias',     apellido: 'orondo',     edad: 93 },
  { id: 12,   nombre: 'ernesto',    apellido: 'riglos',     edad: 77 }
];
*/
