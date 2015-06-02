# Infection

### Directions
```sh
> git clone https://github.com/chyld/infection
```
Open `infection/index.html` and `infection/test.html` inside your browser.

### Test.html
This contains tests for the User constructor and addStudent instance method. Also contains tests for totalinfection and limitedinfection.

### Index.html
The UI. If you click on any square it will show how that square infects other squares that it's connected to. The total infection will usually have more infections than the limited infection which tries to keep the max infected to around 5.

### Algorithm
The totalinfection algorithm works by infecting a specific user, then it recursively descends through all of the user's teachers and students and infects each one of them. So the infected graph represents the connected graph starting from a particular user.

The limitedinfection algorithm works in a similar fashion, but tries to cap the infection. You give this function a user and a max value. It then infects the user and all its students. Then it tries to recursively descend through each student and infecting that person's list of students. The point is to keep the infection limited to a user and their students.
