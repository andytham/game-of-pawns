# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Wed| Game Idea|
|Day 2: Thur| Wireframes and Priority Matrix|
|Day 3: Fri| Pseudocode\actual code|
|Day 4: Sat| Basic Clickable Model |
|Day 5: Sun| Working Prototype |
|Day 6: Mon| Game Completed / Slides |
|Day 7: Tue| Project Presentations |

## Project Description

Beginner's Chess, is a variation on chess where the only pieces on the board are pawns. It is a variation of chess designed for beginners and to help them learn the game. The pawns will be in their natural position and the players must advance their piece to the end of the board in order to promote their pawn and thus, winning the game.

## Priority Matrix

http://res.cloudinary.com/andytham/image/upload/v1512673082/PROJECT1/priority_matrix.jpg

## MVP

2 players, black and white, will enter their names on a landing page, game will initialize and create 8 pawns for each side on a checkered board. Players will try to get their pawns to the opposite of the board in order to turn their piece into a queen and win the game. Game ends once a player gets a queen. Pawn move logic has 5 basic rules. First a pawn can move two space forwards vertically, only if it is the pawn's very first move. Otherwise, the pawn can do 3 other things, move forward once vertically, or attack an enemy piece and take its spot, if it is diagonally ahead of it 1 space, defeat another piece 'en passant' where an enemy piece moves two spaces or 'ranks' ahead and lands next to your piece which you can then proceed to defeat. The final move a pawn can do is promotion, which is the goal of this game and is the win condition. The piece can promote itself to any higher rank piece, usually a queen.

## POST MVP

res.cloudinary.com/andytham/image/upload/v1512673082/PROJECT1/wireframe_post_mvp.jpg

## Wireframes

res.cloudinary.com/andytham/image/upload/v1512673082/PROJECT1/wireframe_mvp.jpg

## Game Components

### Landing Page
What will a player see when they start your game?

### Game Initialization
What will a player see when the game is started?

### Playing The Game
What will be the flow of the game, what will the user be expeted to do and what will the user expect from the gam

### Winning The Game
What does it look like when the game ends, what determines winning or losing?

### Game Reset
How will the user restart the game once it has been completed.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description |
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
