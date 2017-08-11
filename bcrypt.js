const bcrypt = require('bcrypt');

bcrypt.hash('123', 8)
.then(encrypted => console.log(encrypted));

bcrypt.compare('123', '$2a$08$iSAErd6yl8w3Q.lwvUVb5OqhdpOW9KPmGeIu/QSRjjZb./X.BK7wa')
.then(same => console.log(same));
