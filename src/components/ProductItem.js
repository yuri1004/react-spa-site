import { Link } from "react-router-dom";


export default function ProductItem({course}){
    return (
        <figure>
            <img src={course.photoUrl} alt={course.title}/>
            <figcaption>
                <dl>
                    <dt>
                        <Link to={`/list/${course.slug}`}>
                        {course.title}
                        </Link>
                    </dt>
                    <dd>
                    {course.summary}
                    </dd>
                </dl>
            </figcaption>
        </figure>
    )
}