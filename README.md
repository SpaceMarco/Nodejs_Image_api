# Nodejs_Image_api
by: Ahmed Mohamed Mostafa<br/>
email: ahmed.mohamed.mustafa1999@gmail.com

Project 1 submission for EGFWD full stack web development course

## **Dependencies used in this project are:**
- Prettier to catch formatting errors.
- Lint to catch programming errors.
- Express to start server and manage routes.
- Sharp to process the image to the required width and height.
- Jasmine to write test cases for the code.
- Supertest for endpoint testing.

## **To run code:**<br/>
  >node build/main<br/>

## **npm scripts to use:**<br/>
  >npm run test --> to run tests.<br/>
  >npm run build --> to build code<br/>
  >npm run start --> to start server<br/>
  
## **End Points:**<br/>
### endpoint '/' :
- <sub>http://localhost:5500/</sub> is the root of the project.<br/>
  ![image](https://user-images.githubusercontent.com/60396165/191621394-37568e20-5574-40ad-9f6c-9ad217e9b265.png)<br/>
### endpoint '/api' :
- <sub>http://localhost:5500/api</sub> is a welome page of the api with instructions on how to display an image.<br/>
  ![image](https://user-images.githubusercontent.com/60396165/191621586-da1f1ed1-9551-4ca7-b1a6-680bdeb6f2ae.png)<br/>
### end[point '/images' :
- <sub>http://localhost:5500/api/images</sub> is an image processing api, where the image processing instructions take place.<br/>
- if filename is not provided in the url, then the following messege will appear..<br/>
  ![image](https://user-images.githubusercontent.com/60396165/191621844-a12001ea-98ae-403c-bc76-643d5915c846.png)<br/>
- if width or height are invalid, then the following messege will appear..<br/>
  ![image](https://user-images.githubusercontent.com/60396165/191622130-93b96de6-9c5c-4a09-bd54-ad73527b3aff.png)<br/>
### valid URL: <sub>http://localhost:5500/api/images?filename=fjord&width=100&height=100</sub><br/>

## **Testing result with jasmine and supertest for endpoint testing:**<br/>
  ![image](https://user-images.githubusercontent.com/60396165/191519272-187c96ef-8b52-4f75-8fb9-face511b88af.png)
