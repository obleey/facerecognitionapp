
##  Facerecognition App
This App is integrated with the [Clarifai Face Recognition API](https://www.clarifai.com/models/ai-face-detection). You simply copy a image link and paste it into the search bar, and the web app detects the face on the picture. The app has fully functioning login and register pages for authentication. 
![Facerecognition App](https://i.imgur.com/SMQ5aA7.png)
[Live](https://miha-facerecognitionapp.herokuapp.com/)

## How to navigate this project  
- The `src`folder contains two separate folders, one is `components`, which stores all the reusable components of the appliaction and `containers` which stores the page layout.
- The project uses [Tachyons CSS toolkit](https://tachyons.io/) for some styling. The majority is written in plain CSS.
- The application communicates with the Clarifai API and renders the box around the face. [Code here](https://github.com/obleey/facerecognitionapp/blob/main/src/containers/App.js)
- This is the Frontend part of the project. The backend can be found [here](https://github.com/obleey/smart-brain-api)

## Why I built the project this way  
- Built using hooks and functional components
- Tachyons is a good library for fast styling.  

## If I had more time I would change this  
- Write all tests using Jest
- Since I realized that more and more projects don't use Redux anymore, i would implement GraphQL or  
react-query for data managment.
 
## Available Scripts  
First of all clone or fork this repo and install all the needed dependencies using `npm` or `yarn`

**Dev build:**

run  `nmp run start`

**Prod build:**

run  `nmp run deploy`

## Authors
[Miha Oblišar - @mihaoblisar](www.linkedin.com/in/miha-obli%C5%A1ar-8b177610a)

## Licence
This project is open-sourced under the [MIT license](https://opensource.org/licenses/MIT).

