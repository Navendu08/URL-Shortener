\# 🔗 URL Shortener



A simple URL Shortener built using \*\*Node.js\*\*, \*\*Express.js\*\*, and \*\*MongoDB\*\*. It converts long URLs into short, unique links and redirects users to the original website when the shortened URL is accessed.



\## 🚀 Features



\- Generate short URLs from long URLs

\- Redirect users using shortened links

\- Store URLs in MongoDB

\- RESTful API architecture

\- Clean MVC project structure

\- Fast and lightweight backend



\## 🛠️ Tech Stack



\- Node.js

\- Express.js

\- MongoDB

\- Mongoose

\- NanoID (or ShortID, if used)

\- JavaScript



\## 📂 Project Structure



```

URL-Shortener/

│── controllers/

│── models/

│── routes/

│── connect.js

│── index.js

│── package.json

│── README.md

└── .gitignore

```



\## ⚙️ Installation



1\. Clone the repository



```bash

git clone https://github.com/Navendu08/URL-Shortener.git

```



2\. Navigate to the project



```bash

cd URL-Shortener

```



3\. Install dependencies



```bash

npm install

```



4\. Configure MongoDB connection in `connect.js` (or use a `.env` file).



5\. Start the server



```bash

npm start

```



or



```bash

node index.js

```



\## 📌 API Endpoints



\### Create Short URL



```

POST /

```



Request Body



```json

{

&#x20; "redirectUrl": "https://example.com"

}

```



Response



```json

{

&#x20; "shortId": "abc123"

}

```



\### Redirect to Original URL



```

GET /:shortId

```



Redirects the user to the original URL.



\## 📈 Future Improvements



\- User Authentication

\- QR Code Generation

\- Custom Short URLs

\- Click Analytics Dashboard

\- URL Expiration

\- Rate Limiting



\## 👨‍💻 Author



\*\*Navendu Mishra\*\*



GitHub: https://github.com/Navendu08

