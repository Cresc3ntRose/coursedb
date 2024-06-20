drop table if exists course;
create table course (
       id serial primary key,
       teacher_id INT not null,
       name varchar(140) not null,
       time TIMESTAMP default now(),
       description varchar(2000),
       format varchar(30),
       structure varchar(200),
       duration varchar(30),
       price INT,
       language varchar(30),
       level varchar(30)
);
insert into course (teacher_id, name, time)
values(
              1,
              'First course',
              '2024-06-17 05:40:00'
       );
insert into course (teacher_id, name, time)
values(
              1,
              'Second course',
              '2024-06-18 05:45:00'
       );
insert into course (teacher_id, name, time)
values(
              1,
              'Third course',
              '2024-06-18 05:45:00'
       );

drop table if exists teacher;
create table teacher (
       id serial primary key,
       name varchar(100) not null,
       picture_url varchar(200) not null,
       profile varchar(2000) not null
);
insert into teacher (name, picture_url, profile)
values(
              'Fei Gao',
              'https://person.zju.edu.cn/fgaoaa',
              'a teacher in FAST_Lab, ZJU'
       );
insert into teacher (name, picture_url, profile)
values(
              'Boyu Zhou',
              'https://boyuzhou.net/pub/',
              'a teacher in STAR_Lab, SYSU'
       );
insert into teacher (name, picture_url, profile)
values(
              'Shaojie Shen',
              'https://seng.hkust.edu.hk/about/people/faculty/shaojie-shen',
              'a teacher in HKUST & DJI'
       );