#!/bin/bash

cp my_service.service /lib/systemd/system/
systemctl daemon-reload
systemctl enable my_service.service

