#!/bin/bash

cp accoustic_sensor_mvp.service /lib/systemd/system/accoustic_sensor_mvp.service
systemctl daemon-reload
systemctl enable accoustic_sensor_mvp.service

