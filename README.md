# Project Boilerplate - Web

Please refer to Project Boilerplate API README instructions.

[Video](https://youtu.be/6b4eUkXB81A)

## Troubleshooting

- If you're getting a yarn permission error while trying to run docker-compose: Error: EACCES: permission denied, open '/root/.config/yarn'

  - Probably you installed your node_modules dependencies using sudo!
  - To solve:
    - `sudo rm -rf node_modules`
  - Then install it again with the proper permissions:
    - `yarn install`
