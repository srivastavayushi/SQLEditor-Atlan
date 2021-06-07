# SQL Editor as a part of Atlan Assignment

You can check out the application at : **https://sql-editor-atlan.netlify.app/**

The application fulfils all the requirements that were mentioned by team Atlan.

**Task :** Create a SQL editor view where your users can query easily on a table using SQL, and see the results.

## Data

I have coverted the customers.csv file provided by team Atlan to JSON format and thus loaded it anytime a query is demanding the data to be retrieved from the file.

## List of all major libraries utilised in the application:

I tried to use as less libraries as possible so as to make application load faster and code the proper way.

1. ReactJS:
2. MaterialUI: For icons and a modal
3. Styled Components - For CSS

## Highlights

1. Optimizing Loading Time

   - I used browser's network tool to find out the load time and then cross-checked it using analytic tools like GTmatrix and Web.Dev. The final **Fully Loaded Time** is just 1.8s.
   - I removed the unused css using PurgeCSS.
   - I have added fallback fonts in CSS font-family to ensure that the text remains visible during the webfont load (Nunito). This improved the **FCP Score** to 1s.
   - With React's Virtual DOM, rendering components is fast & thus the **LCP Score** for the dashboard is just 1s.
   - **Caching with Service worker** improved performance on subsequent loads.
   - CLS(Cumulative Layout Shift) is 0.

2. Responsive

   - I have media queries wherever possible so as to make the application look responive across desktops, tablets & mobile phones
   - I have avoided absolute sizing of fonts/containers wherever possible & instead used **_em_** & **_rem_**

3. Progressive Web App

   - Installable
   - Optimized
   - Can be used offline

## Screenshots
