import ProductItem from "../components/ProductItem";
import { deleteWishList,getWishList } from "../api/api";
import { useEffect, useState } from "react";

export default function WishList(){

    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        const NestCourses = getWishList();
        setCourses(NestCourses);
    },[])

    const handleDelete = (courseSlug)=>{
        deleteWishList(courseSlug);
        const NestCourse = getWishList();
        setCourses(NestCourse);
    }

    return (
        <div className="wishlist">
            <h1>나의 저장소</h1>
            <ul>
                {courses.map((course)=>(
                    <li key={course.key}>
                    <ProductItem course={course}/>
                    <p>
                     <button type="button"
                             onClick={()=>handleDelete(course.slug)}>버리기</button>
                    </p>
                </li>
                ))}
            </ul>
        </div>
    )
}