
     function adicionar() {
        document.getElementById('formType').innerHTML = 'Cadastro';
        document.getElementById('btnAdd').classList.add('visually-hidden');
        document.getElementById('cadastro').classList.remove('visually-hidden');
        document.getElementById('formAction').action = '/salvarTipo';
        document.getElementById('nome').value = '';
        document.getElementById('tipoId').value = '';
    }

    function editar(id, nome) {
        document.getElementById('formType').innerHTML = 'Edição';
        document.getElementById('btnAdd').classList.add('visually-hidden');
        document.getElementById('cadastro').classList.remove('visually-hidden');
        document.getElementById('formAction').action = '/salvarTipo';
        document.getElementById('nome').value = nome;
        document.getElementById('tipoId').value = id;
        window.location.href="#start";
    }
    function eliminar(event,id,nome){
        event.preventDefault();
        if(confirm('Confirme a eliminação de '+nome)){
            window.location.href="/eliminarTipo/"+id;
        }
    }
    function ocultarFormAdicionar() {
        document.getElementById('btnAdd').classList.remove('visually-hidden');
        document.getElementById('cadastro').classList.add('visually-hidden');
        document.getElementById('nome').value = '';
    }
    document.addEventListener('DOMContentLoaded', function() {
        // Check if the alert message exists
        var alertElement = document.getElementById('alertMessage');
        
        // If the alert message exists
        if (alertElement) {
            // Set a timeout to remove the alert after 5 seconds (5000 milliseconds)
            setTimeout(function() {
                // Check if the alert element still exists in the DOM
                if (alertElement) {
                    // If it exists, remove it
                    alertElement.remove();
                }
            }, 3000); // Adjust the duration as needed (e.g., 5000 milliseconds for 5 seconds)
        }
    });