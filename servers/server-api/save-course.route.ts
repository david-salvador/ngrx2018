import * as DB from './db-data';
import { Request, Response } from './node_modules/@types/express';

function getAllCoursesFromDB() {
  return DB.getAllCourses();
}

export function saveCourse(req: Request, res: Response) {
  console.log('Saving course ...');

  const id = req.params['id'];
  const changes = req.body;

  const courses: { [id: number]: DB.ICourse } = getAllCoursesFromDB();

  courses[id] = {
    ...courses[id],
    ...changes
  };

  res.status(200).json(courses[id]);
}
