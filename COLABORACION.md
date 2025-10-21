# 🤝 Guía de Colaboración — Proyecto Gestión de Justificantes

Bienvenidos al repositorio del proyecto **Gestión de Justificantes**.  
Este documento explica cómo colaborar correctamente en el proyecto, mantener el código ordenado y evitar conflictos entre miembros.

---

## 🚀 1️⃣ Clonar el repositorio
Cada colaborador debe clonar el proyecto desde GitHub:

```bash
git clone https://github.com/MrSilence0/Gesti-nDeJustificantes.git
```

Luego, entrar al proyecto:
```bash
cd Gesti-nDeJustificantes
```

---

## 🌿 2️⃣ Crear una rama personal o funcional
Antes de modificar código, crea tu propia rama (**branch**) para trabajar sin afectar la principal:

```bash
git checkout -b nombre-rama
```

Ejemplos de nombres de rama:
- `feature-login` → nueva funcionalidad  
- `fix-validacion-form` → corrección de errores  
- `update-estilos` → actualización de CSS o UI  

---

## 🛠️ 3️⃣ Guardar cambios
Cuando termines una parte del trabajo:

```bash
git add .
git commit -m "Descripción breve de los cambios"
```

Ejemplo:
```bash
git commit -m "Agregué validación al formulario de inicio de sesión"
```

Usa mensajes cortos, descriptivos y en **presente** (no en pasado).

---

## ☁️ 4️⃣ Subir tu rama a GitHub
Envía tu rama al repositorio remoto:

```bash
git push origin nombre-rama
```

Ejemplo:
```bash
git push origin feature-login
```

---

## 🔄 5️⃣ Crear un Pull Request (PR)
Una vez subidos los cambios:

1. Entra al repositorio en GitHub.  
2. Verás el botón **“Compare & pull request”**.  
3. Da clic, agrega una descripción breve y crea el *Pull Request*.  
4. El líder del proyecto revisará y aprobará la fusión a `main`.

---

## ⬇️ 6️⃣ Mantener tu rama actualizada
Antes de seguir trabajando, sincroniza tu código con la versión más reciente:

```bash
git checkout main
git pull origin main
git checkout nombre-rama
git merge main
```

Esto evita conflictos de código cuando se combinan ramas.

---

## 🧹 7️⃣ Buenas prácticas
✅ No trabajes directamente sobre `main`.  
✅ Crea una rama nueva para cada cambio importante.  
✅ Escribe mensajes de *commit* claros y concisos.  
✅ Haz *pull* antes de comenzar nuevas tareas.  
✅ Elimina ramas locales y remotas ya fusionadas.  
✅ No subas archivos innecesarios (usa `.gitignore`).

---

## 🧭 8️⃣ Estructura recomendada de ramas
```
main               → código estable y revisado
develop            → integración de nuevas funciones antes de pasar a main
feature/nombre     → nuevas funcionalidades
fix/nombre         → correcciones de errores
hotfix/nombre      → corrección urgente en producción
```

---

## 🧩 9️⃣ Estándares de código (recomendado)
- Usa nombres claros en variables y funciones.  
- Sigue el mismo formato de identación (2 o 4 espacios).  
- No dejes código comentado innecesario.  
- Incluye comentarios breves si el código no es evidente.  
- Revisa tu código antes de subirlo (autoprueba).

---

## 🧠 10️⃣ Comunicación y coordinación
- Usa el apartado de **Issues** en GitHub para asignar tareas o reportar errores.  
- Cada *commit* o *pull request* debe estar relacionado con un issue cuando sea posible.  
- Si haces cambios grandes, comenta con tu equipo antes de subirlos.

---

## 🧾 11️⃣ Archivo `.gitignore`
Asegúrate de tener configurado un archivo `.gitignore` para evitar subir archivos temporales o dependencias.

Ejemplo para proyectos web:
```
node_modules/
dist/
.env
.vscode/
*.log
```

---

## 💬 12️⃣ Contacto
Si tienes dudas o problemas técnicos:
- Consulta con el responsable del repositorio.
- Documenta tu problema en un *issue* para mantener registro.

---

¡Gracias por contribuir! 🙌  
Cada *commit* cuenta para mejorar el proyecto **Gestión de Justificantes**.
