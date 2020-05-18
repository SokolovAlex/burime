export const isDev = process.env.NODE_ENV !== 'prod';
export const domain = isDev ? 'localhost' : '0.0.0.0';
export const clientUrl = isDev ? 'http://localhost:3002' : 'http://goburime.ru';
export const serverUrl = isDev ? 'http://localhost:3003' : 'http://goburime.ru:3003';

if (!process.env.google_key || !process.env.google_secret) {
    console.log('please, set up google keys');
}

export const key = process.env.google_key;
export const secret = process.env.google_secret;

export const port = 3003;
