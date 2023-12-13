
CREATE DATABASE guvi_Zen;
USE guvi_Zen;


CREATE TABLE class (
    ClassID INT PRIMARY KEY,
    ClassName VARCHAR(100),
    Instructor VARCHAR(100),
    Schedule VARCHAR(100),
    Room VARCHAR(50)
   
);


CREATE TABLE dashboard (
    DashboardID INT PRIMARY KEY,
    Title VARCHAR(100),
    Content TEXT,
    DateAdded DATE
    
);


CREATE TABLE tasks (
    TaskID INT PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    Deadline DATE,
    Status VARCHAR(20)
    
);


CREATE TABLE webcode (
    WebcodeID INT PRIMARY KEY,
    Title VARCHAR(100),
    Code TEXT,
    Language VARCHAR(50),
    DateCreated DATE

);


CREATE TABLE capstone (
    CapstoneID INT PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    TeamMembers TEXT,
    DateStarted DATE,
    DateCompleted DATE

);


CREATE TABLE syllabus (
    SyllabusID INT PRIMARY KEY,
    CourseID INT,
    Topic VARCHAR(100),
    Description TEXT,
    PRIMARY KEY (CourseID, Topic),
    FOREIGN KEY (CourseID) REFERENCES class(ClassID)

);


CREATE TABLE placement_board (
    PlacementID INT PRIMARY KEY,
    CompanyName VARCHAR(100),
    JobTitle VARCHAR(100),
    Description TEXT,
    ApplicationDeadline DATE,
    InterviewDate DATE
    
);
