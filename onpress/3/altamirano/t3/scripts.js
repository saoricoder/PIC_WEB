

function submitForm() {
  
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var type = document.getElementById('type').value;
    var action = document.getElementById('action').value;

   
    if (name === '' || age === '' || type === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    var summary = '<p><strong>Nombre de la Mascota:</strong> ' + name + '</p>';
    summary += '<p><strong>Edad de la Mascota:</strong> ' + age + ' años</p>';
    summary += '<p><strong>Tipo de Mascota:</strong> ' + type + '</p>';

 
    switch(action) {
        case 'innerHTML':
            document.getElementById('summary').innerHTML = summary;
            break;
        case 'write':
            document.write('<h2>Resumen de Adopción</h2>' + summary);
            break;
        case 'alert':
            alert('Resumen de Adopción:\n\n' + 'Nombre de la Mascota: ' + name + '\nEdad de la Mascota: ' + age + '\nTipo de Mascota: ' + type);
            break;
        case 'console':
            console.log('Resumen de Adopción:', { name: name, age: age, type: type });
            break;
        default:
            alert('Acción no válida.');
            break;
    }
}

