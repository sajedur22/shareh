// lib/api/courseApi.ts
import { api } from "@/lib/api/axios";
import { Course, ApiResponse } from "@/types/course";

/* ---------------------------------------------------
   1️⃣ Create Course (Typed)
----------------------------------------------------*/
export async function createCourse(
    payload: Partial<Course>
): Promise<ApiResponse<Course>> {
    const res = await api.post<ApiResponse<Course>>("/CreateCourse", payload);
    return res.data;
}

/* ---------------------------------------------------
   2️⃣ Update Course (Typed)
----------------------------------------------------*/
export async function updateCourse(
    id: string,
    payload: Partial<Course>
): Promise<ApiResponse<Course>> {
    const res = await api.post<ApiResponse<Course>>(
        `/UpdateCourse/${id}`,
        payload
    );
    return res.data;
}



export async function getCourseById(id: string): Promise<Course> {
    const res = await api.get<ApiResponse<Course>>(`/Course/${id}`);
    return res.data.data; // শুধুমাত্র course object
}


/* ---------------------------------------------------
   3️⃣ Course List (Pagination + Search) Typed
----------------------------------------------------*/
export async function getCourseList(
    pageNo: number,
    perPage: number,
    searchKeyword = "0"
): Promise<Course[]> {
    const res = await api.get<ApiResponse<Course[]>>(
        `/CourseList/${pageNo}/${perPage}/${searchKeyword}`
    );
    return res.data.data;
    // extract only the array
}


/* ---------------------------------------------------
   4️⃣ Course Dropdown (Typed)
----------------------------------------------------*/
export async function getCourseDropdown(): Promise<ApiResponse<Course[]>> {
    const res = await api.get<ApiResponse<Course[]>>("/CourseDropDown");
    return res.data;
}

/* ---------------------------------------------------
   5️⃣ Delete Course (Typed)
----------------------------------------------------*/
export async function deleteCourse(id: string): Promise<ApiResponse<any>> {
    const res = await api.get<ApiResponse<any>>(`/DeleteCourse/${id}`);
    return res.data;
}
