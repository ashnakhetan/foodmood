# FoodMood
Educational app for kids to teach them about foods that are good for their mental health!

Submitted to TreeHacks 2022: https://devpost.com/software/foodmood-lqn6yc

Collaborators: Ashna Khetan, Isabel Sieh, Matthew Vilaysack, Peter Benitez

Try it Out: https://ashnakhetan.github.io/foodmood/

## Inspiration
Like Otsuka Valuenex explained, although most of us can agree that hunger affects our mood, we are mostly blind to the fact that our food choices have chemical effects on our brain, contributing to our overall mental wellness. Most of our teammates agreed that our eating habits were formed in childhood and can be very hard to break when older. The goal of FoodMood is to educate children on proper eating habits in a fun, accessible, and encouraging manner!

## What it does
FoodMood is a virtual scavenger hunt that takes you through the exploration of several different food items, from bananas to avocados to eggs and more! At each step, the child is instructed to find the indicated food item and hold it up to the camera. Once detected, the app will reveal benefits of and fun facts for the item. Kids can use this app in their homes or at the grocery store while their guardians shop, in order to recommend good foods to them.

## How we built it
Front end: We built the front end, including displaying a live video recording using React, HTML, and CSS.

Back end: The largest part of the backend system was for food recognition using AI. The AI object detection system was trained and implemented into the web app using Google Teachable Machine, ML5 library, and React.

We first created our own dataset of food by collecting images from the internet, and taking photos of food in different scenarios. After labeling them, we trained them through Google Teachable Machine so that given a video feed, it can detect if it is a certain food or none.

ML5 library was used for faster processing so the objects can be detected real-time.

Research: Another notable aspect of our development was research on foods and its relation to psychology. We researched what food to focus on by searching nutritional information and mental health benefits on site including the CDC.

## Challenges we ran into
* Template web design services didn’t allow for the flexibility we desired for video and AI, so we decided to code the web app from scratch
* “cod(ing) the web app from scratch” and being beginners! Our team is mostly first time hackathoners so a lot of time was spent learning Web Programming Fundamentals and hackathon practice.
* Since we worked on the front and back end separately, merging the two aspects was difficult.
* Eating healthy. We had to order a lot of takeout food (#DoorDash) to eat at our desk while we continued coding to maximize efficiency. (FastFood = FastCode)

## Accomplishments that we're proud of
* Being able to create a product, even if it wasn’t the best product, we worked together as a team to accomplish something we didn’t think we could do. * Incorporating machine learning, web UI, and video usage in our product Doing our first hackathon!

## What we learned
* “React and how to build a website not from a homework assignment perspective” - Isabel
* “How to apply theoretical concepts to create tangible products in a real world environment” - Peter
* “React state and reference usage” - Ashna
* “The brainstorm process - getting experience on how to flesh out an idea” - Matt

## What's next for FoodMood
* (Accessibility) Making the app more inclusive for by including learning functions that help educate children that are blind and/or deaf
* (Data and Automation) Connecting FoodMood to a large database where researchers can add more foods and the corresponding fun facts - this will automate the process and give the users more to learn from.
* (Mobile App Implementation) Due to our lack of experience, we created a web app that would be used on a mobile device. With more time, we’ll implement it on as a mobile application.
* (User Analysis) Doing an analysis on the impact of this web app on kids and (1) amount of healthy eating and (2) mental health.
* (Working with Business) Expand the product to become better incorporated in grocery stores. This can be done by having special activities located in certain sections of the store when scanned provide an audio message of the benefits of the product in this section. This can help keep customers inside of the business allowing more time for items to be purchased.
* (Working with Business) Further expansion of the product to become better incorporated in grocery stores. This can be done by scanning a picture of foods on say, a plate, and calculating the dollar amount of the plate. This will make it easier for customers to purchase food.

## Ethics
Today, 1 in 4 youth globally are experiencing clinically elevated depression symptoms, and 1 in 5 youth are experiencing clinically elevated anxiety symptoms (CDC 2021). This is roughly double of pre pandemic estimates, which were already increasing over time. At the same time, more than half (56%) of kids in America are eating a poor-quality diet - a fact that is likely to be similar in other countries - and eating worse diets than adults like because older people grew up in a “less processed-food environment”. These two issues go hand in hand – modern research in nutritional psychology has shown that our diet directly affects our mood; one study found that by switching to a healthier diet, levels of depression decrease. Moreover, with the rise of social media, kids' mental health continues to deteriorate, and as companies continue to capitalize on marketing unhealthy fast foods to kids, their diet continues to be negatively influenced.

It’s unethical for us to act as bystanders to this growing issue. During the ideation of this product we turned our focus to the individual - how can we change their eating habits and educate them in a safe and fun way?

We also considered the different stakeholders who benefit from this product. Overall as we teach more generations to eat healthier, we’ll grow a happier and more fit population. Firstly, rather than being told directly what to eat, kids learn from the app to do so. This also makes it easier for their family to set a standard for healthy eating. Additionally, FoodMood helps bring awareness to local produce in neighborhood groceries and farms.

One ethical challenge we’ve noticed and addressed during development was accessibility to those unable to access technology. As this is an online web app, the information on nutrition is only accessible to learn for those with access to technology and the internet. This is a large issue for groups of lower income who might not be able to afford and/or access to these. As a result, in the future we’ll be creating a “FoodMood: Offline Kit” consisting of a printable PDF with all the information on different food and its nutritional and psychological value.

While we’ve addressed many ethical issues through our current product, there’s a few improvements we could make.

Aside from improvements for economic accessibility, we also noticed possible complications with the visually impaired. For future versions of this, we’ll implement voice technology to allow those visually impaired to hear what is on the screen.

Another issue that’s worth exploring further is whether it's safe to give kids access to technology. On one hand, by creating yet another tool that kids can use on technological devices, it could cause even further phone use – something that has been found to negatively affect kids at a young age. However, we attempt to mitigate this by focusing on reality as much as possible; the main aspect of our web app is a camera that kids use to interact with outside food items. Thus, while kids are using technology, it prompts them to directly interact with reality, preventing any negative detachment from the real world that is often cited with phone use.

Built With
- css
- google-teachable
- html
- javascript
- ml5
- react
