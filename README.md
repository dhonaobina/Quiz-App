# Quiz App | Project2_2023

Hello, everyone! Welcome to my Pinoy quiz app, where you can test your knowledge and learn more about the Philippines!

A quiz application is a great way to test knowledge, learn new facts, and have fun with others. It can be use for work team building, family gathering, study or just for fun. It can be modify and enhance this in future. It can be modified and improved as per client's request.

I have developed this quiz app as one of my portfolio projects. It demonstrates some of the skills and knowledge that I acquired from the Advanced Front-end course. This course has been challenging but rewarding, and I am determined to complete it. My goal is to pursue my passion for web development and land my dream job. However, I also have to balance my time between studying, working full-time, and raising three children. I can only devote my mornings, nights and weekends to learning new things. But I believe that with hard work and dedication, nothing is impossible.

This project has been a valuable opportunity for me to reconnect with my roots and express my identity. I have also been able to share my heritage with my children and inspire them to learn more about their Filipino culture and history. I hope they will always remember and appreciate where they come from.

## UX 

To enhance my web development skills, I have been using various resources besides the modules from Percipio, which are provided by Learning People Australia. One of them is the YouTube channel, Web Dev Simplified, where I learned some useful concepts and techniques in JavaScript.

### Background and colors:

The chosen background image is related to the Quiz and Color choices are simple and easy on eyes. The app creates a positive and engaging experience for anyone who loves quizzes.

### Framework:

HTML, CSS, JavaScript and Bootstrap

### If I would do this project again:
- Add a score at the end of quiz and create a Scoreboard page
- Create a way for player to modify questions by theirselves
- Better positioning of elements
- I will work with a different framework and challenge to learn more

## User Stories
* As the developer, I want to learn from my mistakes and take feedback positively and continue to learn and create projects similar to quiz app.
* As a player, I want to be able to understand the use of the app, connect with developer and enjoy.
* As a follower, I want to get inspirational projects that can be use for my own and provide comments and suggestions to developer.

## Wireframes
- I use Figma for my wireframe, there has been amazing comments how powerful it is.

**Login Page - Web & Mobile**
![Wireframe1_loginpage_web](https://github.com/dhonaobina/Quiz-App/assets/113093370/423d95ab-61b1-403a-92f0-ea2f9c82d3ac)
![Wireframe2_loginpage_mob](https://github.com/dhonaobina/Quiz-App/assets/113093370/7e9be1b0-e3cb-4ac6-b215-4d2754cd0d1f)

**Quiz Page - Web & Mobile**
![Wireframe3_quizpage_web](https://github.com/dhonaobina/Quiz-App/assets/113093370/e89fc707-f764-4b21-a816-659894e2c988)
![Wireframe4_quizpage_mob](https://github.com/dhonaobina/Quiz-App/assets/113093370/2fe0dd7a-a46b-4868-8874-0851093061d7)

## Features
- Hamburger button
- Login Form
- Audio can be played by user's choice
- Start, Next & Restart button has click sound
- Color turns green and red when answered
- Social Media Links

  ## Technologies Used
- [Figma](https://figma.com)
- [HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [CSS](https://developer.mozilla.org/en-US/docs/Glossary/CSS)
- [JavaScript](https://www.javascript.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)

## Testing 
### Testing User Stories
- As a quiz taker, I want the quiz app to be fun and engaging and it should have clear instructions. The correct answers are based on facts and evidence, not opinions or guesses. I can check sources of the answers after finishing the quiz. Questions are randomly generated and it can be restarted. Lastly, I want to provide feedback and communicate with developer.

### Responsive Testing
- I used different type of Browsers available with me, Mozilla, Google Chrome, Microsoft Edge and Safari.

### Interesting Bugs or Problems
- Elements not positioned correctly: I used bootstrap together with flexbox to align the elements on the screen, but some of them were overlapping or not centered properly. I had to adjust the flex properties and margins to fix this issue.
- Changing color not working when an event was taken by clicking answer buttons: I wanted to change the color of the answer buttons to green or red depending on whether the user selected the correct or incorrect answer, but the color was not changing. I realized that I had to use the setState method to update the color state and trigger a re-render of the component.
- Login form unresponsive when Start Quiz is clicked: I created a login form to authenticate the user before starting the quiz, but nothing happened when I clicked the Start Quiz button. I checked the console and saw that there was an error with the fetch request to the backend. I had to fix the URL and headers of the request to make it work.
- Audio not working properly: I added some audio effects to the quiz, such as a sound when the user selects an answer or finishes the quiz, but the audio was not playing or was delayed. I had to use the useEffect hook to load the audio files and play them at the right time.
- Fonts style not recognized by when added: I wanted to use some custom fonts for the quiz, but they were not showing up on the screen. I had to import them from Google Fonts and link them in the index.html file.
- Coding for quiz unresponsive when button for answers is chosen: I wrote some logic to check if the user selected the correct answer and update the score and progress, but nothing happened when I clicked on an answer button. I debugged the code and found out that I had a typo in one of the variable names. I had to correct it and test it again.
- Background Image was going to left below corner when zoomed out: I added a background image to the quiz app, but it was not covering the whole screen when I zoomed out. I had to use the background-size property and set it to cover to make it fit.


## Deployment
### Instructions provided by my Online School [Learning People Australia](https://www.learningpeople.com/au/)
- Open your project repository on Github, Go to the ‘Settings’ tab.
- Scroll down to ‘GitHub Pages’
- Under ‘Source’, click on the ‘None’ dropdown and choose ‘Master’
- Make sure the Root Folder is selected and click ‘Save’.
- Your page will reload, scroll back down to GitHub Pages and you will now see a URL.
This is a link to a live version of your site.

### Fork Repository Link & Run the Code Locally
https://github.com/dhonaobina/Quiz-App/fork
- To run this code locally, users can do a Pull Request to download a local copy.

## Credits and Acknowledgments
I would like to thank the following sources and people for their contributions and support in creating this quiz app:
- The Stack Overflow community, which answered many of my questions and helped me to solve some of the challenges I faced while developing the quiz app. You can visit [Stack Overflow](https://stackoverflow.com/)
- My student adviser and mentors, who guided me through the advanced front-end programming course and gave me valuable feedback and suggestions on my quiz app.
- To [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) for sharing his knowledge publicly in Youtube and GitHub.
- My peers, who participated in the course with me and shared their ideas and experiences with me.
- My Husband and children, who supported me throughout the course and encouraged me to pursue my passion for web development by giving me time to study and taking over some of the choirs at home.

Lastly, I want to thank all the sources and people who helped me to create this app. They provided me with valuable information, feedback, and support. Without them, this app would not be possible. I hope you have fun and enjoy taking the quizzes. You might be surprised by what you discover about the Philippines. Thank you for using my Pinoy quiz app!

###Visit 
[Pinoy Quiz App](https://dhonaobina.github.io/Quiz-App/)
