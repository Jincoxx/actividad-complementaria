
let totalGastos = 0;
let totalPagos = 0;
let saldo = 0;


const transactionForm = document.getElementById('transaction-form');
const totalGastosElement = document.getElementById('total-gastos');
const totalPagosElement = document.getElementById('total-pagos');
const saldoElement = document.getElementById('saldo');


const handleFormSubmit = (e) => {
    e.preventDefault();

    const type = e.target.type.value; // Capturar el tipo de transacción (gasto o pago)
    const amount = parseFloat(e.target.amount.value); // Capturar el monto
    const description = e.target.description.value; // Capturar la descripción (aunque no la usamos aquí)

    addTransaction(type, amount);
    updateSummary();

    e.target.reset(); 
};

// Función para agregar una transacción
const addTransaction = (type, amount) => {
    if (type === 'gasto') {
        totalGastos += amount;
    } else if (type === 'pago') {
        totalPagos += amount;
    }
    saldo = totalPagos - totalGastos;
};

// Función para actualizar el resumen financiero en el DOM
const updateSummary = () => {
    totalGastosElement.textContent = `$${totalGastos.toFixed(2)}`;
    totalPagosElement.textContent = `$${totalPagos.toFixed(2)}`;
    saldoElement.textContent = `$${saldo.toFixed(2)}`;
};

// Agregar el evento 'submit' al formulario
transactionForm.addEventListener('submit', handleFormSubmit);
