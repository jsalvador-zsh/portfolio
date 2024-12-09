---
author: Juan Salvador
pubDatetime: 2024-10-27T19:50:50Z
modDatetime: 2024-10-27T19:50:50Z
title: ¿Cómo instalar Odoo 18 en Ubuntu?
slug: como-instalar-odoo-18-servicio
featured: true
draft: false
tags:
  - Deploy
  - Odoo
description:
  En esta publicación compartiré un manual sobre cómo instalar Odoo 18 Community en Ubuntu. Utilizaremos un script que automatiza los pasos necesarios para la instalación.
---

Una alternativa para instalar Odoo es a través de Docker, haciendo uso de contenedores para Odoo como su base de datos en Postgres. En este artículo mostraré como configurar el archivo ```docker-compose.yml``` desde cero para trabajar con Odoo 18. 

## Table of contents

## 1. Creación del archivo odoo_install.sh

```bash
nano odooinstall.sh
```

## 2. Contenido del archivo

A continuación, agregamos el siguiente contenido al archivo:

```bash
#!/bin/bash
# Creamos el usuario y grupo del sistema 'odoo':
sudo adduser --system --quiet --shell=/bin/bash --home=/opt/odoo --gecos 'odoo' --group odoo
# Creamos el directorio para almacenar el archivo de configuración y los logs de Odoo:
sudo mkdir /etc/odoo && sudo mkdir /var/log/odoo/
# Actualizamos e instalamos PostgreSQL y las librerías necesarias:
sudo apt update
sudo apt-get install -y python3-pip
sudo apt-get install -y python3-dev libxml2-dev libxslt1-dev zlib1g-dev libsasl2-dev libldap2-dev build-essential libssl-dev libffi-dev libmysqlclient-dev libjpeg-dev libpq-dev libjpeg8-dev liblcms2-dev libblas-dev libatlas-base-dev
sudo apt-get install -y git
sudo apt-get install -y npm
sudo npm install -g less less-plugin-clean-css
sudo apt-get install -y node-less
# Instalamos PostgreSQL
sudo apt-get install -y postgresql
# Descargamos Odoo versión 18 desde Git:
sudo git clone --depth 1 --branch 18.0 https://github.com/odoo/odoo /opt/odoo/odoo
# Asignamos permisos al directorio de Odoo y instalamos las dependencias de Python 3:
sudo chown odoo:odoo /opt/odoo/ -R && sudo chown odoo:odoo /var/log/odoo/ -R
cd /opt/odoo/odoo
sudo ./setup/debinstall.sh
# Instalamos las dependencias y wkhtmltopdf para generar PDF en Odoo
sudo apt install fontconfig xfonts-base xfonts-75dpi -y
cd /tmp
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.jammy_amd64.deb && sudo dpkg -i wkhtmltox_0.12.6.1-2.jammy_amd64.deb
sudo ln -s /usr/local/bin/wkhtmltopdf /usr/bin/ && sudo ln -s /usr/local/bin/wkhtmltoimage /usr/bin/
# Creamos un usuario 'odoo' para la base de datos:
sudo su - postgres -c "createuser -s odoo"
# Configuramos Odoo:
sudo su - odoo -c "/opt/odoo/odoo/odoo-bin --addons-path=/opt/odoo/odoo/addons -s --stop-after-init"
# Movemos el archivo de configuración de Odoo:
sudo mv /opt/odoo/.odoorc /etc/odoo/odoo.conf
# Agregamos parámetros al archivo de configuración:
sudo sed -i "s,^\(logfile = \).*,\1"/var/log/odoo/odoo-server.log"," /etc/odoo/odoo.conf
# Creamos el archivo para iniciar el servicio de Odoo:
sudo cp /opt/odoo/odoo/debian/init /etc/init.d/odoo && sudo chmod +x /etc/init.d/odoo
sudo ln -s /opt/odoo/odoo/odoo-bin /usr/bin/odoo
sudo update-rc.d -f odoo start 20 2 3 4 5 .
sudo service odoo start
```

## 3. Permisos al archivo

Damos permisos de ejecución al archivo:

```bash
sudo chmod u+x odooinstall.sh
```

## 4. Ejecución del script

Ejecutamos el script con el siguiente comando:

```bash
sudo sh odooinstall.sh
```

## 5. Acceso a Odoo

Finalmente, abrimos un navegador web y accedemos a: http://IP:8069.

![Vista de Odoo Login](/blog/post-7/odoo-18-login.webp)

Una vez lleno el formulario para crear una nueva base de datos, podrás instalar los módulos que desees.

![Vista de Odoo Apps](/blog/post-7/odoo-apps-18.webp)