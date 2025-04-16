
# Project Title
Unhoused Resources App

## My branch: feature/resources-page

## Description
A mobile app/website that aims to connect unhoused individuals and their supporters with essential resources across Seattle. 

- I'm responsible for UI design in Figma, implementing interactive elements using React Native, integrating Google Maps API, and managing backend data with Supabase.
- I improved the intuitiveness of page interfaces, cutting user decision/learning time by 87.5%.

## My Contributions (As of April 16th, 2025)
**app/(tabs)/resource_page.tsx**
- Responsible for displaying and organizing the main resource page.
- Will be integrated with data from the Google Maps API.

**app/(tabs)/list_page/index.tsx**
- Responsible for displaying and organizing the resources list page.
- Will be integrated with data from the Google Maps API.

**components/ResImage.tsx**
- Created the image display component that handles different image layouts and responsiveness on the Resources Page.

**components/MapButton.tsx**
- Developed a customizable button component with dynamic text and icons.
- Will be used to redirect users to resources (directions, call, save, website) or filter pins on the map page (food, hygiene, shelter, etc).

**components/ReviewBar.tsx**
- Developed a review bar component with a resizable colored part/progress.
- Will be used to roughly indicate what percentage of users rate 5,4,3,2 and 1 stars.

**components/ReviewBox.tsx**
- Developed a customizable review box component.
- Will be used to display the review, profile picture, and profile data of each reviewer.

**components/ReviewStars.tsx**
- Developed a customizable review stars component
- Will be used to display the ratings of a resource.

**components/ListBox.tsx**
- Developed a customizable resource list box component
- Will be used to display a list of the resources.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

To download the program
1. Git clone from: https://github.com/hcp-uw/Unhoused-resources-app/tree/main 

To run the project yourself, one must have installed...
1. Node.js (LTS v22.13.1) 
2. VSCode or preferred code editor/IDE
3. (Optional) Expo Go app on phone
    1. Why optional? 
    * Not recommended: One can run the app in a "web based" version after running "npx expo start"

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```
Once everything is installed properly...
* git pull (just to make sure)
* npm install (installs all necessary packages from package.json)
* npx expo start (follow error fixing instructions if necessary)
