# Test / QA Plan for `r/place`

## Objective
To replicate [r/place](https://en.wikipedia.org/wiki/r/place).
The goal is for the product to be intuitive for new users and maintainable for developers.

## Automated tests
The project will have fully automated unit and integration tests that validate the expected functionality of the backend server.
These tests will run while the server is running and will make api calls with both valid and invalid data to make sure that the
backend server responds appropriately.

## Challenge
A major challenge for this web application will be doing automated End-to-End tests that include both the frontend and the backend.
The current solution to rely on code reviews. The reviewer is expected to test the new functionality as well as other standard
situations. Other long term solutions will require more investigation.

## Code Reviews
We will configure the github repository to need at least one code review before performing a merge with a branch into the main line.
We have gatekeepers for both the frontend and the backend to ensure that the integrity of the system is not compromised when adding new changes.
