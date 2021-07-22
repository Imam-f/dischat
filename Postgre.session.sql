-- @block
INSERT INTO room (id,name,creator,code)
VALUES (
    5,
    'hello',
    'what',
    'dfmasdf'
),(
    6,
    'hwo',
    'what',
    'dfzxcvczf'
),(
    40,
    'hiii',
    'what',
    'dfmaxcvdf'
);
-- @block
SELECT * FROM room;
-- @block
SELECT * FROM users;
-- @block
SELECT * FROM message;
-- @block
DELETE FROM users;
-- @block
DELETE FROM room;
-- @block
DELETE FROM message;