# Unofficial Signing Service for Guest Token Restriction

# Get started

## Configure your environment

Your first action is to configure your server. Follow ([https://success.qumucloud.com/hc/en-us/articles/360058524874-Guest-token-restriction](https://enghouseglobal.atlassian.net/servicedesk/customer/portal/15/article/1082196260)) for more information.

```shell
mv .env.example .env
```

Then fill your `.env` file with the values provided by Qumu Cloud.

## Generate a self signed SSL certificate

This server needs to run on HTTPS, so you will have to set an SSL certificate. 

For development, we can generate a self-signed certificate by running the following command:

```shell
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```

## Run the server

The project is now ready to be started. Run the following commands to get it up and running.

```shell
npm install
npm run start
```

You should see the following line:

```shell
Listening on port <PORT>
```

Look at the port and enter `https://localhost:<PORT>` in a browser. If everything works fine, you should be able to see `Hello World!` on the screen.


## Configure Qumu Cloud

Now that we have a working server, you can set the following URLs in Qumu Cloud:
  * Signing Service URL: `https://localhost:<PORT>/guest/authorize`
  * Signing Service Image URL: `https://localhost:<PORT>/image.png`

