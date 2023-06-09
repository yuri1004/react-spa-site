import ProductItem from "../components/ProductItem";
import './ProductList.css';
import {getCourses} from '../api/api';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductList(){
   const [searchParam,setSearchParam] = useSearchParams();
   const initKeyword = searchParam.get('keyword');
   const [keyword,setKeyword] = useState(initKeyword || '');
   const courses = getCourses(initKeyword);
   

   const hangelKeywordChange = (e)=>setKeyword(e.target.value);
   const handleSubmit = (e)=>{
    e.preventDefault();
    setSearchParam(keyword ? {keyword} : {})
   }
    // console.log(courses)

    return (
        <div id="product">
            <h1>title</h1>
            <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="검색으로 상품찾기"
                   onChange={hangelKeywordChange}/>
            <button type="submit">검색</button>
            </form>
        <div className="container">
                <p>총 {courses.length}개가 검색되었습니다.</p>
                <div>
                    {courses.map((course)=>(<ProductItem key={course.id}
                                                         course={course}/>
                                  ))}
                </div>
        </div>
        </div>
    )
}