---
author: Juan Salvador
pubDatetime: 2024-10-22T21:50:50Z
modDatetime: 2024-10-22T21:50:50Z
title: Instalación de Odoo 17 con docker-compose
slug: instalacion-odoo-17-docker
featured: true
draft: false
tags:
  - Docker
  - Odoo
description:
  Una de las formas de instalar Odoo es mediante Docker, aprenderás a realizar una configuración desde cero para Odoo 17.
---

Una alternativa para instalar Odoo es a través de Docker, haciendo uso de contenedores para Odoo como su base de datos en Postgres. En este artículo mostraré como configurar el archivo ```docker-compose.yml``` desde cero para trabajar con Odoo 17. 

También compartiré una plantilla que uso frecuentemente para iniciar nuevos proyectos en Odoo.

![Imagen Template Odoo 17](/blog/post-6/odoo-17-template.webp)

## Table of contents

## Ventajas de usar Docker con Odoo
Al iniciar un proyecto en Odoo, a menudo es necesario instalar librerías adicionales y ajustar configuraciones en el entorno de desarrollo, por lo que puede ser necesario manejar proyectos en diferentes versiones de Odoo al mismo tiempo. 

Con Docker, puedes crear un archivo de configuración que automatice la creación de un contenedor con todas las dependencias y configuraciones necesarias para cada proyecto. Esto también facilita el trabajo en equipo, ya que otros desarrolladores pueden levantar el proyecto con la misma configuración sin complicaciones adicionales.

## ¿Qué sistemas operativos soportan Docker? 🐳
Docker es compatible con Mac, Windows y Linux. Puedes instalarlo siguiendo las instrucciones disponibles en esta [guía oficial](https://docs.docker.com/get-started/get-docker/). Además de Docker, necesitarás docker-compose para gestionar tanto el servicio de Odoo como el de la base de datos Postgres. La instalación de docker-compose también se explica en [este enlace](https://docs.docker.com/compose/install/).

## Repositorio
Puedes acceder al repositorio de la plantilla para instalar Odoo con docker-compose [aquí](https://github.com/jsalvador-zsh/template-odoo-v17). Sigue este artículo para conocer su estructura y entender su funcionamiento.

## Estructura del template Odoo con Docker

![Estructura Template Odoo 17](/blog/post-6/estructura-template-docker.webp)

- **docker-compose.yaml:** Contiene la configuración para levantar los contenedores de Odoo y Postgres.

- **.env:** Archivo que establece los parámetros del entorno, utilizados por el archivo ```docker-compose.yaml```.

- **config/odoo.conf:** Aquí se especifican los parámetros de configuración para iniciar el servicio de Odoo.

- **addons/:** Directorio en el que se almacenan los módulos personalizados o adicionales de tu proyecto.

> Nota: Hacer una copia de aquellos archivos que inicien con "template" o renombrarlos quitando solo el template.

## Explicación de uso

### Archivo docker-compose.yml

![Archivo docker-compose.yml](/blog/post-6/docker-compose.webp)

En el archivo ```docker-compose.yml``` se definen los contenedores para los servicios de Odoo y Postgres.
El contenedor de Odoo suele ser nombrado arbitrariamente como "web", mientras que el de Postgres como "db".

Estos nombres son personalizables según tus preferencias, pero en esencia representan el servicio web de Odoo y la base de datos de Postgres, respectivamente.

### Archivo .env

![Archivo docker-compose.yml](/blog/post-6/archivo-env.webp)

El archivo ```.env``` está parametrizado, lo que significa que dentro de los archivos de configuración, como ```docker-compose.yaml```, los valores de los parámetros se referencian mediante llaves ```${}```. Por ejemplo, para utilizar el valor del parámetro ```WEB_HOST```, se debe escribir de esta manera: ```${WEB_HOST}```. 

Todos los valores de estos parámetros están definidos dentro del archivo ```.env```, lo que permite gestionar de forma centralizada las configuraciones del entorno, como los nombres de host, las credenciales, y otras variables importantes para el despliegue del proyecto.

### Archivo odoo.conf

![Archivo odoo.conf](/blog/post-6/archivo-odoo-conf.webp)

Este archivo contiene los parámetros de configuración de Odoo que se utilizan para iniciar el servicio. En esta plantilla, los valores que se deben modificar son ```db_host```, ```db_user``` y ```db_password```, los cuales están vinculados a las variables definidas en el archivo ```.env```. 

Puedes ajustar estos valores según lo que requiera tu proyecto, y si realizas algún cambio en este archivo, será necesario reiniciar el contenedor para aplicar los ajustes. El comando para reiniciar el contenedor es:

```bash
docker restart nombre-contenedor
```

## Ejecución

Para levantar Odoo y su base de datos usando docker-compose, primero debes estar ubicado en la raíz del proyecto y ejecutar el siguiente comando:

```bash
docker-compose up -d
```