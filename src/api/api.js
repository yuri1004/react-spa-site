import courses from './data.json';


export function getCourses(keyword){
    if(!keyword) return courses;
    return filterByKeyword(courses,keyword);
}

function filterByKeyword(items,keyword){
        const lowerd = keyword.toLowerCase();
        return items.filter(({title})=>
            title.toLowerCase().includes(lowerd)
        )
    }

export function getCoursesBySlug(courseSlug){
    return courses.find((couse)=>couse.slug === courseSlug)
}

// 검증된 이름, 속성값 만들기
// WISHLIST_KEY
const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}');

export function getWishList(){
    return courses.filter((course)=>wishlist[course.slug])
}
export function addWishList(courseSlug){
    wishlist[courseSlug] = true;
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
}
export function deleteWishList(courseSlug){
    delete wishlist[courseSlug];
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist))
}