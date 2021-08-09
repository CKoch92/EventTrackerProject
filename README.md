# EventTrackerProject

## Full-Stack Spring/REST/JPA Project for Skill Distillery

## Overview
Event Tracker is a way for musicians to track their practice schedule when rehearsing or learning songs from a given setlist.

## How to Run
Using the event tracker website, the user performs CRUD operations from the website page. From the page, the user can view all songs, select to view a song's details, edit a song's details, add a song, delete a song, and view the total number of songs and total length of songs.


## REST Endpoints

| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/songs`      |              | Collection of representations of all songs |
| GET       | `/api/songs/{id}`      |              | Single song object selected from URI's id |
| POST       | `/api/songs`      | JSON representation of new song, without id             | JSON representation of new song with id |
| PUT       | `/api/songs/`      | JSON representation of song with current id and updated fields             | JSON representation of updated song |
| DELETE       | `/api/songs`      |              | no body. status set to 200, 404, or 400 depending on the success of the delete method |


## Methodology
The Event Tracker program connects to the songdb database via hibernate. From there, Spring JPA is able to map an entity from the database tables (in this case, one song table) and turn it into a Java object. URI rest endpoints are used to create, read, update, and delete songs from the database. These endpoints connect to controller methods that use the functionality of JPA repository interfaces to perform the CRUD operations.

REST endpoints are reached in JavaScript via functions with XMLHttpRequests. These functions return data and convert it from JSON to a song object which is then displayed to the user.

## Technologies Used
-Java
-Spring Boot
-Spring Data
-Spring JPA
-REST API
-Postman
-MySQL
-MySQL Workbench
-Atom
-VS Code

## Lessons Learned
This first phase of this project enhanced and ingrained some of the RESTful API methodology. Furthermore, the continued use and practice of JPA repositories helped efficiently perform crud operations. Some small troubleshooting issues with entity and controller mappings helped gain further understanding of both. The project's second phase emphasized some of the different rules between statically created elements and dynamically created elecments in javascript. For instance, event listeners must be added immediately after the dynamic js creation on buttons, rather than accessing the button through the form. 
