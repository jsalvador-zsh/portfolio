---
author: Juan Salvador
pubDatetime: 2024-10-17T16:49:20.519Z
modDatetime: 2024-10-17T16:49:20.519Z
title: ¿Cómo configurar un servidor de correos en Odoo?
slug: servidor-correo-odoo
featured: true
draft: false
tags:
  - Odoo
  - Correo
  - Gmail
description: Aprende a configurar el servidor de correo entrante en Odoo para recibir mensajes en tus módulos.
---

En este artículo aprenderás a configurar el servidor de correo entrante en Odoo 16, lo que te permitirá recibir mensajes directamente en tus módulos y mejorar la comunicación dentro de la plataforma.

## Table of contents

## Configuración inicial del servidor de correo
Para comenzar, debemos ir al módulo Configuración en Odoo y buscar la opción Servidores de correo. Aquí es donde se configurarán tanto los servidores de correo entrante como los salientes.

### Pasos
- Dirígete a Ajustes > Técnico > Correo electrónico > Servidores de correo.
- Haz clic en Crear para agregar un nuevo servidor de correo entrante.

![Configuracion de correo](/blog/post-5/configuracion-correo.webp)

## Parámetros de configuración

Al agregar un nuevo servidor de correo, es importante ingresar correctamente los parámetros proporcionados por tu proveedor de correo electrónico. Para este ejemplo, vamos a configurar un servidor de correo de Gmail:

### Parámetros
- Nombre del servidor: imap.nombre-servidor
- Puerto: 993
- SSL/TLS: Activado
- Autenticación requerida: Sí
- Nombre de usuario: Tu dirección de correo electrónico
- Contraseña: La contraseña generada por tu proveedor (en el caso de Gmail, deberás usar una contraseña de aplicaciones).

![Parámetros de correo](/blog/post-5/parametros-correo.webp)

## Probar la conexión
Después de ingresar los detalles del servidor de correo, puedes hacer clic en el botón Probar conexión para asegurarte de que Odoo pueda conectarse al servidor de correo. Si todo está configurado correctamente, deberías ver un mensaje de éxito.

![Confirmación de correo](/blog/post-5/confirmacion-correo.webp)

```python
from odoo import models, api

class MailServer(models.Model):
    _inherit = 'fetchmail.server'

    @api.model
    def test_connection(self):
        # Lógica para probar la conexión del servidor
        return True
## Configurar el correo en un módulo específico
```

Si deseas que los correos recibidos se asocien a un módulo específico, como el de Proyectos o Contactos, puedes configurar las acciones automáticas en la pestaña de Acciones dentro del servidor de correo. Aquí podrás especificar cómo deben manejarse los correos recibidos.

## Conclusión

Configurar un servidor de correo en Odoo es fundamental para optimizar la gestión de comunicaciones en tu empresa. Al seguir estos pasos, podrás recibir y gestionar correos electrónicos directamente desde tu instancia de Odoo, integrando esta funcionalidad con tus módulos y flujos de trabajo existentes.

