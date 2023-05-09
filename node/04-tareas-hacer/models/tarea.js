const {v4: uuidV4} = require("uuid")

class Tarea {
  id = '';
  description = '';
  completadoEn = null;

  constructor(desc) {
    this.id = uuidV4();
    this.description = desc;
    this.completadoEn = null;
  }
}

module.exports = Tarea;