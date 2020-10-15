import { StyledCard } from './styles'

const Course = ({ course }) => (
  <StyledCard>
    <div
      className='hero'
      style={{
        background: `url(/uploads/${
          course.image ? course.image : 'fallback.jpg'
        }) center/cover no-repeat`,
      }}
    >
      <h2 className='title'>
        <a>{course.course}</a>
      </h2>
      <h3 className='instructor'>{course.instructor}</h3>
    </div>
  </StyledCard>
)

export default Course
