# HW7: Routing, Component Architecture, & UI State
## Antonio De la Merced

## Overview
A book app using React for the frontend and Express + MongoDB Atlas for the backend.  
Users can view, add, edit, and delete books, and filter them by genre.
## Features
- custom hook useFetch
- Add Book page.  
- Inline edit/delete.  
- Reusable components: `Header`, `Footer`, `Book`, `AddBookForm`.  

## Run
1. Backend: `cd backend && npm install && node server.js`  
2. Frontend: `cd frontend && npm install && npm start`  

## Test
- Add a book → shows in list.  
- Edit a book → changes saved.  
- Delete a book → removed.  
- Filter by genre → shows only matching books.  
- Multiple components access book data using React Context

