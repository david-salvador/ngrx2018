import * as express from './node_modules/@types/express';
import { Application } from './node_modules/@types/express';
import { loginUser } from './auth.route';
import { getAllCourses, getCourseById } from './get-courses.route';
import { saveCourse } from './save-course.route';
import { searchLessons } from './search-lessons.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/login').post(loginUser);

app.route('/api/courses').get(getAllCourses);

app.route('/api/courses/:id').put(saveCourse);

app.route('/api/courses/:id').get(getCourseById);

app.route('/api/lessons').get(searchLessons);

const httpServer = app.listen(9000, () => {
  console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
