Monday

All team agreed theme and vision of app
All team agreed database schema
All team added to a group Figma board
Anjum set up Supabase database
Populated database
Louie set up Trello board
Steve created monorepo

Tuesday

Blessing was our willing volunteer to create our first branch and pull back into main
All team learned how to pull main to our local code base
Further discussion on Minimum Viable Product

Wednesday
Dane build initial code block, documentation of steps so that every team member gets clear idea of git branch. Steve is working on front end designing with Louie as well as managing the code workflow. Louie is designing web pages with HTML and CSS. Anjum is creating branch and merging, hunting for images and font to be used for website. Blessing is hunting for images and font to be used for website as well as major technical issue she is facing in her VS code. Steve help out Blessing for solving her technical issue but it didn't workout so Blessing took Sam's and Connor help but it didn't workout too.

Thursday
Blessing and Steve made a powerpoint slides for our team presentation. Anjum is updating Readme file and powerpoint slides. Louie,Dan and Steve is working on CSS. Dan is working on back-end too.
😭😭😭😭😭😭😭😭😭
Things that made us cry...... so may thinsg

🍷 Wine Selection App

A simple full-stack application to browse, explore, and learn about wines.
Users can view wines alphabetically by grape variety and country, click to see detailed information, and explore tasting notes and food pairings.

Future.
Users can enter a foot type and then the app will provide a list of suitable wines

🚀 Features

Wine List: Browse wines sorted by grape variety and country.
Wine Details: Click a wine to view details including:
Name, grape variety, color, region, country, vintage
Price, rating, Tasting notes, Suggested food pairings

Navigation: Back button to return to main list.

Future: to include option to enter and search on food types/categories for matching wines.

🏗 Tech Stack

Frontend: Vanilla JavaScript, HTML, CSS
Backend: Node.js with Express
Database: PostgreSQL (pg client)
Tools: Vite (for frontend dev), dotenv, cors
(hosted on render for live demo of app)

📂 Project Structure
.
├── src/
│ ├── main.js # Frontend logic
│ ├── style.css # Frontend styles
├── server.js # Express backend
├── package.json
├── README.md
└── ...

⚙️ Setup & Installation

1. Clone Repository

git clone https://github.com/MrSteve/wine-selection-app.git
cd wine-selection-app

2. Install Dependencies
   npm install

3. Setup Database

Create a PostgreSQL database and run:

CREATE TABLE wines (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
grape_variety TEXT NOT NULL,
color TEXT,
region TEXT,
country TEXT,
vintage INT,
price NUMERIC(6,2),
rating NUMERIC(5,2),
notes TEXT[],
food_pairings TEXT[]
);

Insert some sample data:

INSERT INTO wines (name, grape_variety, color, region, country, vintage, price, rating, notes, food_pairings)
VALUES
('Cloudy Bay Sauvignon Blanc', 'Sauvignon Blanc', 'White', 'Marlborough', 'New Zealand', 2021, 34.50, 92.00,
ARRAY['Crisp acidity', 'Citrus notes', 'Tropical fruit'],
ARRAY['Seafood', 'Goat cheese', 'Salads']);

4. Environment Variables

Create a .env file in the root:

DB_CONN=postgres://username:password@localhost:5432/winesdb

5. Start Backend (serv er)
   node server.js

6. Start Frontend (client)
   npm run dev

Open your browser at http://localhost:5173.

📡 API Endpoints

GET /wines → list all wines (alphabetical by grape_variety, country)
GET /details/:id → get details of a specific wine by ID

👩‍💻 User Journey

User opens the app and sees the wine list.

Clicks on a wine → details are fetched and displayed.

Reads tasting notes & food pairings.

Uses Back button to return to list.

🔮 Future Improvements

Search by food (/match/:food)
Sorting by price, rating, or region
User ratings and favorites
Link out to suppliers for online purchasing

EOL
