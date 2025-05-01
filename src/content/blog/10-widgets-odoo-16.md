---
author: Juan Salvador
pubDatetime: 2024-10-10T15:22:00Z
modDatetime: 2024-10-10T09:12:47.400Z
title: Widgets en Odoo para mostrar interfaces más atractivas 📈
slug: widgets-odoo-16
featured: true
draft: true
tags:
  - Odoo
  - XML
  - Widget
description: Descubre cómo mejorar la apariencia y funcionalidad de las interfaces en Odoo 16 utilizando widgets esenciales.
---

Cuando desarrollamos módulos en Odoo, el archivo `__manifest__.py` es un elemento fundamental. Este archivo contiene la configuración y metadatos del módulo, los cuales son necesarios para que Odoo pueda instalarlo y reconocerlo correctamente.

## Table of contents

## Email
El widget de email permite mostrar una dirección de correo como un enlace clicable. Es útil cuando deseas que el usuario pueda enviar correos electrónicos directamente desde Odoo con solo un clic.

<img src="/blog/post-3/widget-email.webp">

Se utiliza comúnmente en el módulo de Contactos o Usuarios para campos como "correo electrónico".


```html
<field name="email" widget="email"/>
```

## Monetary
El widget monetario muestra valores numéricos formateados como montos de dinero, permitiendo la selección automática de divisa.

<img src="/blog/post-3/widget-monetary.webp">

Es frecuente en módulos como Facturación o Ventas, donde se manejan precios y montos.

```html
<field name="amount_total" widget="monetary"/>
```

## Priority
Este widget permite visualizar un sistema de prioridad con estrellas o colores, útil para indicar la importancia de una tarea o registro.

<img src="/blog/post-3/widget-priority.webp">

Se puede encontrar en el módulo de Proyectos o Tareas para indicar la prioridad de una tarea.

```html
<field name="priority" widget="priority"/>
```

## State selection
El widget de estado muestra un botón desplegable o etiquetas de estado, lo cual facilita la transición entre diferentes etapas de un proceso.

<img src="/blog/post-3/widget-state.webp">

Es común en el módulo de Ventas o CRM para manejar estados como "nuevo", "confirmado", "cancelado".

```html
<field name="state" widget="state_selection"/>
```

## URL
Este widget convierte un campo de texto en un enlace clicable, permitiendo a los usuarios acceder a enlaces externos directamente desde el formulario.

<img src="/blog/post-3/widget-url.webp">

Se utiliza en módulos como Marketing o Proyectos, para proporcionar enlaces a recursos externos.

```html
<field name="website" widget="url"/>
```