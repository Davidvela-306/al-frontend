# Componente Frontend - Sistema de validación de Pico y Placa

## Autor:

[@David Vela](https://github.com/Davidvela-306)

---
## Descripción

Componente UI que permite interactuar con un formulario el cual valida los datos para conocer en qué dias puede circular su vehículo 🚙.

Recordemos que está validación está basada el la 
[normativa vigente de pico y placa de Quito-Ecuador 2025  ](https://www.amt.gob.ec/index.php/informacion/pico-y-placa/)

---

## Interfacez del sistema
  
  ![Sistema de pico y placa](https://github.com/Davidvela-306/al-frontend/blob/production/public/initial_state.png?raw=true)

  ![Sistema de pico y placa](https://github.com/Davidvela-306/al-frontend/blob/production/public/loading.png?raw=true)

  ![Sistema de pico y placa](https://raw.githubusercontent.com/Davidvela-306/al-frontend/refs/heads/production/public/succes.png)

  ![Sistema de pico y placa](https://github.com/Davidvela-306/al-frontend/blob/production/public/no_succes.png?raw=true)

  ![Sistema de pico y placa](https://github.com/Davidvela-306/al-frontend/blob/production/public/warning.png?raw=true)


---

## 🛠 Stack Tecnológico

#### Cliente (Frontend)

- **AngularJs**

#### Servidor (Backend)

- **Java Spring boot**

---

## 📄 Manual de usuario

A continuación, los pasos para ejecutar el componente frontend en local y su configuración para producción

---

## 🚀 Instalación y Ejecución

### 🔧 Requisitos

[Docker documentation](https://docs.docker.com/)

* Tener Docker Desktop instalado y abierto

* Crear el archivo`src\environments\environment.ts` para producción con la url a la API de consumo
  
Dev mode: `src\environments\environment.development.ts`

Production mode: `src\environments\environment.development.ts`

Example:
```typescript
export const environment = {
  production: false, //recuerda cambiar a true para producción
  apiUrl: 'http://localhost:8080/api',
};

```

### 🔹 Instalación

#### Clonar el repositorio:

`git clone https://github.com/Davidvela-306/al-frontend.git`

`cd ./al-frontend`

`git checkout production`

`docker build -t frontend .`
`docker run --rm -d -p 80:80/tcp frontend:latest`

Ahora podrá visualizar su web en [localhost](http://localhost/)

> 💡 **Nota:** Asegúrate de configurar correctamente las variables de entorno como lo explicamos anteriormente

---

## 📩 Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

📧 **Email:** davidvela306tr@gmail.com  
🔗 **GitHub:** [David Vela](https://github.com/Davidvela-306)

---

¡Gracias por visitar este proyecto! 🚀
