import * as DB from './db-data';
import { Request, Response } from './node_modules/@types/express';

function getAllCoursesFromDB() {
  return DB.getAllCourses();
}

export function getAllCourses(req: Request, res: Response) {
  console.log('Retrieving courses data ...');

  res.status(200).json({ payload: Object.values(getAllCoursesFromDB()) });
}

export function getCourseById(req: Request, res: Response) {
  const courseId = req.params['id'];
  const courses = Object.values(getAllCoursesFromDB());
  const courseById = courses.find((course: DB.ICourse) => course.id === courseId);
  res.status(200).json(courseById);
}
