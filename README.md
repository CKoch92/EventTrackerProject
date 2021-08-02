# EventTrackerProject

## Full-Stack Spring/REST/JPA Project for Skill Distillery

## Overview
Event Tracker is a way for musicians to track their practice schedule when rehearsing or learning songs from a given setlist.

## How to Run
Using the Postman application a user can perform CRUD functionality onto a database of songs. The specific CRUD functions are detailed below alongside the URI rest endpoints.


## REST Endpoints

| HTTP Verb | URI                  | Request Body | Response Body |
|-----------|----------------------|--------------|---------------|
| GET       | `/api/songs`      |              | Collection of representations of all songs |
| GET       | `/api/songs/{id}`      |              | Single song object selected from URI's id |
| POST       | `/api/songs`      | JSON representation of new song, without id             | JSON representation of new song with id |
| PUT       | `/api/songs/`      | JSON representation of song with current id and updated fields             | JSON representation of updated song |
| DELETE       | `/api/songs`      |              | no body. status set to 200, 404, or 400 depending on the success of the delete method |


##Methodology
The Event Tracker program connects to the songdb database via hibernate. From there, Spring JPA is able to map an entity from the database tables (in this case, one song table) and turn it into a Java object. URI rest endpoints are used to create, read, update, and delete songs from the database. These endpoints connect to controller methods that use the functionality of JPA repository interfaces to perform the CRUD operations.

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

##Lessons Learned
This project enhanced and ingrained some of the RESTful API methodology. Furthermore, the continued use and practice of JPA repositories helped efficiently perform crud operations. Some small troubleshooting issues with entity and controller mappings helped gain further understanding of both.
