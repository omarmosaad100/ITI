1)

CREATE PROCEDURE spNoSt
AS
SELECT Dept_Name, COUNT(St_Id) AS 'Number of Students'
FROM Student s JOIN Department d
ON s.Dept_Id = d.Dept_Id
GROUP BY Dept_Name

spNoSt


............................................




alter Proc Deltopic @tid int
as
	if not exists(select top_id from course where top_id=@tid)
		delete from topic where top_id=@tid
	else
		select 'error'


2)

ALTER PROCEDURE SPTRIAL1
AS
IF (SELECT COUNT(EmpNo) FROM WorksOn WHERE ProjectNo = 'p1' ) >= 3
	SELECT 'The number of employees in the project p1 is 3 or more'
ELSE
	SELECT 'The following employees work for the project p1: ' + (	SELECT (EmpFname + EmpLName) AS 'Full Name' FROM Resource.Employee e
	JOIN WorksOn w
	ON e.EmpNo = w.EmpNo)

	SPTRIAL1


3)

CREATE PROCEDURE newEmp @oldEmpNo INT, @newEmpNo INT, @newProjectNo VARCHAR(20)
AS
UPDATE WorksOn
SET EmpNo = @newEmpNo, ProjectNo = @newProjectNo, Date_Entry = GETDATE()
WHERE EmpNo = @oldEmpNo

EXECUTE newEmp 10102, 10105, 'p2';













4)

ALTER TABLE COMPANY.Project
ADD Budget INT DEFAULT 0;

UPDATE COMPANY.Project
SET budget = 100000
WHERE ProjectName = 'p1';

UPDATE COMPANY.Project
SET budget = 200000
WHERE ProjectName = 'p2';

ALTER COMPANY.Project
ADD Budget


CREATE TABLE History
(
ProjectNo varchar(20),
UserName varchar(20),
ModifiedDate Date,
Budget_Old INT,
Budget_New INT
)

CREATE TRIGGER tbud
ON COMPANY.Project
AFTER UPDATE
AS
	IF UPDATE(Budget)
		BEGIN
			DECLARE @Budget_Old INT, @Budget_New INT, @ProjectNo VARCHAR(20)
			SELECT @Budget_Old = Budget FROM DELETED
			SELECT @Budget_New = Budget FROM INSERTED
			SELECT @ProjectNo =	ProjectNo FROM DELETED
			INSERT INTO History
			VALUES(@ProjectNo, suser_name(), getdate(), @Budget_Old, @Budget_New)
		END



5)

CREATE TRIGGER tnewRec
ON Department
INSTEAD OF INSERT
AS
SELECT 'You cant insert a new record in this table'



SELECT * FROM Resource.Employee
SELECT * FROM WorksOn
SELECT * FROM COMPANY.Project



6)

ALTER TRIGGER Resource.tEmpMarch
ON Resource.Employee
INSTEAD OF INSERT
AS
IF format(getdate(),'MMMM') = 'December'
	SELECT 'Sorry you cant insert during December!'
ELSE
	INSERT INTO Resource.Employee SELECT * FROM INSERTED

INSERT INTO Resource.Employee 
VALUES (1272, 'Omar', 'Ahmed', 'd1', 2831)



7)

CREATE TABLE StudentAudit
(
SUserName varchar(20),
ModifiedDate Date,
Note INT,
)

CREATE TRIGGER tsr
ON Student
AFTER INSERT
AS
	DECLARE @note VARCHAR(30)
	SELECT @note = suser_name() + 'inserted new row with key = ' + (SELECT St_Id FROM INSERTED) + 'in table Student'
	INSERT INTO StudentAudit
	VALUES(suser_name(), getdate(), @note)



8)

CREATE TRIGGER tsrDel
ON Student
INSTEAD OF DELETE
AS
	DECLARE @note VARCHAR(30)
	SELECT @note = suser_name() + 'tried to delete row with key = ' + (SELECT St_Id FROM DELETED) + 'from table Student'
	INSERT INTO StudentAudit
	VALUES(suser_name(), getdate(), @note)



9)

SELECT * FROM HumanResources.Employee
for xml raw, ELEMENTS

SELECT * FROM HumanResources.Employee
for xml raw




SELECT * FROM Department
SELECT * FROM Instructor

10)

SELECT Dept_Name, Ins_Name
FROM Department d JOIN Instructor i
ON d.Dept_Id = i.Dept_id
FOR XML AUTO


SELECT d.Dept_Name AS "DeptName",
       (SELECT i.Ins_Name AS "InsName"
        FROM Instructor i
        WHERE i.Dept_Id = d.Dept_Id
        FOR XML PATH(''), TYPE) AS "Instructors"
FROM Department d
FOR XML PATH('Department'), ROOT('Departments')



11)

DECLARE @docs XML = '<customers>
              <customer FirstName="Bob" Zipcode="91126">
                     <order ID="12221">Laptop</order>
              </customer>
              <customer FirstName="Judy" Zipcode="23235">
                     <order ID="12221">Workstation</order>
              </customer>
              <customer FirstName="Howard" Zipcode="20009">
                     <order ID="3331122">Laptop</order>
              </customer>
              <customer FirstName="Mary" Zipcode="12345">
                     <order ID="555555">Server</order>
              </customer>
       </customers>'

  DECLARE @hdocs INT

 EXEC sp_xml_preparedocument @hdocs output, @docs

 SELECT *
 FROM OPENXML (@hdocs, '//Customer')
 WITH (StudentID INT '@StudentID',
		FirstName VARCHAR(20) 'FirstName',
		Zipcode	INT 'Zipcode',
		CusOrder VARCHAR (20) 'CusOrder')

EXEC sp_xml_removedocument @hdocs
		