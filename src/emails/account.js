import Mailgun from "mailgun.js";
import FormData from "form-data";
import { appconfig } from "../config/app.config.js";

const DOMAIN = "sandbox86d17e55590d47999160b5f8e53fe938.mailgun.org";
const api_key = appconfig.apiKey;

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({ username: "api", key: api_key });

export const sendWelcomeEmail = (email, name) => {
    mg.messages.create(DOMAIN, {
        from: "shyampatel4851@gmail.com",
        to: email,
        subject: "Thanks for joining!",
        text: `Welcom to the team ${name}`,
    });
};

export const sendCancelationEmail = (email, name) => {
    mg.messages.create(DOMAIN, {
        from: "shyampatel4851@gmail.com",
        to: email,
        subject: "Sorry to see you go!!",
        text: `Goodbye ${name}, I hope to see you back sometime soon..`,
    });
};