INSERT INTO department (name)
VALUES ("Sales"),
("Customer Service"),
("Accounting"),
("Quality"),
("Supplier Relations"),
("Management"),
("Reception");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Rep", 85000, 1),
("Head of Sales", 90000, 1),
("Junior Sales Rep", 70000, 1),
("Customer Service Rep", 80000, 2),
("Head of Customer Service", 850000, 2),
("Accountant", 95000, 3),
("Head of Accounting", 100000, 3),
("Qualilty Assurance Rep", 80000, 4),
("Supplier Relations Rep", 80000, 5),
("Manager", 100000, 6),
("Receptionist", 65000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Micheal", "Scott", 10, NULL),
("Pam", "Halpert", 1, 1),
("Jim", "Halpert", 1, 1),
("Dwight", "Schrute", 1, 1),
("Angela", "Martin", 7, 1),
("Kelly", "Kapoor", 4, 1),
("Erin", "Hannon", 11, 1),
("Stanley", "Hudson", 2, 1),
("Phylis", "Vance", 1, 1),
("Creed", "Braton", 7, 1),
("Meredith", "Palmer", 9, 1),
("Oscar", "Martinez", 6, 1),
("Kevin", "Malone", 6, 1),
("Andy", "Bernard", 1, 1);