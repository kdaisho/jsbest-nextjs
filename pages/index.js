import Course from 'src/components/Course'
import { StyledPageContainer } from './styles'

export default function Home({ courses }) {
  return (
    <StyledPageContainer>
      {courses.map(course => (
        <Course key={course.slug} course={course} />
      ))}
    </StyledPageContainer>
  )
}

export async function getServerSideProps() {
  // const url =
  //   process.env.NODE_ENV === 'development'
  //     ? process.env.DEV_URL
  //     : process.env.PRODUCTION_URL
  const url = process.env.DEV_URL
  const res = await fetch(`${url}/api/`)
  const { courses } = await res.json()

  return {
    props: { courses },
  }
}
