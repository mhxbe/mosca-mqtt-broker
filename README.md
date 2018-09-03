# mosca-mqtt-broker
Mosca is a MQTT(Message Queuing Telemetry Transport) Broker

## How to instal mongodb on a Raspberry Pi?

install mongodb with: 

* `sudo apt-get install mongodb`

create **/data/db** folder by going to root and fun following command:

* `cd ../../ && mkdir -p data/db`

give folder correct read-write permissions by running:

* `sudo chown $USER /data/db`

set bind_ip value to **0.0.0.0**

* `sudo nano /etc/mongodb.conf`

bind_ip value should be **0.0.0.0** instead of **127.0.0.1**

enable mongodb on startup:

* `sudo systemctl enable mongodb`
