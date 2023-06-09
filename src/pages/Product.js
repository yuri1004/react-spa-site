import './Product.css';
import { getCoursesBySlug,addWishList } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';


export default function Product(){
    const {courseSlug} = useParams();
    const course = getCoursesBySlug(courseSlug);

    const navigate = useNavigate();

    const handAddWishList = ()=>{
        addWishList(course?.slug)
        navigate('/wishlist')
    }

    return (
        <>
        <div id="productItem">
        <h1>{course.title}</h1>
        <p>
            <button type='button'
                    onClick={handAddWishList}>추가하기</button>
        </p>
        <p>{course.summary}</p>
        </div>
        <div className="topic">
            {
                course.topics.map(({topic})=>
                <dl key={topic.slug}>
                <dt>{topic.title}</dt>
                <dd>{topic.summary}</dd>
                </dl>
                )        
            }
        </div>
        </>

    )
}