# node-react-template

## Установка node js на ваш компьютер

Пожалуй, самый удобный способ управления версиями node.js это использование Node Version Manager (https://github.com/nvm-sh/nvm):

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```


## Installing service
Отредактируйте содержимое файлов `my_service.service` и `install_service.sh` под свои нужды.

`install_service.sh` установит сервис для systemd с автостартом и автоматическим перезапуском в случае ошибки

Предполагается, что этот репозиторий находится в `/root/server`

## Первый запуск сервера
```bash
npm install
./gen_tls_key.sh
```
Проверьте что сервер работает: https://localhost:5443/api/hello