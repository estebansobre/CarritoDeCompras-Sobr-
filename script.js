
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function agregarAlCarrito(nombre, precio, imagen) {
    const producto = { nombre, precio, imagen }; 
    carrito.push(producto); 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    
    mostrarMensaje(`${nombre} ha sido agregado al carrito.`); 
    mostrarCarrito(); 
}

function mostrarMensaje(texto) {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = texto; 
}


function mostrarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = ''; 

    let total = 0; 
    
    carrito.forEach((producto, index) => {
        const li = document.createElement('li'); 
        li.textContent = `${producto.nombre} - $${producto.precio}`;

        
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        li.appendChild(img); 
    
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index); 
        li.appendChild(botonEliminar);         
        listaCarrito.appendChild(li);
        total += producto.precio; 
    });

    document.getElementById('total').textContent = `Total: $${total}`; 
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1); 
    localStorage.setItem('carrito', JSON.stringify(carrito)); 
    mostrarCarrito(); 
}


mostrarCarrito();
