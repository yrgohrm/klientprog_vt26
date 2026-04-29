import _ from 'lodash';

for (let i = 2; i < 70000; i *= i) {
    console.log(_.padStart(String(i), 5))
}
