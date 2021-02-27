# google-drive-index-worker
Modified version of [maple3142/GDIndex](https://github.com/maple3142/GDIndex).

## Installation
Visit one of the following sites and follow the instructions (just fill in the authorization code and leave default root ID and authentication as is), but instead of copying the generated code to Cloudflare, just save the `refresh_token` somewhere.

- https://gdindex-code-builder.glitch.me
- https://gdindex-code-builder.maple3142.net

Copy the contents of the [worker.js](worker.js) file to the worker and paste the `refresh_token` from earlier in it.

You may want to edit the `default_root_id` and change it to a shared drive and set `auth` to true to enable authentication now.

## Contributing
Yes, please. Fork this repository and start working. After you are done with it, submit a pull request and I will review your changes.

## Credits
- maple3142, [GDIndex](https://github.com/maple3142/GDIndex)

## License
This project is licensed under the [MIT License](LICENSE).
