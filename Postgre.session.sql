-- @block
INSERT INTO room (name,creator,code)
VALUES (
    'hello',
    'what',
    'dfmasdf'
),(
    'hwo',
    'what',
    'dfmasdf'
),(
    'hiii',
    'what',
    'dfmasdf'
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