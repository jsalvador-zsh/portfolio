---
author: Juan Salvador
pubDatetime: 2024-08-19T15:22:00Z
modDatetime: 2024-08-19T09:12:47.400Z
title: ¿Cómo agregar una nueva función al botón de acción?
slug: agregar-boton-accion
featured: true
draft: false
tags:
  - Odoo
  - ERP
  - Python
  - XML
description: Aprende a personalizar Odoo 13 agregando un nuevo botón al menú de acciones en vistas de formulario.
---

![Boton de accion](/blog/boton-accion.webp)

En Odoo 13, puedes agregar botones personalizados al menú de acciones de las vistas de formulario para ejecutar funcionalidades adicionales. Esto es útil si deseas extender las acciones disponibles en modelos específicos, como la validación de documentos, la creación de registros relacionados, o el disparo de una acción específica.

## Table of contents

## Definir el Botón en la Vista XML

El primer paso es agregar el nuevo botón dentro de la vista XML correspondiente. En este ejemplo, vamos a agregar un botón de acción en la vista de formulario del modelo sale.order. El botón aparecerá en el menú desplegable de acciones.

```xml
<record id="view_order_form_inherit" model="ir.ui.view">
    <field name="name">sale.order.form.inherit.action.button</field>
    <field name="model">sale.order</field>
    <field name="inherit_id" ref="sale.view_order_form"/>
    <field name="arch" type="xml">
        <xpath expr="//header" position="inside">
            <button name="action_custom_function"
                    string="Nueva Acción"
                    type="object"
                    class="oe_highlight"
                    attrs="{'invisible': [('state', '!=', 'sale')]}"/>
        </xpath>
    </field>
</record>
```

## Crear la función de Python

Después de definir el botón en la vista, necesitas crear la función Python correspondiente que manejará la acción. Esta función se define en el modelo del objeto. A continuación te muestro cómo hacerlo:

```python
from odoo import models, api

class SaleOrder(models.Model):
    _inherit = 'sale.order'

    @api.multi
    def action_custom_function(self):
        # Aquí va la lógica que quieres implementar
        for order in self:
            # Ejemplo: mostrar un mensaje de éxito
            order.message_post(body="¡Acción personalizada ejecutada con éxito!")
        return True
```

## Conclusión

Agregar nuevas acciones a los botones en Odoo 13 es una forma poderosa de extender las funcionalidades de la plataforma. Con solo unos pocos pasos, puedes personalizar la experiencia de usuario e implementar acciones específicas según tus necesidades de negocio.

Recuerda siempre heredar correctamente los modelos y las vistas para evitar conflictos con otras personalizaciones.