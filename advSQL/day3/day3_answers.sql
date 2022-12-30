SELECT * FROM Stud_Course
SELECT * FROM Course
SELECT * FROM Student
SELECT * FROM Instructor
SELECT * FROM Ins_Course

1)

CREATE VIEW vstudent

AS

SELECT (St_Fname + ' ' + St_Lname) AS FullName, Crs_Name

FROM Student s INNER JOIN Stud_Course sc
ON s.St_Id = sc.St_Id
INNER JOIN Course c
ON sc.Crs_Id = c.Crs_Id
WHERE Grade > 50

SELECT * FROM vstudent

...............................





2)

CREATE VIEW vInsCrs (Instructor_Name, Course_Name)

WITH ENCRYPTION
AS

SELECT Ins_Name, Crs_Name

FROM Instructor i INNER JOIN Ins_Course ic
ON i.Ins_Id = ic.Ins_Id

INNER JOIN Course c

ON ic.Crs_Id = c.Crs_Id

INNER JOIN Department

ON i.Ins_Id = Dept_Manager

WHERE i.Ins_Id IN (SELECT Dept_Manager FROM Department)


SELECT * FROM vInsCrs

.................................



3)

CREATE VIEW vSdJava(Instructor_Name, Department_Name)

WITH ENCRYPTION
AS

SELECT Ins_Name, Dept_Name

FROM Instructor i INNER JOIN Department d
ON i.Dept_Id = d.Dept_Id

WHERE Dept_Name = 'SD' OR Dept_Name = 'Java'



SELECT * FROM vSdJava

...............


SELECT * FROM Student



SELECT * FROM Instructor
SELECT * FROM Department

4)

CREATE VIEW v1
AS
SELECT * FROM Student
WHERE St_Address IN ('ALex', 'Cairo')
with CHECK OPTION

SELECT * FROM v1


.............................

SELECT * FROM COMPANY.Project
SELECT * FROM WorksOn


5)


CREATE VIEW vNumEmp
AS

SELECT ProjectName, COUNT(EmpNo) AS NumOfEmp
FROM Company.Project c
INNER JOIN
WorksOn w
ON c.ProjectNo = w.ProjectNo
GROUP BY ProjectName


SELECT * FROM vNumEmp

...........................

6) 

CREATE CLUSTERED INDEX cl1
ON Department(Manager_hiredate)



7)

CREATE UNIQUE INDEX ui1
ON Student(St_Age)

.........................



CREATE TABLE bankClient
(
	Id int PRIMARY KEY,
	Balance int
)

CREATE TABLE ClientDeposite
(
	Id int PRIMARY KEY,
	Deposite int
)


8)

Merge INTO bankClient AS b

USING ClientDeposite AS c

ON b.Id = c.Id

WHEN MATCHED THEN
	UPDATE
		SET b.Balance += c.Deposite
WHEN NOT MATCHED THEN
	INSERT
	VALUES (c.Id, c.Deposite);
	


..................part 2...........................


1)

CREATE VIEW v_clerk
AS
SELECT re.EmpNo, wo.ProjectNo, Date_Entry
FROM Resource.Employee re
INNER JOIN
WorksOn wo
ON
re.EmpNo = wo.EmpNo
JOIN
COMPANY.Project cp
ON
wo.ProjectNo = cp.ProjectNo
WHERE JOB = 'Manager'

..................................


2)

CREATE VIEW v_without_budget
AS
SELECT * FROM COMPANY.Project
WHERE Budget IS NULL


3)

CREATE VIEW v_count
AS
SELECT ProjectName, COUNT(Job) AS Job_count
FROM COMPANY.Project cp
JOIN
WorksOn wo
ON
cp.ProjectNo = wo.ProjectNo
GROUP BY ProjectName

.................

4)


CREATE VIEW v_project_p2
AS
SELECT EmpNo
FROM
v_clerk
WHERE ProjectNo = 'p2'


.........................


5)

ALTER VIEW v_without_budget
AS
SELECT * FROM COMPANY.Project
WHERE ProjectName IN ('p1', 'p2')


......................
6)

DROP VIEW v_clerk
DROP VIEW v_count

......................
SELECT * FROM Resource.Employee
SELECT * FROM WorksOn
SELECT * FROM COMPANY.Project
SELECT * FROM COMPANY.Department
7)


CREATE VIEW vdeptNo
AS
SELECT e.EmpNo, EmpLname
FROM Resource.Employee e
INNER JOIN
WorksOn w
ON e.EmpNo = w.EmpNo
WHERE DeptNo = 'd2'


......................

8)


SELECT EmpLname
FROM vdeptNo
WHERE EmpLname LIKE '%j%'


.............................


9)

CREATE VIEW v_dept
AS
SELECT DeptNo, DeptName
FROM COMPANY.Department

.............................

10)

UPDATE v_dept
SET DeptNo = 'd4', DeptName = 'Development' 
--conflict

..............................


11)

CREATE VIEW v_2006_check
AS
SELECT EmpNo, ProjectNo, Date_Entry
FROM WorksOn
WHERE Date_Entry BETWEEN '2006-1-1' AND '2006-12-31'



