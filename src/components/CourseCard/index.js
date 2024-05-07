import {Link} from 'react-router-dom'

const CourseCard = props => {
  const {courseDetails} = props
  const {id, name, logoUrl} = courseDetails
  return (
    <div>
      <Link to={`/courses/${id}`}>
        <li>
          <img src={logoUrl} alt={name} />
          <p>{name}</p>
        </li>
      </Link>
    </div>
  )
}
export default CourseCard
