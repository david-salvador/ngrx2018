
import { COURSES as ICOURSES } from './data/courses.01';
import { LESSONS as ILESSONS } from './data/lessons.01';

export interface ICourse {
    id: number;
    description: string;
    iconUrl: string;
    courseListIcon: string;
    longDescription: string;
    category: string;
    lessonsCount: number;
    promo: boolean;
}

export interface ILesson {
    id: number;
    description: string;
    duration: string;
    seqNo: number;
    courseId: number;
}

export interface IUser {
    id: number;
    email: string;
    password: string;
}

export const USERS: { [id: number]: IUser } = {
  1: {
      id: 1,
      email: 'test@ecix.es',
      password: 'test'
  }

};

export function findCourseById(courseId: number) {
    return ICOURSES[courseId];
}

export function findLessonsForCourse(courseId: number): { [id: number]: ILesson }  {
    return Object.values(ILESSONS).filter( (lesson) => lesson.courseId === courseId);
}


export function authenticate(email: string, password: string) {

    const a_user: any = Object.values(USERS).find( (user: IUser) => user.email === email);

    if (a_user && a_user.password === password) {
        return a_user;
    } else {
        return undefined;
    }

}

export function getAllLessons(): { [id: number]: ILesson } {
    return ILESSONS;
}

export function getAllCourses(): { [id: number]: ICourse } {
    return ICOURSES;
}

