---
author: Juan Salvador
pubDatetime: 2024-09-28T15:08:59Z
modDatetime: 2024-10-16T15:09:39.010Z
title: ¿Como definir un archivo __manifest__.py?
slug: como-definir-manifest-odoo
featured: true
draft: false
tags:
  - odoo
  - python
description:
  Cuando desarrollamos módulos en Odoo, el archivo `__manifest__.py` es un elemento fundamental, ya que contiene su configuración y metadatos.
---

## Table of contents

## ¿Qué es el archivo manifest.py?

Es un archivo en formato Python que contiene un diccionario con diversas claves que describen el módulo. 

Aquí un ejemplo básico de un archivo manifest para un módulo de Odoo:

```python
{
    'name': 'Nombre del módulo',
    'version': 'versión de Odoo con la que trabajas',
    'author': 'Tu Nombre o Empresa',
    'website': 'https://tusitioweb.com',
    'category': 'Uncategorized',
    'summary': 'Una breve descripción de lo que hace el módulo.',
    'description': """ 
        Una descripción más detallada de lo que hace tu módulo, 
        características principales, etc.
    """,
    'depends': ['base', 'sale'],
    'data': [
        'views/vistas_del_modulo.xml',
        'security/ir.model.access.csv',
    ],
    'css': ['static/src/css/my.css'],
    'test': [],
    'qweb': ['static/src/qweb_template.xml'],
    'license': 'AGPL-3',
    'installable': True,
    'application': False,
    'auto_install': False,
}
```

## Recomendaciones

En la sección `depends` es importante que revises el árbol de dependencias, especialmente en proyectos con numerosos módulos, ya que si tus módulos dependen unos de otros, la instalación se volverá imposible.

En la sección `data` se debe considerar el orden en el que se llama a los archivos .xml que definen las vistas. Debes seguir el orden en el que se hacen referencia entre sí para asegurar que todo funcione correctamente.