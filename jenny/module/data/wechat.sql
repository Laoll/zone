CREATE DATABASE wechat;

--�����û���
create table Persons(
    uId int primary key AUTO_INCREMENT,
    uname varchar(60),
    pwd varchar(12),
    gender varchar(8),
    address varchar(120),
    mobile varchar(11)
);
--Ϊ�û�����Ӽ�¼
INSERT INTO Persons VALUES (null,'Xuanwumen', '123456' ,'female', 'Beijing','18675881240');
INSERT INTO Persons VALUES (null,'Zhuanwu', '123456', 'female', 'Shanghai','18675881241');
INSERT INTO Persons VALUES (null,'Juan', '123456', 'male', 'Shandong','18675881242');
INSERT INTO Persons VALUES (null,'Li', '123456', 'male', 'Shandong','18675881242');
--����ͨѶ¼
create table contactList(
    cId int primary key AUTO_INCREMENT,
    oId int,
    fId int
);
--ΪͨѶ¼��Ӽ�¼
INSERT INTO contactList VALUES (null,1,3);
INSERT INTO contactList VALUES (null,1,2);
INSERT INTO contactList VALUES (null,1,4);
INSERT INTO contactList VALUES (null,2,3);
INSERT INTO contactList VALUES (null,4,3);
INSERT INTO contactList VALUES (null,4,2);

--��Ϣ��¼
create table messageList(
    mId int primary key IDENTITY NOT NULL,
    sender_Id int NOT NULL,
    receiver_Id int NOT NULL,
    departure_Time int NOT NULL,
    content  varchar NOT NULL,
    unread varchar NOT NULL
);
--Ϊ��Ϣ��¼�������
INSERT INTO messageList VALUES (null,1,3,);


--΢����Ϣ�б�
create table chatList(
   cl_Id int primary key NOT NULL ,
   chatId  int,
   uId     int
)
--����Ȧ
create table friendCode(
   codeId int primary key IDENTITY NOT NULL,
   userId int NOT NULL,
   content varchar NOT NULL,
   delivery_Time int NOT NULL,
)