import { setTimeout } from 'timers';
import * as DB from './db-data';
import { Request, Response } from './node_modules/@types/express';

function getAllLessonsFromDB() {
  return DB.getAllLessons();
}

export function searchLessons(req: Request, res: Response) {
  console.log('Searching for lessons ...');

  const error = Math.random() >= 0.5;

  if (error) {
    console.log('ERROR loading lessons!');
    res.status(500).json({ message: 'random error occurred.' });
  } else {
    const queryParams = req.query;

    const courseId = queryParams.courseId;
    const filter = queryParams.filter || '';
    const sortOrder = queryParams.sortOrder;
    const pageNumber = parseInt(queryParams.pageNumber, 10) || 0;
    const pageSize = parseInt(queryParams.pageSize, 10);

    const DB_LESSONS = getAllLessonsFromDB();

    let lessons = Object.values(DB_LESSONS)
      .filter(lesson => lesson.courseId === courseId)
      .sort((l1, l2) => l1.id - l2.id);

    if (filter) {
      lessons = lessons.filter(
        lesson =>
          lesson.description
            .trim()
            .toLowerCase()
            .search(filter.toLowerCase()) >= 0
      );
    }

    if (sortOrder === 'desc') {
      lessons = lessons.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const lessonsPage = lessons.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
      res.status(200).json({ payload: lessonsPage });
    }, 1000);
  }
}
