INSERT INTO department (name)
VALUES ("IT"),
       ("Human Resources"),
       ("Acounting & FInance"),
       ("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ('Junior Developer', 80000, 2),
       ('Senior HR', 75000, 2),
       ('Acountant', 80000, 3),
       ('Social Media Manager', 60000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Abraham', 1, NULL),
       ('Justin', 'Killen', 2, NULL),
       ('Jack', 'Jones', 3, 3),
       ('Emily', 'Paris', 4, NULL),
       ('Mark','Lewis', 5, 5);
