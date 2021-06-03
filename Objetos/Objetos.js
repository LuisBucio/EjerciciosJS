var persona = {
    nombre: ['Luis'],
    apellido: ['Martinez','Bucio'],
    edad: 27,
    saludar : function () {
      alert('Hola, mi nombre es ' + this.nombre + ' ' + this.apellido[0] +  this.apellido[1] + '.');
    },
    edades: function() {
      alert('Hola, tengo '+ this.edad + 'años. ');
    }
  };

  persona.bio();
  persona.edades(); 