# Taller 2 - API REST
## Arquitectura Orientada a Microservicios

A continuación se presentarán los 5 retos que fueron cumplidos.

### Reto 1
- Diseñe la información a almacenar para API de Autenticación.
- Seleccione el motor de base de datos que desea usar.
- Despliegue la base de datos seleccionada en un contenedor y cree los elementos
necesarios para almacenar la información.
- Verifique el correcto despliegue y configuración de su sistema de almacenamiento de
datos.

---

### Reto 2
- Cree un Docker compose que despliegue un contenedor con su sistema de base de
datos.
- Cree una aplicación en el lenguaje de programación de su preferencia capaz de
interactuar con la base de datos creada.
- Despliegue la aplicación en un contenedor diferente a su base de datos y adicionelo al
docker compose.

---

### Reto 3
- Diseñe un conjunto de operaciones REST que le permitan gestionar los usuarios. El
diseño debe describir cada una de las operaciones y para cada operación se debe establecer:
    - Ruta (path)
    - Método HTTP a usar (GET,POST,PUT,DELETE,PATCH...)
    - Parámetros y/o datos requeridos. Debe incluir el formato, si es obligatorio o no, su tipo, si es obligatorio o no, y todos aquellos elementos que faciliten su comprensión.
    - Posibles respuestas (código HTTP de respuesta, descripción de su contenido).
    - Tenga en cuenta los elementos de seguridad donde sean necesarios.
- Basado en el diseño genere un archivo de especificación OPEN API.

---

### Reto 4
- Desarrolle en su aplicación el método de registro de usuario.
- Desarrolle en su aplicación el método de login de usuario, como respuesta se debe
generar un token en caso de que los datos sean validos, en caso contrario deberá
generar respuestas con los errores correspondiente.
- Desarrolle en su aplicación el método de actualización de la clave del usuario, dicho
método debe estar protegido, ya que dicha acción la debe realizar un usuario
autenticado sobre sus propios datos.
- Desarrolle un método que permita recuperar la clave de un usuario que la ha perdido.

---

### Reto 5
- Desarrolle los demás métodos de su API.
- Desarrolle un método que permita listar todos los usuarios del sistema, dicho método
deberá hacer uso de paginación.
